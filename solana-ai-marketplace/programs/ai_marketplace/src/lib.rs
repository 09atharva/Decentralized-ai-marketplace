// programs/ai-marketplace/src/lib.rs
use anchor_lang::prelude::*;
use anchor_spl::token::{self, Token, TokenAccount, Transfer};

declare_id!("AiMarketp1ace..............................");

#[program]
pub mod ai_marketplace {
    use super::*;

    pub fn request_inference(ctx: Context<RequestInference>, amount: u64, job_id: String) -> Result<()> {
        let cpi_accounts = Transfer {
            from: ctx.accounts.user_token_account.to_account_info(),
            to: ctx.accounts.escrow_token_account.to_account_info(),
            authority: ctx.accounts.user.to_account_info(),
        };
        let cpi_program = ctx.accounts.token_program.to_account_info();
        let cpi_ctx = CpiContext::new(cpi_program, cpi_accounts);
        token::transfer(cpi_ctx, amount)?;

        let escrow = &mut ctx.accounts.escrow_state;
        escrow.client = *ctx.accounts.user.key;
        escrow.amount = amount;
        escrow.job_id = job_id;
        escrow.is_resolved = false;
        escrow.bump = *ctx.bumps.get("escrow_state").unwrap();
        Ok(())
    }

    pub fn resolve_job(ctx: Context<ResolveJob>, creator_fee: u64, node_fee: u64) -> Result<()> {
        require!(!ctx.accounts.escrow_state.is_resolved, ErrorCode::AlreadyResolved);

        let seeds = &[
            b"escrow", 
            ctx.accounts.escrow_state.job_id.as_bytes(), 
            &[ctx.accounts.escrow_state.bump]
        ];
        let signer = &[&seeds[..]];

        // Pay Model Creator
        token::transfer(
            CpiContext::new_with_signer(
                ctx.accounts.token_program.to_account_info(), 
                Transfer {
                    from: ctx.accounts.escrow_token_account.to_account_info(),
                    to: ctx.accounts.creator_token_account.to_account_info(),
                    authority: ctx.accounts.escrow_state.to_account_info(),
                }, 
                signer
            ), 
            creator_fee
        )?;

        // Pay Compute Node
        token::transfer(
            CpiContext::new_with_signer(
                ctx.accounts.token_program.to_account_info(), 
                Transfer {
                    from: ctx.accounts.escrow_token_account.to_account_info(),
                    to: ctx.accounts.node_token_account.to_account_info(),
                    authority: ctx.accounts.escrow_state.to_account_info(),
                }, 
                signer
            ), 
            node_fee
        )?;

        ctx.accounts.escrow_state.is_resolved = true;
        Ok(())
    }
}

#[derive(Accounts)]
#[instruction(amount: u64, job_id: String)]
pub struct RequestInference<'info> {
    #[account(mut)]
    pub user: Signer<'info>,
    #[account(mut)]
    pub user_token_account: Account<'info, TokenAccount>,
    #[account(
        init,
        payer = user,
        seeds = [b"escrow", job_id.as_bytes()],
        bump,
        space = 8 + 32 + 8 + 1 + 64 // space for Pubkey, u64, bool, u8, String
    )]
    pub escrow_state: Account<'info, EscrowState>,
    #[account(mut)]
    pub escrow_token_account: Account<'info, TokenAccount>,
    pub token_program: Program<'info, Token>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct ResolveJob<'info> {
    #[account(mut)]
    pub authority: Signer<'info>,
    #[account(
        mut,
        seeds = [b"escrow", escrow_state.job_id.as_bytes()],
        bump = escrow_state.bump,
    )]
    pub escrow_state: Account<'info, EscrowState>,
    #[account(mut)]
    pub escrow_token_account: Account<'info, TokenAccount>,
    #[account(mut)]
    pub creator_token_account: Account<'info, TokenAccount>,
    #[account(mut)]
    pub node_token_account: Account<'info, TokenAccount>,
    pub token_program: Program<'info, Token>,
}

#[account]
pub struct EscrowState {
    pub client: Pubkey,
    pub amount: u64,
    pub job_id: String,
    pub is_resolved: bool,
    pub bump: u8,
}

#[error_code]
pub enum ErrorCode {
    #[msg("This job has already been resolved.")]
    AlreadyResolved,
}

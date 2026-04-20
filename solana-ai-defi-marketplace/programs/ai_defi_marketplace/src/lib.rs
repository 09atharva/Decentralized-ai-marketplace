// programs/ai-defi-marketplace/src/lib.rs
use anchor_lang::prelude::*;
use anchor_spl::token::{self, Token, TokenAccount, Transfer};

declare_id!("DefiMarketp1ace..............................");

#[program]
pub mod ai_defi_marketplace {
    use super::*;

    // 1. Vault Management
    pub fn deposit_to_vault(ctx: Context<DepositToVault>, amount: u64) -> Result<()> {
        let cpi_accounts = Transfer {
            from: ctx.accounts.user_token_account.to_account_info(),
            to: ctx.accounts.vault_token_account.to_account_info(),
            authority: ctx.accounts.user.to_account_info(),
        };
        let cpi_program = ctx.accounts.token_program.to_account_info();
        token::transfer(CpiContext::new(cpi_program, cpi_accounts), amount)?;

        let deposit = &mut ctx.accounts.vault_deposit;
        deposit.owner = *ctx.accounts.user.key;
        deposit.amount += amount;
        
        // Advanced: Calculate shares based on current yield-bearing asset price
        // For prototype: 1 share = 1 USDC
        deposit.shares += amount;

        Ok(())
    }

    pub fn withdraw_from_vault(ctx: Context<WithdrawFromVault>, amount: u64) -> Result<()> {
        let seeds = &[
            b"vault_authority",
            &[ctx.accounts.vault_state.bump]
        ];
        let signer = &[&seeds[..]];

        let cpi_accounts = Transfer {
            from: ctx.accounts.vault_token_account.to_account_info(),
            to: ctx.accounts.user_token_account.to_account_info(),
            authority: ctx.accounts.vault_authority.to_account_info(),
        };
        let cpi_program = ctx.accounts.token_program.to_account_info();
        token::transfer(CpiContext::new_with_signer(cpi_program, cpi_accounts, signer), amount)?;

        let deposit = &mut ctx.accounts.vault_deposit;
        deposit.amount -= amount;
        deposit.shares -= amount;

        Ok(())
    }

    // 2. Inference Logic (Pulls from Vault buffer)
    pub fn pay_for_inference(ctx: Context<PayForInference>, amount: u64, job_id: String) -> Result<()> {
        // Instead of pulling from user wallet, we deduct from their Vault Deposit
        let deposit = &mut ctx.accounts.vault_deposit;
        require!(deposit.amount >= amount, ErrorCode::InsufficientVaultBalance);

        deposit.amount -= amount;
        deposit.shares -= amount;

        let escrow = &mut ctx.accounts.escrow_state;
        escrow.job_id = job_id;
        escrow.amount = amount;
        escrow.is_resolved = false;
        
        Ok(())
    }
}

#[derive(Accounts)]
pub struct DepositToVault<'info> {
    #[account(mut)]
    pub user: Signer<'info>,
    #[account(mut)]
    pub user_token_account: Account<'info, TokenAccount>,
    #[account(
        init_if_needed,
        payer = user,
        seeds = [b"deposit", user.key().as_ref()],
        bump,
        space = 8 + 32 + 8 + 8
    )]
    pub vault_deposit: Account<'info, VaultDeposit>,
    #[account(mut)]
    pub vault_token_account: Account<'info, TokenAccount>,
    pub token_program: Program<'info, Token>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct WithdrawFromVault<'info> {
    #[account(mut)]
    pub user: Signer<'info>,
    #[account(mut)]
    pub user_token_account: Account<'info, TokenAccount>,
    #[account(
        mut,
        seeds = [b"deposit", user.key().as_ref()],
        bump,
    )]
    pub vault_deposit: Account<'info, VaultDeposit>,
    #[account(mut)]
    pub vault_token_account: Account<'info, TokenAccount>,
    /// CHECK: PDA signer
    pub vault_authority: AccountInfo<'info>,
    pub vault_state: Account<'info, VaultState>,
    pub token_program: Program<'info, Token>,
}

#[derive(Accounts)]
#[instruction(amount: u64, job_id: String)]
pub struct PayForInference<'info> {
    #[account(mut)]
    pub user: Signer<'info>,
    #[account(
        mut,
        seeds = [b"deposit", user.key().as_ref()],
        bump,
    )]
    pub vault_deposit: Account<'info, VaultDeposit>,
    #[account(
        init,
        payer = user,
        seeds = [b"escrow", job_id.as_bytes()],
        bump,
        space = 8 + 32 + 8 + 64 + 1
    )]
    pub escrow_state: Account<'info, EscrowState>,
    pub system_program: Program<'info, System>,
}

#[account]
pub struct VaultDeposit {
    pub owner: Pubkey,
    pub amount: u64,
    pub shares: u64,
}

#[account]
pub struct VaultState {
    pub bump: u8,
    pub total_tvl: u64,
}

#[account]
pub struct EscrowState {
    pub job_id: String,
    pub amount: u64,
    pub is_resolved: bool,
}

#[error_code]
pub enum ErrorCode {
    #[msg("Insufficient balance in DeFi Vault.")]
    InsufficientVaultBalance,
}

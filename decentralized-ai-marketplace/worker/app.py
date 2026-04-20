from fastapi import FastAPI, HTTPException, BackgroundTasks
from pydantic import BaseModel
import time
import uuid

app = FastAPI(title="AI Compute Worker Node")

class InferenceRequest(BaseModel):
    job_id: str
    model_ipfs_hash: str
    input_ipfs_hash: str

class InferenceResponse(BaseModel):
    job_id: str
    status: str
    output_ipfs_hash: str

# Simulated local storage for jobs
jobs_status = {}

def run_inference_task(job_id: str, model_hash: str, input_hash: str):
    # Simulate downloading model and input from IPFS
    time.sleep(1)
    print(f"[{job_id}] Downloaded model {model_hash} and input {input_hash}")
    
    # Simulate GPU inference workload
    jobs_status[job_id] = "running"
    time.sleep(4) 
    
    # Simulate uploading result to IPFS
    output_hash = f"QmOutput_{uuid.uuid4().hex[:8]}"
    print(f"[{job_id}] Inference complete. Output uploaded to IPFS: {output_hash}")
    
    jobs_status[job_id] = {
        "status": "completed",
        "output_ipfs_hash": output_hash
    }
    
    # In production, the worker would notify the scheduler or verify directly on-chain

@app.post("/api/v1/run", response_model=dict)
async def run_inference(req: InferenceRequest, background_tasks: BackgroundTasks):
    if req.job_id in jobs_status:
        raise HTTPException(status_code=400, detail="Job already exists")
        
    jobs_status[req.job_id] = "pending"
    background_tasks.add_task(run_inference_task, req.job_id, req.model_ipfs_hash, req.input_ipfs_hash)
    
    return {"message": "Inference job started", "job_id": req.job_id}

@app.get("/api/v1/status/{job_id}")
async def get_status(job_id: str):
    if job_id not in jobs_status:
        raise HTTPException(status_code=404, detail="Job not found")
        
    status_data = jobs_status[job_id]
    if isinstance(status_data, str):
        return {"job_id": job_id, "status": status_data}
    else:
        return {"job_id": job_id, **status_data}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

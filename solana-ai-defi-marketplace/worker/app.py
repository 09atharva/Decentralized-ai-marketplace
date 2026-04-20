# worker/app.py
from fastapi import FastAPI
from pydantic import BaseModel
import hashlib
import json
import time

app = FastAPI()

class InferenceRequest(BaseModel):
    modelIpfs: str
    inputIpfs: str

@app.post("/run")
async def run_inference(req: InferenceRequest):
    print(f"DeFi Marketplace Worker: Running {req.modelIpfs}...")
    # Simulation
    result = {"output": "DeFi AI Result", "model": req.modelIpfs}
    output_hash = hashlib.sha256(json.dumps(result, sort_keys=True).encode()).hexdigest()
    return {"status": "success", "outputHash": output_hash, "data": result}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8003)

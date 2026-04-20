# worker/app.py
from fastapi import FastAPI, HTTPException
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
    print(f"Running inference for model {req.modelIpfs}...")
    try:
        # Simulate some compute time
        time.sleep(1)
        
        # In a real scenario, we'd fetch from IPFS and run torch/tensorflow.
        # Here we mock the result.
        mock_result = {
            "prediction": "AI Model Output",
            "model": req.modelIpfs,
            "input": req.inputIpfs,
            "timestamp": time.time()
        }
        
        # Generate a deterministic hash of the result (excluding timestamp for consensus)
        result_to_hash = {"prediction": "AI Model Output", "model": req.modelIpfs}
        result_string = json.dumps(result_to_hash, sort_keys=True)
        output_hash = hashlib.sha256(result_string.encode()).hexdigest()

        return {
            "status": "success",
            "outputHash": output_hash,
            "data": mock_result
        }
    except Exception as e:
        return {"status": "error", "message": str(e)}

if __name__ == "__main__":
    import uvicorn
    uvicorn.run(app, host="0.0.0.0", port=8000)

from fastapi import FastAPI

app = FastAPI(
    title="FIFA Pulse AI",
    version="1.0.0"
)

@app.get("/")
def home():
    return {
        "message": "FIFA Pulse AI Backend Running"
    }
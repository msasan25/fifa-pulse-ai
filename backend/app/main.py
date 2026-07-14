from fastapi import FastAPI

app = FastAPI(
    title="FIFA Pulse AI",
    version="1.0.0"
)

@app.get("/")
def root():
    return {
        "status": "healthy",
        "service": "FIFA Pulse AI API"
    }

@app.get("/health")
def health():
    return {
        "status": "ok"
    }
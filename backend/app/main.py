from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import logging

logger = logging.getLogger(__name__)

from app.gemini import ask_gemini

app = FastAPI(
    title="FIFA Pulse AI",
    version="1.0.0"
)

app.add_middleware(
    CORSMiddleware,
    allow_origins=[
        "http://localhost:5173",
        "https://fifa-pulse-ai-jet.vercel.app",
    ],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class ChatRequest(BaseModel):
    persona: str
    action: str
    message: str
    scenario: str = "normal"

@app.get("/")
def root():
    return {
        "status": "healthy",
        "service": "FIFA Pulse AI API"
    }
@app.get("/health")
def health():
    return {
        "status": "healthy"
    }

@app.post("/chat")
def chat(request: ChatRequest):
    try:
        reply = ask_gemini(
    request.persona,
    request.action,
    request.message,
    request.scenario,
)

        return {
            "success": True,
            "data": reply
        }
    except Exception as e:
      logger.exception("Error while processing chat request")

<<<<<<< HEAD
        return {
            "success": False,
            "reply": str(e)
        }
=======
      return {
        "success": False,
        "reply": str(e)
    }

    
>>>>>>> bee784e (test changes)

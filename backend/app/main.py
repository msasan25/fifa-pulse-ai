from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel, Field
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
    persona: str = Field(
        min_length=2,
        max_length=30
    )

    action: str = Field(
        min_length=2,
        max_length=50
    )

    message: str = Field(
        min_length=3,
        max_length=1000
    )

    scenario: str = Field(
        default="normal",
        max_length=50
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

      return {
      "success": False,
    "error": {
        "message": "Unable to process request.",
        "details": str(e),
    },
    }

    
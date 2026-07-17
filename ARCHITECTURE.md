# 🏗 Architecture

## Overview

FIFA Pulse AI follows a cloud-native client-server architecture where the React frontend communicates with a FastAPI backend that uses Google Gemini to generate contextual, persona-based responses.

```
                        +----------------------+
                        |     End User         |
                        +----------+-----------+
                                   |
                                   |
                     Google Authentication
                                   |
                                   ▼
                     React + Vite Frontend
                                   |
                           REST API (HTTPS)
                                   |
                                   ▼
                    FastAPI Backend (Cloud Run)
                                   |
                    Persona & Scenario Processing
                                   |
                                   ▼
                         Google Gemini 2.5 Flash
                                   |
                                   ▼
                     Context-Aware AI Response
                                   |
                                   ▼
                          React User Interface
```

---

## Components

### Frontend

- React + TypeScript
- Vite
- Tailwind CSS
- Axios for API communication
- Google Authentication

Responsible for:

- User authentication
- Persona selection
- Scenario selection
- Sending AI requests
- Displaying contextual recommendations

---

### Backend

Built using FastAPI and deployed on Google Cloud Run.

Responsibilities include:

- Request validation using Pydantic
- Prompt construction
- Gemini API communication
- Response formatting
- Error handling

---

### AI Layer

Google Gemini 2.5 Flash generates recommendations using:

- Selected persona
- Operational scenario
- User query

This enables role-specific responses rather than generic chatbot outputs.

---

## Security

- Google OAuth authentication
- Environment variables for secrets
- HTTPS communication
- Pydantic request validation
- Restricted CORS configuration

---

## Deployment

Frontend

- Vercel

Backend

- Google Cloud Run

AI

- Google Gemini

The application is fully cloud deployed and communicates securely over HTTPS.

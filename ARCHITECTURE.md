# 🏗 Architecture

## Overview

FIFA Pulse AI follows a cloud-native client-server architecture that combines a modern React frontend, a scalable FastAPI backend, and Google Gemini 2.5 Flash to deliver contextual, persona-aware recommendations for stadium operations and fan assistance.

The frontend communicates securely with the backend over HTTPS. The backend validates requests, builds contextual prompts, invokes Google Gemini, and returns structured AI responses to the user interface.

---

# High-Level Architecture

```
                           +----------------------+
                           |      End User        |
                           +----------+-----------+
                                      |
                                      |
                         Google OAuth Authentication
                                      |
                                      ▼
                    +--------------------------------+
                    |   React + Vite Frontend        |
                    |  (TypeScript + Tailwind CSS)   |
                    +---------------+----------------+
                                    |
                             HTTPS REST API
                                    |
                                    ▼
                    +--------------------------------+
                    | FastAPI Backend (Cloud Run)    |
                    | • Request Validation           |
                    | • Prompt Generation            |
                    | • Persona Processing           |
                    | • Scenario Processing          |
                    | • Error Handling               |
                    +---------------+----------------+
                                    |
                                    ▼
                    +--------------------------------+
                    | Google Gemini 2.5 Flash        |
                    | Context-Aware AI Generation    |
                    +---------------+----------------+
                                    |
                                    ▼
                    +--------------------------------+
                    | Structured AI Response         |
                    +---------------+----------------+
                                    |
                                    ▼
                           React User Interface
```

---

# Architecture Flow

1. User signs in using Google OAuth.
2. The user selects a persona and stadium scenario.
3. The React frontend sends the request to the FastAPI backend.
4. FastAPI validates the request using Pydantic.
5. Persona-specific prompts are generated.
6. Google Gemini generates contextual recommendations.
7. The backend formats the response.
8. The frontend displays the AI recommendation.

---

# Components

## Frontend

**Technology**

- React
- TypeScript
- Vite
- Tailwind CSS
- Axios
- Google OAuth

### Responsibilities

- User authentication
- Persona selection
- Scenario selection
- Sending AI requests
- Rendering AI responses
- Responsive and accessible user interface

---

## Backend

**Technology**

- FastAPI
- Python
- Pydantic

### Responsibilities

- Request validation
- Persona processing
- Scenario processing
- Prompt construction
- Google Gemini communication
- Response formatting
- Error handling

---

## AI Layer

**Technology**

- Google Gemini 2.5 Flash

### Responsibilities

The AI model generates contextual recommendations using:

- Selected persona
- Stadium scenario
- User query

This enables role-aware assistance instead of generic chatbot responses.

---

# Security

The application follows several security best practices:

- Google OAuth authentication
- Environment variable-based secret management
- HTTPS communication
- Pydantic request validation
- Restricted CORS configuration
- No sensitive credentials stored in source control

---

# Deployment

| Component | Platform |
|----------|----------|
| Frontend | Vercel |
| Backend | Google Cloud Run |
| AI | Google Gemini 2.5 Flash |

The application is fully cloud deployed and communicates securely using HTTPS.

---

# Design Principles

The system is designed around the following principles:

- Separation of concerns between frontend and backend
- Stateless REST API architecture
- Persona-driven AI recommendations
- Modular React components
- Scalable cloud deployment
- Secure authentication and request validation
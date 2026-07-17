# ⚽ FIFA Pulse AI - Intelligent Stadium Operations Assistant

## Overview

FIFA Pulse AI is an AI-powered stadium operations assistant designed to enhance the FIFA World Cup 2026 experience for fans, volunteers, organizers, and venue staff. By combining persona-driven AI assistance with real-time operational guidance, the platform improves navigation, crowd management, accessibility, emergency response, and event coordination.

---

## Challenge Theme

**Generative AI for Stadium Operations & Fan Experience**

FIFA Pulse AI leverages Google Gemini to deliver contextual, role-specific recommendations that support both visitors and stadium operations throughout a match day.

---

## Problem Statement

Large sporting events involve thousands of attendees, multiple operational teams, and rapidly changing situations. Users often require quick, reliable, and context-aware information, while organizers need intelligent support for operational decision-making.

Traditional information systems provide static responses and are not personalized to different user roles.

FIFA Pulse AI addresses this by delivering AI-powered, persona-specific assistance for real-world stadium scenarios.

---

## Solution

FIFA Pulse AI provides an intelligent assistant tailored to four key personas:

- 🎟 Fan
- 🙋 Volunteer
- 🏟 Organizer
- 🛡 Venue Staff

Based on the selected persona, operational scenario, and user query, Google Gemini generates contextual recommendations for navigation, accessibility, transportation, crowd management, emergency handling, and operational support.

---

## AI Integration

Google Gemini 2.5 Flash powers the AI recommendation engine.

### AI Workflow

User Query

↓

React Frontend

↓

FastAPI Backend

↓

Google Gemini

↓

Context-Aware Recommendation

↓

Interactive AI Response

---

## System Architecture

Frontend (React + Vite)

↓

FastAPI Backend

↓

Google Gemini

↓

Response Processing

↓

Role-based AI Assistant

---

## Features

- AI-powered stadium assistant using Google Gemini
- Four role-specific personas
- Stadium scenario-aware recommendations
- Navigation and accessibility guidance
- Emergency response assistance
- Operational decision support
- Google Authentication
- Accessible user interface
- Responsive design
- Cloud-native deployment
- Automated backend testing
- GitHub Actions CI

---

## Tech Stack

### Frontend

- React
- TypeScript
- Vite
- Tailwind CSS
- Axios

### Backend

- FastAPI
- Python
- Pydantic

### AI

- Google Gemini 2.5 Flash

### Deployment

- Frontend: Vercel
- Backend: Google Cloud Run

---

## Testing

### Automated Testing

Backend tests are implemented using **pytest**.

Run locally:

```bash
cd backend
pytest
```

Automated tests cover:

- API endpoints
- Health endpoint
- Chat endpoint
- Prompt generation
- Gemini integration (mocked)
- Error handling

### Manual Testing

- Google Authentication
- Persona selection
- AI response generation
- Frontend-backend integration
- Cloud deployment verification

All backend tests are currently passing.

---

## Accessibility

The application includes:

- Responsive layouts
- Keyboard-accessible controls
- Semantic HTML
- Focus indicators
- Accessible form labels
- High-contrast interface elements

---

## Security

- Google OAuth authentication
- Environment variable-based secret management
- Pydantic request validation
- Configured CORS policy
- HTTPS deployment on Cloud Run and Vercel
- No sensitive credentials stored in source control

---

## Future Improvements

- Indoor stadium navigation
- Real-time crowd heatmaps
- Multilingual voice assistant
- Public transport integration
- Predictive crowd analytics

---

## Live Demo

**Frontend**

https://fifa-pulse-ai-jet.vercel.app/

**Backend**

https://fifa-pulse-ai-641605407204.europe-west1.run.app/

**API Documentation**

https://fifa-pulse-ai-641605407204.europe-west1.run.app/docs

**GitHub**

https://github.com/msasan25/fifa-pulse-ai

---

## Author

**Manpreet Kour**

Developed for the **FIFA AI Challenge 2026**.


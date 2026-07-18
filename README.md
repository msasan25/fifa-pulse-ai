# ⚽ FIFA Pulse AI – Intelligent Stadium Operations Assistant

## Overview

FIFA Pulse AI is an AI-powered stadium operations assistant built for the **FIFA AI Challenge 2026**. The platform enhances the FIFA World Cup experience by providing intelligent, persona-specific recommendations for fans, volunteers, organizers, and venue staff using **Google Gemini 2.5 Flash**.

By combining Generative AI with a modern cloud-native architecture, FIFA Pulse AI delivers contextual assistance for navigation, accessibility, crowd management, transportation, emergency response, and operational decision-making.

---

# 🚀 Key Features

- 🤖 AI-powered stadium assistant using Google Gemini 2.5 Flash
- 👥 Four role-specific personas
  - 🎟 Fan
  - 🙋 Volunteer
  - 🏟 Organizer
  - 🛡 Venue Staff
- 🏟 Stadium scenario-aware recommendations
- 🗺 Navigation and accessibility guidance
- 🚨 Emergency response assistance
- 📊 Operational decision support
- 🔐 Google OAuth Authentication
- ♿ Accessible and responsive interface
- ☁ Cloud-native deployment
- ✅ Automated backend testing with Pytest
- 🔄 GitHub Actions CI pipeline

---

# 🏆 Challenge Theme

**Generative AI for Stadium Operations & Fan Experience**

FIFA Pulse AI leverages Google Gemini to deliver contextual, role-specific recommendations that improve stadium operations and enhance the fan experience throughout a match day.

---

# Problem Statement

Managing large sporting events involves thousands of attendees, multiple operational teams, and rapidly changing situations.

Traditional information systems often provide static information and generic responses that do not adapt to different user roles or operational scenarios.

FIFA Pulse AI addresses this challenge by providing intelligent, persona-driven assistance that delivers relevant recommendations in real time for navigation, accessibility, crowd management, emergency handling, and stadium operations.

---

# Solution

FIFA Pulse AI supports four primary personas:

- 🎟 Fan
- 🙋 Volunteer
- 🏟 Organizer
- 🛡 Venue Staff

Based on the selected persona, operational scenario, and user query, Google Gemini generates contextual recommendations for:

- Stadium navigation
- Crowd management
- Accessibility services
- Transportation guidance
- Emergency response
- Operational coordination

---

# 🤖 AI Workflow

```
User
   │
   ▼
React Frontend
   │
   ▼
FastAPI Backend
   │
   ▼
Google Gemini 2.5 Flash
   │
   ▼
Persona-Aware AI Recommendation
   │
   ▼
Interactive AI Response
```

---

# 🏗 System Architecture

A detailed architecture diagram, request flow, and component interactions are documented in **ARCHITECTURE.md**.

---

# 🛠 Technology Stack

| Layer | Technology |
|--------|------------|
| Frontend | React, TypeScript, Vite, Tailwind CSS |
| Backend | FastAPI, Python, Pydantic |
| AI | Google Gemini 2.5 Flash |
| Authentication | Google OAuth |
| Deployment | Vercel, Google Cloud Run |
| Testing | Pytest |
| CI/CD | GitHub Actions |

---

# 🚀 Getting Started

## Clone Repository

```bash
git clone https://github.com/msasan25/fifa-pulse-ai.git

cd fifa-pulse-ai
```

---

## Frontend

```bash
cd frontend

npm install

npm run dev
```

---

## Backend

```bash
cd backend

pip install -r requirements.txt

uvicorn app.main:app --reload
```

---

# 🧪 Testing

Backend tests are implemented using **Pytest**.

Run locally:

```bash
cd backend

pytest
```

Current automated test coverage includes:

- API endpoints
- Health endpoint
- Chat endpoint
- Prompt generation
- Gemini integration (mocked)
- Error handling

All backend tests are currently passing.

---

# ♿ Accessibility

The application follows accessibility best practices, including:

- Responsive layouts
- Semantic HTML
- Keyboard navigation
- Focus indicators
- Accessible labels
- High-contrast UI components

---

# 🔒 Security

Security features include:

- Google OAuth authentication
- Environment variable-based secret management
- Pydantic request validation
- Configured CORS policy
- HTTPS deployment on Cloud Run and Vercel
- No sensitive credentials stored in source control

---

# 🔮 Future Enhancements

- Indoor stadium navigation
- Live crowd heatmaps
- Multilingual voice assistant
- Public transport integration
- Predictive crowd analytics
- Real-time operational notifications

---

# 🌐 Live Demo

| Resource | Link |
|----------|------|
| Frontend | https://fifa-pulse-ai-jet.vercel.app/ |
| Backend | https://fifa-pulse-ai-641605407204.europe-west1.run.app/ |
| API Documentation | https://fifa-pulse-ai-641605407204.europe-west1.run.app/docs |
| GitHub Repository | https://github.com/msasan25/fifa-pulse-ai |

---

# 👩‍💻 Author

**Manpreet Kour**

Developed for the **FIFA AI Challenge 2026**.

---

# 📄 License

This project was developed for the FIFA AI Challenge 2026 and is intended for demonstration and educational purposes.
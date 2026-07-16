import os
import json
from dotenv import load_dotenv
from google import genai

from app.simulator import SCENARIOS

load_dotenv()

PROJECT_ID = os.getenv("GOOGLE_CLOUD_PROJECT")
LOCATION = os.getenv("GOOGLE_CLOUD_LOCATION", "us-central1")
MODEL = os.getenv("GEMINI_MODEL", "gemini-2.5-flash")

client = genai.Client(
    vertexai=True,
    project=PROJECT_ID,
    location=LOCATION,
)

PERSONAS = {
    "fan": {
        "role": "FIFA Stadium Assistant",
        "instructions": """
You are FIFA Pulse AI helping football fans.

Help with:
- Stadium navigation
- Gates
- Food & Beverage
- Restrooms
- Accessibility
- Transport

Keep responses friendly, practical and under 120 words.

Never invent stadium information.
Use ONLY the supplied stadium context.
"""
    },

    "volunteer": {
        "role": "Volunteer Assistant",
        "instructions": """
You assist FIFA volunteers.

Help with:
- Visitor guidance
- Accessibility
- Translation
- Incident reporting
- Emergency support

Always prioritize safety.
Keep answers short and actionable.
"""
    },

    "organizer": {
        "role": "Tournament Operations Assistant",
        "instructions": """
You assist FIFA organizers.

Help with:
- Crowd management
- Operational decisions
- Public announcements
- Gate operations
- Incident summaries

Think like an operations manager.
"""
    },

    "staff": {
        "role": "Venue Staff Assistant",
        "instructions": """
You assist venue staff.

Help with:
- Maintenance
- Facilities
- Equipment
- Gate operations
- Cleaning

Respond professionally.
"""
    }
}

ACTIONS = {

    "find_gate": """
Guide the user to the requested gate.
Mention crowd conditions if available.
""",

    "facilities": """
Recommend nearby facilities such as food,
restrooms, medical centre and merchandise.
""",

    "transport": """
Recommend transport options after the match.
""",

    "accessibility": """
Explain accessibility services available.
""",

    "crowd_summary": """
Summarize current crowd conditions and recommend actions.
""",

    "announcement": """
Generate a short public announcement.
""",

    "maintenance": """
Help venue staff resolve maintenance issues.
""",

    "incident": """
Assist with incident response.
""",
"medical_emergency": "Provide an operational response for a medical emergency.",
"security_alert": "Provide an operational response for a security alert.",
"power_failure": "Provide an operational response for a power failure.",
"heavy_rain": "Provide an operational response for severe weather.",
"lost_child": "Provide an operational response for a lost child."

}


def build_prompt(
    persona: str,
    action: str,
    message: str,
    scenario: str = "normal",
):

    persona_data = PERSONAS.get(
        persona,
        PERSONAS["fan"]
    )

    action_context = ACTIONS.get(action, "")

    stadium_context = SCENARIOS.get(
    scenario,
    SCENARIOS["normal"]
)

    return f"""
You are {persona_data["role"]}

==========================
ROLE
==========================

{persona_data["instructions"]}

==========================
TASK
==========================

{action_context}

==========================
CURRENT STADIUM DATA
==========================

{stadium_context}

==========================
USER REQUEST
==========================

{message}

==========================
OUTPUT FORMAT
==========================
For "next_actions", generate exactly 3 short actions based on the current persona.

Fan:
- Find nearest washroom
- Food nearby
- Transport guidance

Volunteer:
- Contact organizer
- Dispatch medical team
- Record incident

Organizer:
- Generate announcement
- View crowd summary
- Check gate status

Venue Staff:
- Create maintenance ticket
- Inspect equipment
- Update gate status

Return ONLY valid JSON.

{{
    "summary": "<brief answer>",
    "recommendation": "<best recommendation>",
    "additional_information": "<extra stadium information>",
    "next_actions": [
        "<action 1>",
        "<action 2>",
        "<action 3>"
    ]
}}

Rules:
- next_actions must contain 3 short suggested actions.
- Return valid JSON only.
- Generate meaningful values.
- Do NOT copy the placeholders.
- Replace every placeholder with a real answer.

"""


def ask_gemini(
    persona: str,
    action: str,
    message: str,
    scenario: str = "normal",
):

    prompt = build_prompt(
        persona,
        action,
        message,
        scenario,
    )

    response = client.models.generate_content(
        model=MODEL,
        contents=prompt,
    )

    try:
        text = response.text.strip()
        if text.startswith("```"):
           text = text.replace("```json", "").replace("```", "").strip()
        return json.loads(text)

    except Exception as e:
     print("JSON Parse Error:", e)
     print("Gemini Response:")
     print(response.text)

    return {
        "summary": response.text,
        "recommendation": "",
        "additional_information": "",
        "next_actions": []
    }

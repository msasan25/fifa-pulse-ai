
from app.gemini import build_prompt


FRONTEND_ACTION_KEYS = [
    "find_gate", "facilities", "translate", "accessibility",
    "incident", "lost_found", "medical", "organizer",
    "crowd_summary", "incident_summary", "volunteer_status",
    "transport", "operations", "medical_emergency", "security_alert",
    "power_failure", "heavy_rain", "lost_child", "maintenance",
    "gate_status", "cleaning", "equipment", "checklist",
]

def test_all_frontend_actions_have_backend_context():
    missing = [a for a in FRONTEND_ACTION_KEYS if a not in ACTIONS]
    assert not missing, f"Missing ACTIONS entries: {missing}"

def test_build_prompt_contains_message():
    prompt = build_prompt(
        persona="fan",
        action="find_gate",
        message="Where is Gate A?",
        scenario="normal",
    )

    assert "Where is Gate A?" in prompt
    assert "FIFA Stadium Assistant" in prompt
    assert "CURRENT STADIUM DATA" in prompt


def test_unknown_persona_defaults_to_fan():
    prompt = build_prompt(
        persona="unknown",
        action="find_gate",
        message="Hello",
        scenario="normal",
    )

    assert "FIFA Stadium Assistant" in prompt
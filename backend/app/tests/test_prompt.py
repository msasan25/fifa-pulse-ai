from app.gemini import build_prompt


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
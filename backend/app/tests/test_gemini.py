from unittest.mock import Mock

from app import gemini


def test_invalid_json_returns_fallback(monkeypatch):
    fake = Mock()
    fake.text = "This is not JSON."

    monkeypatch.setattr(
        gemini.client.models,
        "generate_content",
        lambda **kwargs: fake,
    )

    result = gemini.ask_gemini(
        "fan",
        "find_gate",
        "Hello",
        "normal",
    )

    assert result["summary"] == "This is not JSON."
    assert result["next_actions"] == []
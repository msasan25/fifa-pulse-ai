from app.tests.conftest import client

def test_chat_success():
    payload = {
        "persona": "fan",
        "action": "navigate",
        "message": "Where is Gate A?",
        "scenario": "normal"
    }

    response = client.post("/chat", json=payload)

    assert response.status_code == 200

    body = response.json()

    assert body["success"] is True
    assert "data" in body


def test_chat_validation():
    payload = {
        "persona": "fan"
    }

    response = client.post("/chat", json=payload)

    assert response.status_code == 422
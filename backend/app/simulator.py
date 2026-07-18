SCENARIOS = {
    "normal": """
Tournament: FIFA World Cup 2026

Scenario:
Normal Match Operations

Gate A : Open (4 min)
Gate B : Moderate Crowd (8 min)
Gate C : Busy (15 min)
Gate D : Closed

Food:
Pizza Corner
Burger Hub
Coffee Bar

Medical:
Gate B

Transport:
Metro - 10 min walk
Bus - Platform 4
Taxi - Zone B
""",
    "peak": """
Tournament: FIFA World Cup 2026

Scenario:
Peak Entry

Gate A : Heavy Crowd (20 min)
Gate B : Heavy Crowd (25 min)
Gate C : Full Capacity
Gate D : Closed

Recommendation:
Use Gate A only if necessary.

Transport:
Metro crowded.
Extra buses deployed.
""",
    "emergency": """
Tournament: FIFA World Cup 2026

Scenario:
Emergency Evacuation

Gate A : Open
Gate B : Closed
Gate C : Emergency Exit
Gate D : Closed

Medical Team:
Dispatched

Security:
High Alert

Recommendation:
Guide spectators calmly toward Gate C.
""",
    "post_match": """
Tournament: FIFA World Cup 2026

Scenario:
Post Match Exit

Gate A : Open
Gate B : Open
Gate C : Open

Crowd:
Very High

Transport:
Metro delayed
Extra buses available
Taxi waiting time 25 minutes
""",
    "medical_emergency": """
Tournament: FIFA World Cup 2026

Scenario:
Medical Emergency

Location:
North Concourse

Patient:
Unconscious spectator

Medical Team:
Dispatched

Nearest Medical Centre:
Gate B

Crowd:
Moderate

Security:
Area isolated
""",
    "security_alert": """
Tournament: FIFA World Cup 2026

Scenario:
Security Alert

Suspicious package reported near Gate C.

Gate C:
Closed

Security Team:
Investigating

Crowd:
Redirect spectators to Gate A.
""",
    "power_failure": """
Tournament: FIFA World Cup 2026

Scenario:
Power Failure

Affected Area:
East Wing

Emergency Lighting:
Enabled

Elevators:
Unavailable

Staff:
Maintenance team dispatched.
""",
    "heavy_rain": """
Tournament: FIFA World Cup 2026

Scenario:
Heavy Rain

Visibility:
Low

Field:
Playable

Transport:
Metro delayed

Umbrella Distribution:
Gate A
""",
    "lost_child": """
Tournament: FIFA World Cup 2026

Scenario:
Lost Child

Last Seen:
Food Court

Volunteer Team:
Searching

Security:
Informed

Recommendation:
Escort guardian to Information Desk.
""",
}

import AIAssistantPanel from "../components/AIAssistantPanel";
import { useState } from "react";
import { logout } from "../auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const dashboardContent = {

    fan: {
        title: "⚽ Fan",
        actions: [
            {
                label: "📍 Find My Gate",
                action: "find_gate",
                prompt: "Guide me to my gate using the current stadium information."
            },
            {
                label: "🚻 Find Washroom",
                action: "facilities",
                prompt: "Show the nearest washrooms."
            },
            {
                label: "🍔 Food & Beverage",
                action: "facilities",
                prompt: "Recommend nearby food, drinks and merchandise."
            },
            {
                label: "🌐 Language Assistance",
                action: "translate",
                prompt: "Help translate a conversation with stadium staff."
            },
            {
                label: "♿ Accessibility Help",
                action: "accessibility",
                prompt: "Explain the available accessibility services."
            }
        ]
    },

    volunteer: {
        title: "🦺 Volunteer",
        actions: [
            {
                label: "🚨 Report Incident",
                action: "incident",
                prompt: "Help me report an incident."
            },
            {
                label: "🧒 Lost & Found",
                action: "lost_found",
                prompt: "Assist with a lost child or missing item."
            },
            {
                label: "🚑 Request Medical Help",
                action: "medical",
                prompt: "Request medical assistance."
            },
            {
                label: "🌐 Translate Conversation",
                action: "translate",
                prompt: "Translate a conversation between a visitor and volunteer."
            },
            {
                label: "📢 Contact Organizer",
                action: "organizer",
                prompt: "Prepare an update for the organizer."
            }
        ]
    },

    organizer: {
        title: "🎧 Organizer",
        actions: [
            {
                label: "📊 Crowd Status",
                action: "crowd_summary",
                prompt: "Summarize current crowd conditions."
            },
            {
                label: "🚨 Active Incidents",
                action: "incident_summary",
                prompt: "Summarize all current incidents."
            },
            {
                label: "👥 Volunteer Status",
                action: "volunteer_status",
                prompt: "Provide volunteer deployment status."
            },
            {
                label: "🚍 Transport Updates",
                action: "transport",
                prompt: "Provide transport updates around the stadium."
            },
            {
                label: "🤖 AI Operational Summary",
                action: "operations",
                prompt: "Generate an operational briefing."
            },
            {
                label: "🚨 Medical Emergency",
                action: "medical_emergency",
                prompt: "Provide an operational response for the current medical emergency."
            },
            {
                label: "🛡 Security Alert",
                action: "security_alert",
                prompt: "Provide an operational response for the current security alert."
            },
            {
                label: "⚡ Power Failure",
                action: "power_failure",
                prompt: "Provide an operational response for the power failure."
            },
            {
                label: "🌧 Heavy Rain",
                action: "heavy_rain",
                prompt: "Provide an operational response for severe weather."
            },
            {
                label: "👦 Lost Child",
                action: "lost_child",
                prompt: "Provide an operational response for a lost child."
            },
        ]
    },

    staff: {
        title: "🏟 Venue Staff",
        actions: [
            {
                label: "🔧 Maintenance Request",
                action: "maintenance",
                prompt: "Help resolve a maintenance request."
            },
            {
                label: "🚪 Gate Status",
                action: "gate_status",
                prompt: "Show current gate status."
            },
            {
                label: "🧹 Cleaning Request",
                action: "cleaning",
                prompt: "Create a cleaning request."
            },
            {
                label: "⚡ Equipment Issue",
                action: "equipment",
                prompt: "Report an equipment issue."
            },
            {
                label: "📋 Facility Checklist",
                action: "checklist",
                prompt: "Show today's facility checklist."
            }
        ]
    }

};


export default function Dashboard() {
    const navigate = useNavigate();
    const persona =
        (localStorage.getItem("persona") as keyof typeof dashboardContent) || "fan";

    const content = dashboardContent[persona];
    const [selectedAction, setSelectedAction] = useState("");
    const [selectedPrompt, setSelectedPrompt] = useState("");
    const [scenario, setScenario] = useState("normal");
    const handleLogout = async () => {

        await logout();

        localStorage.removeItem("userName");
        localStorage.removeItem("userEmail");
        localStorage.removeItem("userPhoto");

        navigate("/");

    };

    useEffect(() => {

        const persona = localStorage.getItem("persona");

        if (persona === "fan") return;

        const email = localStorage.getItem("userEmail");

        if (!email) {
            navigate("/login");
        }

    }, [navigate]);
   

    return (
        <main className="min-h-screen bg-slate-100 p-8">
            <div className="mb-6 flex justify-end">
                <button
                    onClick={handleLogout}
                    className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
                >
                    Logout
                </button>
            </div>

            <div className="mb-6">
                <label className="mb-2 block font-semibold">
                    Stadium Scenario
                </label>

                <select
                    value={scenario}
                    onChange={(e) => setScenario(e.target.value)}
                    className="rounded-lg border p-2"
                >
                    <option value="normal">Normal Match</option>
                    <option value="peak">Peak Entry</option>
                    <option value="emergency">Emergency</option>
                    <option value="post_match">Post Match Exit</option>
                </select>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-3">

                <div className="lg:col-span-2">

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

                        {content.actions.map((item) => (

                            <button
                                key={item.label}
                                onClick={() => {
                                    setSelectedAction(item.action);
                                    setSelectedPrompt(item.prompt);
                                }}
                                className="rounded-xl bg-white p-6 text-left shadow transition hover:shadow-lg"
                            >
                                <h2 className="text-lg font-semibold">
                                    {item.label}
                                </h2>

                            </button>

                        ))}

                    </div>

                </div>

                <AIAssistantPanel
                    title="AI Assistant"
                    placeholder="Ask a question..."
                    prompt={selectedPrompt}
                    action={selectedAction}
                    scenario={scenario}
                />

            </div>

        </main>
    );
}
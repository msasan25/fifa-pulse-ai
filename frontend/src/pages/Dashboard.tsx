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
        <main className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 px-6 py-8">            <div className="mb-8">
                <h1 className="text-4xl font-bold text-slate-800">
                    {content.title}
                </h1>

                <p className="mt-2 text-slate-600">
                    AI-powered stadium assistance for FIFA World Cup 2026.
                </p>
            </div>
           <div className="mb-6 flex justify-between items-center"> 
                <button aria-label="Logout"
                    onClick={handleLogout}
                    className="rounded-xl bg-red-600 px-5 py-2 font-medium text-white transition hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"                >
                    Logout
                </button>
            </div>

            <div className="mb-6" >
                <label
                    htmlFor="scenario"
                    className="mb-2 block font-semibold focus:outline-none"
                >
                    Stadium Scenario
                </label>

                <select
                    id="scenario"
                    aria-label="Stadium Scenario"
                    value={scenario}
                    onChange={(e) => setScenario(e.target.value)}
                    className="w-full max-w-sm rounded-xl border border-slate-300 bg-white px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                    <option value="normal">Normal Match</option>
                    <option value="peak">Peak Entry</option>
                    <option value="emergency">Emergency</option>
                    <option value="post_match">Post Match Exit</option>
                </select>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-3 focus:outline-none
">

                <div className="lg:col-span-2 focus:outline-none
">

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 focus:outline-none
">

                        {content.actions.map((item) => (

                            <button
                                key={item.label}
                                onClick={() => {
                                    setSelectedAction(item.action);
                                    setSelectedPrompt(item.prompt);
                                }}
                                className={`rounded-2xl border p-6 text-left transition-all duration-300
${selectedAction === item.action
                                        ? "border-blue-500 bg-blue-50 shadow-lg"
                                        : "border-slate-200 bg-white shadow-md hover:-translate-y-1 hover:shadow-xl"
                                    }
focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2`}                            >
                                <h2 className="text-lg font-semibold focus:outline-none">
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
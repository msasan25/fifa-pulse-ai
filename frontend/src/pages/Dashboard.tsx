import AIAssistantPanel from "../components/AIAssistantPanel";
import ActionCard from "../components/ActionCard";
import { useState } from "react";
import { logout } from "../auth";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { dashboardContent } from "../data/dashboardContent";


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
    const handleActionSelect = (
        action: string,
        prompt: string
    ) => {
        setSelectedAction(action);
        setSelectedPrompt(prompt);
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 px-6 py-8">            <div className="mb-8">
            <h1 id="dashboard-title"
                className="text-4xl font-bold text-slate-800">
                    {content.title}
                </h1>

                <p className="mt-2 text-slate-600">
                    AI-powered stadium assistance for FIFA World Cup 2026.
                </p>
            </div>
           <div className="mb-6 flex justify-between items-center"> 
                <button aria-label="Logout"
                    onClick={handleLogout}
                    className="rounded-xl bg-red-600 px-5 py-2 font-medium text-white transition hover:bg-red-700 focus:outline-none focus-visible:ring-2 focus:ring-red-500 focus:ring-offset-2"                >
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

                <select aria-describedby="scenario-help"
                    id="scenario"
                    aria-label="Stadium Scenario"
                    value={scenario}
                    onChange={(e) => setScenario(e.target.value)}
                    className="w-full max-w-sm rounded-xl border border-slate-300 bg-white px-4 py-3 shadow-sm focus:outline-none focus-visible:ring-2 focus:ring-blue-500"
                >
                    <option value="normal">Normal Match</option>
                    <option value="peak">Peak Entry</option>
                    <option value="emergency">Emergency</option>
                    <option value="post_match">Post Match Exit</option>
                </select>
            </div>

            <div className="mt-10 grid gap-8 lg:grid-cols-3 focus:outline-none
">

                <div className="lg:col-span-2 focus:outline-none" aria-labelledby="dashboard-title">

                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 focus:outline-none
">

                        {content.actions.map((item) => (
                            <ActionCard
                                key={item.label}
                                label={item.label}
                                selected={selectedAction === item.action}
                                onClick={() => handleActionSelect(item.action, item.prompt)}
                            />
                        ))}

                    </div>

                </div>
                <aside aria-label="AI Assistant">
                <AIAssistantPanel
                    title="AI Assistant"
                    placeholder="Ask a question..."
                    prompt={selectedPrompt}
                    action={selectedAction}
                    scenario={scenario}
                    />
                </aside>

            </div>

        </main>
    );
}
import AIAssistantPanel from "../components/AIAssistantPanel";
import { useState } from "react";
const dashboardContent = {
    
    fan: {
        title: "⚽ Fan",
        actions: [
            "📍 Find My Gate",
            "🚻 Find Washroom",
            "🍔 Food & Beverage",
            "🌐 Language Assistance",
            "♿ Accessibility Help",
        ],
    },
    volunteer: {
        title: "🦺 Volunteer",
        actions: [
            "🚨 Report Incident",
            "🧒 Lost & Found",
            "🚑 Request Medical Help",
            "🌐 Translate Conversation",
            "📢 Contact Organizer",
        ],
    },
    organizer: {
        title: "🎧 Organizer",
        actions: [
            "📊 Crowd Status",
            "🚨 Active Incidents",
            "👥 Volunteer Status",
            "🚍 Transport Updates",
            "🤖 AI Operational Summary",
        ],
    },
    staff: {
        title: "🏟 Venue Staff",
        actions: [
            "🔧 Maintenance Request",
            "🚪 Gate Status",
            "🧹 Cleaning Request",
            "⚡ Equipment Issue",
            "📋 Facility Checklist",
        ],
    },
};

export default function Dashboard() {
    const persona =
        (localStorage.getItem("persona") as keyof typeof dashboardContent) || "fan";

    const content = dashboardContent[persona];
    const [selectedPrompt, setSelectedPrompt] = useState("");

    return (
        <main className="min-h-screen bg-slate-100 p-8">
            <div className="mt-10 grid gap-8 lg:grid-cols-3">
                <div className="lg:col-span-2">
                    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                        {content.actions.map((action) => (
                            <button
                                key={action}
                                onClick={() => setSelectedPrompt(action)}
                                className="rounded-xl bg-white p-6 text-left shadow transition hover:shadow-lg"
                            >
                                <h2 className="text-lg font-semibold">{action}</h2>
                            </button>
                        ))}
                    </div>
                </div>

                <AIAssistantPanel
                    title="AI Assistant"
                    placeholder="Ask a question..."
                    prompt={selectedPrompt}
                />
            </div>
        </main>
    );
}
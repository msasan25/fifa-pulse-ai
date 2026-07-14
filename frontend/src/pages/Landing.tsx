import { useNavigate } from "react-router-dom";
import PersonaCard from "../components/PersonaCard";

export default function Landing() {
    const navigate = useNavigate();

    const selectPersona = (persona: string) => {
        localStorage.setItem("persona", persona);
        navigate("/dashboard");
    };

    return (
        <main className="min-h-screen bg-slate-100 px-6 py-16">
            <div className="mx-auto max-w-6xl">
                <div className="mb-16 text-center">
                    <h1 className="mb-4 text-5xl font-bold">
                        ⚽ FIFA Pulse AI
                    </h1>

                    <p className="mx-auto max-w-2xl text-lg text-slate-600">
                        Choose your role and experience AI-powered assistance.
                    </p>
                </div>

                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
                    <PersonaCard
                        icon="⚽"
                        title="Fan"
                        description="Navigate the stadium and get assistance."
                        onClick={() => selectPersona("fan")}
                    />

                    <PersonaCard
                        icon="🦺"
                        title="Volunteer"
                        description="Help visitors and report incidents."
                        onClick={() => selectPersona("volunteer")}
                    />

                    <PersonaCard
                        icon="🎧"
                        title="Organizer"
                        description="Monitor operations and receive AI insights."
                        onClick={() => selectPersona("organizer")}
                    />

                    <PersonaCard
                        icon="🏟"
                        title="Venue Staff"
                        description="Manage maintenance and facilities."
                        onClick={() => selectPersona("staff")}
                    />
                </div>
            </div>
        </main>
    );
}
import { useNavigate } from "react-router-dom";
import PersonaCard from "../components/PersonaCard";



export default function Landing() {
    const navigate = useNavigate();
    

    const selectPersona = (persona: string) => {

        localStorage.setItem("persona", persona);

        if (persona === "fan") {
            navigate("/dashboard");
            return;
        }

        navigate("/login");
    };

    return (
        <main className="min-h-screen bg-gradient-to-br from-slate-100 via-blue-50 to-indigo-100 px-6 py-16">            <div className="mx-auto max-w-6xl">
            <div className="mb-16 rounded-3xl bg-gradient-to-r from-blue-700 to-indigo-700 p-10 text-center text-white shadow-xl">

                <h1 className="mb-4 text-5xl font-extrabold">
                    ⚽ FIFA Pulse AI
                </h1>

                <p className="mx-auto max-w-3xl text-lg text-blue-100">
                    Real-time AI assistant for Fans, Volunteers, Organizers and Venue Staff
                    during FIFA World Cup 2026.
                </p>

            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4">                    <PersonaCard
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
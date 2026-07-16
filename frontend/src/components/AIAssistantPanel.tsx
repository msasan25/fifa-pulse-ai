import { useEffect, useState } from "react";
import api from "../api/api";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firestore";

type AIAssistantPanelProps = {
    title: string;
    placeholder: string;
    prompt: string;
    action: string;
    scenario: string;
};

export default function AIAssistantPanel({
    title,
    placeholder,
    prompt,
    action,
    scenario,
}: AIAssistantPanelProps) {

    const [message, setMessage] = useState("");
    const [response, setResponse] = useState<any>(null);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setMessage(prompt);
    }, [prompt]);

    const askAI = async () => {

        if (!message.trim()) return;

        try {

            setLoading(true);

            const persona =
                localStorage.getItem("persona") || "fan";

            const res = await api.post("/chat", {

                persona,

                action,

                scenario,

                message,

            });
            setResponse(res.data.data);
           

          

        } catch (error) {

            console.error(error);

            setResponse(
                "Unable to connect to the AI service."
            );

        } finally {

            setLoading(false);

        }

    };

    return (
        <div className="rounded-2xl bg-white p-6 shadow-lg">

            <h2 className="mb-2 text-2xl font-bold">
                {title}
            </h2>

            <p className="mb-4 text-sm text-slate-500">
                Current Action
            </p>

            <div className="mb-4 rounded-lg bg-blue-50 px-4 py-2 text-sm font-medium text-blue-700">
                {action || "No action selected"}
            </div>

            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={placeholder}
                className="h-40 w-full rounded-xl border p-4"
            />

            <button
                onClick={askAI}
                disabled={loading}
                className="mt-4 w-full rounded-xl bg-slate-900 py-3 text-white"
            >
                {loading ? "Thinking..." : "Ask AI"}
            </button>


            {response && (

                <div className="mt-6 rounded-xl bg-slate-100 p-4">

                    <div className="mb-4 flex items-center justify-between">

                        <h3 className="font-semibold">
                            🤖 FIFA Pulse AI
                        </h3>

                        <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700">
                            {localStorage.getItem("persona")}
                        </span>

                    </div>

                    <div className="mb-4">
                        <h4 className="font-semibold">
                            📍 Summary
                        </h4>

                        <p className="mt-1 whitespace-pre-wrap">
                            {response.summary}
                        </p>
                    </div>

                    <div className="mb-4">
                        <h4 className="font-semibold">
                            ✅ Recommendation
                        </h4>

                        <p className="mt-1 whitespace-pre-wrap">
                            {response.recommendation}
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold">
                            ℹ️ Additional Information
                        </h4>

                        <p className="mt-1 whitespace-pre-wrap">
                            {response.additional_information}
                        </p>
                    </div>

                    {response.next_actions?.length > 0 && (
                        <div className="mt-6">
                            <h4 className="mb-2 font-semibold">
                                Suggested Actions
                            </h4>

                            <div className="flex flex-wrap gap-2">
                                {response.next_actions.map((item: string) => (
                                    <button
                                        key={item}
                                        onClick={() => setMessage(item)}
                                        className="rounded-full bg-blue-100 px-4 py-2 text-sm hover:bg-blue-200"
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </div>
                    )}

                </div>

            )}

        </div>
    );
}
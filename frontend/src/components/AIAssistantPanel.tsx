import { useEffect, useState } from "react";
import api from "../api/api";


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
           

          

        } catch (err) {
            console.error(err);
        } finally {
            setLoading(false);
        }
    };

    console.log("loading:", loading);  

    return (
        <div className="rounded-2xl bg-white p-6 shadow-lg focus:outline-none
">

            <h2 className="mb-2 text-2xl font-bold">
                {title}
            </h2>

            <p className="mb-4 text-sm text-slate-500">
                Current Action
            </p>
            <div className="mb-6 rounded-xl bg-blue-50 px-4 py-3 text-sm font-medium text-blue-700">
           
                {action || "No action selected"}
            </div>

            <label
                htmlFor="ai-message"
                className="mb-2 block text-sm font-medium text-slate-700"
            >
                AI Request
            </label>

            <textarea
                id="ai-message"
                aria-label="AI Request"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={placeholder}
                rows={5}
                className="mb-4 w-full rounded-xl border border-slate-300 p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <button
                onClick={askAI}
                disabled={loading}
                className={`w-full rounded-xl px-4 py-3 font-semibold text-white transition ${loading
                        ? "cursor-not-allowed bg-gray-400"
                        : "bg-blue-600 hover:bg-blue-700"
                    }`}
            >
                {loading ? "🤖 FIFA Pulse AI is analysing..." : "Ask AI"}            </button>

            {!response && (
                <div className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center">

                    <div className="mb-3 text-4xl">⚽</div>

                    <h3 className="text-lg font-semibold">
                        Ready to Assist
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                        Select an action, review the stadium scenario and click
                        <strong> Ask AI </strong>
                        to receive real-time guidance.
                    </p>

                </div>
            )}
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

                    <div className="mb-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                        <h4 className="font-semibold">
                            📍 Summary
                        </h4>

                        <p className="mt-1 whitespace-pre-wrap">
                            {response.summary}
                        </p>
                    </div>

                    <div className="mb-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                        <h4 className="font-semibold">
                            ✅ Recommendation
                        </h4>

                        <p className="mt-1 whitespace-pre-wrap">
                            {response.recommendation}
                        </p>
                    </div>

                    <div className="mb-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
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
                                        className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium transition hover:scale-105 hover:bg-blue-200"
                              
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
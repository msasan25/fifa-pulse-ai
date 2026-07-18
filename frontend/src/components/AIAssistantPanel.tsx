import { useEffect, useState } from "react";
import api from "../api/api";
import type { AIResponse } from "../types/ai";

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
    const [response, setResponse] = useState<AIResponse | null>(null);    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setMessage(prompt);
    }, [prompt]);

    const askAI = async () => {
        if (!message.trim()) return;

        try {
            setLoading(true);

            const persona = localStorage.getItem("persona") || "fan";

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

    return (
        <aside
            aria-labelledby="assistant-title"
            aria-busy={loading}
            className="rounded-2xl bg-white p-6 shadow-lg"
        >
            <h2
                id="assistant-title"
                className="mb-2 text-2xl font-bold"
            >
                {title}
            </h2>

            <p className="mb-4 text-sm text-slate-500">
                Current Action
            </p>

            <div
                role="status"
                aria-live="polite"
                className="mb-6 rounded-xl bg-blue-50 px-4 py-3 text-sm font-medium text-blue-700"
            >
                {action || "No action selected"}
            </div>

            <label
                htmlFor="ai-message"
                className="mb-2 block text-sm font-medium text-slate-700"
            >
                AI Request
            </label>

            <p
                id="ai-message-help"
                className="mb-2 text-sm text-slate-500"
            >
                Describe your question or review the suggested request before asking the AI.
            </p>

            <textarea
                id="ai-message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={placeholder}
                rows={5}
                aria-label="AI Request"
                aria-describedby="ai-message-help"
                className="mb-4 w-full rounded-xl border border-slate-300 p-3 focus:ring-2 focus:ring-blue-500 focus:outline-none"
            />

            <button
                type="button"
                onClick={askAI}
                disabled={loading}
                aria-disabled={loading}
                aria-label="Ask FIFA Pulse AI"
                className={`w-full rounded-xl px-4 py-3 font-semibold text-white transition ${loading
                        ? "cursor-not-allowed bg-gray-400"
                        : "bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    }`}
            >
                {loading
                    ? "🤖 FIFA Pulse AI is analysing..."
                    : "Ask AI"}
            </button>

            <div
                className="sr-only"
                aria-live="polite"
            >
                {loading
                    ? "AI is generating a response."
                    : response
                        ? "AI response is ready."
                        : ""}
            </div>

            {!response && (
                <section
                    aria-label="Assistant status"
                    className="mt-6 rounded-2xl border border-dashed border-slate-300 bg-slate-50 p-6 text-center"
                >
                    <div
                        className="mb-3 text-4xl"
                        aria-hidden="true"
                    >
                        ⚽
                    </div>

                    <h3 className="text-lg font-semibold">
                        Ready to Assist
                    </h3>

                    <p className="mt-2 text-sm text-slate-500">
                        Select an action, review the stadium scenario and click{" "}
                        <strong>Ask AI</strong> to receive real-time guidance.
                    </p>
                </section>
            )}

            {response && (
                <section
                    aria-labelledby="response-heading"
                    aria-live="polite"
                    className="mt-6 rounded-xl bg-slate-100 p-4"
                >
                    <div className="mb-4 flex items-center justify-between">
                        <h3
                            id="response-heading"
                            className="font-semibold"
                        >
                            🤖 FIFA Pulse AI
                        </h3>

                        <span
                            className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700"
                            aria-label={`Current persona ${localStorage.getItem("persona") ?? "fan"
                                }`}
                        >
                            {localStorage.getItem("persona")}
                        </span>
                    </div>

                    <section className="mb-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                        <h4 className="font-semibold">
                            📍 Summary
                        </h4>

                        <p className="mt-1 whitespace-pre-wrap">
                            {response.summary}
                        </p>
                    </section>

                    <section className="mb-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                        <h4 className="font-semibold">
                            ✅ Recommendation
                        </h4>

                        <p className="mt-1 whitespace-pre-wrap">
                            {response.recommendation}
                        </p>
                    </section>

                    <section className="mb-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
                        <h4 className="font-semibold">
                            ℹ️ Additional Information
                        </h4>

                        <p className="mt-1 whitespace-pre-wrap">
                            {response.additional_information}
                        </p>
                    </section>

                    {response.next_actions?.length > 0 && (
                        <section
                            className="mt-6"
                            aria-labelledby="next-actions-heading"
                        >
                            <h4
                                id="next-actions-heading"
                                className="mb-2 font-semibold"
                            >
                                Suggested Actions
                            </h4>

                            <div className="flex flex-wrap gap-2">
                                {response.next_actions.map((item: string) => (
                                    <button
                                        key={item}
                                        type="button"
                                        aria-label={`Use suggested action: ${item}`}
                                        onClick={() => setMessage(item)}
                                        className="rounded-full bg-blue-100 px-4 py-2 text-sm font-medium transition hover:scale-105 hover:bg-blue-200 focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                                    >
                                        {item}
                                    </button>
                                ))}
                            </div>
                        </section>
                    )}
                </section>
            )}
        </aside>
    );
}
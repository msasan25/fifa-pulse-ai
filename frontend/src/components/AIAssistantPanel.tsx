import { useEffect, useState } from "react";

type AIAssistantPanelProps = {
    title: string;
    placeholder: string;
    prompt: string;
};

export default function AIAssistantPanel({
    title,
    placeholder,
    prompt,
}: AIAssistantPanelProps) {
    const [message, setMessage] = useState("");

    useEffect(() => {
        setMessage(prompt);
    }, [prompt]);

    return (
        <div className="rounded-2xl bg-white p-6 shadow-lg">
            <h2 className="mb-2 text-2xl font-bold">{title}</h2>

            <p className="mb-6 text-sm text-slate-500">
                Ask AI anything related to your role.
            </p>

            <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder={placeholder}
                className="h-40 w-full rounded-xl border border-slate-300 p-4 outline-none focus:border-slate-900"
            />

            <button className="mt-4 w-full rounded-xl bg-slate-900 py-3 text-white hover:bg-slate-700">
                Ask AI
            </button>
        </div>
    );
}
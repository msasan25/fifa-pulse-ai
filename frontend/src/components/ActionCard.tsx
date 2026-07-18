type ActionCardProps = {
    label: string;
    selected: boolean;
    onClick: () => void;
};

export default function ActionCard({
    label,
    selected,
    onClick,
}: ActionCardProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={label}
            className={`rounded-2xl border p-6 text-left transition-all duration-300
${selected
                    ? "border-blue-500 bg-blue-50 shadow-lg"
                    : "border-slate-200 bg-white shadow-md hover:-translate-y-1 hover:shadow-xl"
                }
focus:outline-none focus-visible:ring-2 focus:ring-blue-500 focus:ring-offset-2`}
        >
            <h2 className="text-lg font-semibold">
                {label}
            </h2>
        </button>
    );
}
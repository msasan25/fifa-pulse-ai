type PersonaCardProps = {
    icon: string;
    title: string;
    description: string;
    onClick: () => void;
};

export default function PersonaCard({
    icon,
    title,
    description,
    onClick,
}: PersonaCardProps) {
    return (
        <button
            onClick={onClick}
            className="w-full rounded-2xl border border-slate-200 bg-white p-6 text-left shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
        >
            <div className="mb-4 text-5xl">{icon}</div>

            <h2 className="mb-2 text-xl font-semibold">{title}</h2>

            <p className="text-sm text-slate-600">{description}</p>
        </button>
    );
}
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
            aria-label={title}
            className="
                w-full
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-8
                text-left
                shadow-md
                transition-all
                duration-300
                hover:-translate-y-2
                hover:shadow-2xl
                hover:border-blue-400
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:ring-offset-2
            "
        >
            <div className="mb-6 text-6xl">
                {icon}
            </div>

            <h2 className="mb-3 text-2xl font-bold text-slate-800">
                {title}
            </h2>

            <p className="text-sm leading-6 text-slate-600">
                {description}
            </p>
        </button>
    );
}
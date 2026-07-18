import { memo } from "react";

type PersonaCardProps = {
    icon: string;
    title: string;
    description: string;
    onClick: () => void;
};

function PersonaCard({
    icon,
    title,
    description,
    onClick,
}: PersonaCardProps) {
    return (
        <button
            type="button"
            onClick={onClick}
            aria-label={`Continue as ${title}`}
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
                hover:border-blue-400
                hover:shadow-2xl
                focus:outline-none
                focus:ring-2
                focus:ring-blue-500
                focus:ring-offset-2
            "
        >
            <div
                className="mb-6 text-6xl"
                aria-hidden="true"
            >
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

export default memo(PersonaCard);
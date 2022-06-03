import { TBadgeProps } from "./types";

const Badge: React.FC<TBadgeProps> = ({ icon: Icon, iconColor = "", text }) => {
    return (
        <div className="border-[0.5px] rounded-md h-[30px] border-mono-sky bg-mono-sky-lightest flex justify-center items-center gap-1 px-[10px]">
            <Icon className={"w-4 h-4 " + iconColor} /> <span className="text-small text-mono-ink">{text}</span>
        </div>
    );
};

export default Badge;

import classNames from "classnames";
import { AvatarProps } from "./types";

const Avatar: React.FC<AvatarProps> = ({ variant, picture, name, abbr }) => {
    const containerVariants = {
        xs: "w-[32px] h-[32px]",
        sm: "w-[36px] h-[36px]",
        md: "w-[48px] h-[48px]",
        lg: "w-[56px] h-[56px]",
        xl: "w-[80px] h-[80px]",
        "2xl": "w-[96px] h-[96px]",
    };

    const containerClasses = classNames("rounded-full flex justify-center items-center", containerVariants[variant], {
        "bg-mono-ink-lighter": !picture,
    });

    const spanVariants = {
        xs: "text-small",
        sm: "text-small",
        md: "text-medium",
        lg: "text-medium-16",
        xl: "text-[20px]",
        "2xl": "text-[32px]",
    };

    return (
        <div className={containerClasses} title={name}>
            {picture ? (
                <img className="rounded-full w-full" src={picture} alt={name} />
            ) : (
                <span className={spanVariants[variant] + " text-white font-semibold"}>{abbr}</span>
            )}
        </div>
    );
};

export default Avatar;

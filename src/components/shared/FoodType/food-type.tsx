import classNames from "classnames";
import React from "react";
import { TFoodTypeProps } from "./types";

const FoodType: React.FC<TFoodTypeProps> = ({ icon: Icon, text, active, onClick }) => {
    const containerClasses = classNames("flex justify-content items-center gap-2 rounded-md border-[0.5px] px-3 py-2 transition-colors", {
        "bg-primary-tint-40 border-primary": active,
        "bg-mono-sky-lightest border-mono-ink-lighter": !active,
    });

    const textClasses = classNames("text-medium-16 translate-y-px transition-colors", {
        "text-primary": active,
        "text-mono-ink-light": !active,
    });

    const iconClasses = classNames("transition-colors",{
        "fill-mono-ink-light": !active,
        "fill-primary": active,
    });

    return (
        <button className={containerClasses} onClick={onClick}>
            <Icon className={iconClasses} /> <span className={textClasses}>{text}</span>
        </button>
    );
};

export default React.memo(FoodType);

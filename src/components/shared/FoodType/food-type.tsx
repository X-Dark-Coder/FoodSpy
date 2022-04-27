import classNames from "classnames";
import React from "react";
import { TFoodTypeProps } from "./types";

const FoodType: React.FC<TFoodTypeProps> = ({ icon: Icon, text, active, onClick }) => {
    const containerClasses = classNames("flex justify-content items-center gap-2 rounded-md border-[0.5px] px-3 py-2", {
        "bg-primary-tint-30 border-primary": active,
        "bg-mono-sky-lightest border-mono-ink-lighter": !active,
    });

    const textClasses = classNames("text-medium-16 font-medium translate-y-px", {
        "text-primary": active,
        "text-mono-ink-light": !active,
    });

    return (
        <button className={containerClasses} onClick={onClick}>
            <Icon /> <span className={textClasses}>{text}</span>
        </button>
    );
};

export default React.memo(FoodType);

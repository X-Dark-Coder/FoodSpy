import React, { useEffect, useState } from "react";
import { ButtonProps } from "./button.type";
import classNames from "classnames";
import { ReactComponent as ChevronRight } from "assets/icons/Chevron/RightWhite.svg";

const Button: React.FC<ButtonProps> = ({
    variant,
    price,
    icon: Icon,
    children,
    disabled,
    onMouseDown,
    onMouseUp,
    className,
    fullWidth,
    ...rest
}) => {
    const [isMouseDown, setIsMouseDown] = useState(false);

    const buttonClasses = {
        base: `text-large font-semibold rounded-lg flex justify-center items-center 
        transition duration-100`,
        "wide-primary": `w-[335px] h-[52px] bg-primary text-white hover:bg-primary-tint-10`,
        "wide-primary-white": `w-[335px] h-[52px] bg-white text-primary hover:bg-primary-tint-40`,
        "wide-secondary-white": `w-[335px] h-[52px] border-2 border-white text-white hover:bg-primary-tint-40
        hover:text-primary hover:border-primary-tint-40`,
        "wide-secondary": `w-[335px] h-[52px] border-2 border-primary text-primary hover:bg-primary-tint-10
        hover:text-white hover:border-primary-tint-10`,
        "medium-1-primary": "",
        "medium-1-secondary": "",
        "medium-2-primary": "",
        "medium-2-secondary": "",
        "medium-2-link": "",
        "small-primary": "",
        "small-secondary": "",
        "small-white": "",
        "extra-small-primary": "",
        "extra-small-icon": "",
        "expand-small": "w-[28px] h-[28px] rounded-lg bg-primary hover:bg-primary-tint-10",
        "expand-medium": "w-[36px] h-[36px] rounded-lg bg-primary hover:bg-primary-tint-10",
        tab: "",
        payment: "",
        disabled: "bg-mono-sky-lighter text-white",
    };

    const classes = classNames(
        buttonClasses.base,
        disabled ? buttonClasses.disabled : buttonClasses[variant],
        fullWidth ? "w-full" : null,
        { "scale-[0.95]": isMouseDown },
        className
    );

    const onMouseDownHandler = () => setIsMouseDown(true);

    const onMouseUpHandler = () => setIsMouseDown(false);

    return (
        <button
            className={classes}
            onMouseDown={onMouseDownHandler}
            onMouseUp={onMouseUpHandler}
            onMouseOut={onMouseUpHandler}
            {...rest}
        >
            {variant === "expand-small" && <ChevronRight width="15px" />}
            {variant === "expand-medium" && <ChevronRight width="18px" />}

            {Icon && <Icon style={{ marginRight: "8px" }} width="16px" />}
            {children}
        </button>
    );
};

export default Button;

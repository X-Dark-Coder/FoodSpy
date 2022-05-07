import React, { useState } from "react";
import { TButtonProps } from "./button.type";
import classNames from "classnames";
import { ReactComponent as ChevronRight } from "assets/icons/Chevron/RightWhite.svg";
import { motion, Variants } from "framer-motion";

const Button: React.FC<TButtonProps> = ({
    variant,
    price,
    icon: Icon,
    children,
    disabled,
    onMouseDown,
    onMouseUp,
    className,
    fullWidth,
    rightSideElement,
    ...rest
}) => {
    const buttonClasses = {
        base: `font-semibold rounded-lg transition duration-100`,
        "wide-primary": `text-large w-[335px] h-[52px] bg-primary text-white hover:bg-primary-tint-10`,
        "wide-primary-white": `text-large w-[335px] h-[52px] bg-white text-primary hover:bg-primary-tint-40`,
        "wide-secondary-white": `text-large  w-[335px] h-[52px] border-2 border-white text-white hover:bg-primary-tint-40
        hover:text-primary hover:border-primary-tint-40`,
        "wide-secondary": `text-large w-[335px] h-[52px] border-2 border-primary text-primary hover:bg-primary-tint-10
        hover:text-white hover:border-primary-tint-10`,
        "medium-1-primary": "",
        "medium-1-secondary": "",
        "medium-2-primary": "",
        "medium-2-secondary": "",
        "medium-2-link": "",
        "small-primary": "w-[74px] h-[36px] bg-primary text-white hover:bg-primary-tint-10 text-small",
        "small-secondary": `w-[74px] h-[36px] border-2 border-primary text-primary hover:bg-primary-tint-10
        hover:text-white hover:border-primary-tint-10 text-small`,
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
        className,
        fullWidth ? "w-[100%_!important]" : null,
        rightSideElement ? "flex justify-between items-center px-3" : "flex justify-center items-center"
    );

    const buttonVariants: Variants = {
        tap: {
            scale: 0.96,
            transition: {
                type: "tween",
                ease: "linear",
                duration: 0.01,
            },
        },
    };

    return (
        <motion.button
            variants={buttonVariants}
            transition={{ duration: 0.01 }}
            whileTap="tap"
            className={classes}
            {...rest}
        >
            {variant === "expand-small" && <ChevronRight width="15px" />}
            {variant === "expand-medium" && <ChevronRight width="18px" />}

            <div className="flex justify-center items-center whitespace-nowrap">
                {Icon && <Icon className="mr-2 w-[22px] h-[22px]" />}
                {children}
            </div>
            {rightSideElement}
        </motion.button>
    );
};

export default Button;

import classNames from "classnames";
import { TInputProps } from "./types";
import { motion, Variants } from "framer-motion";
import React, { useLayoutEffect, useRef, useState } from "react";

const Input: React.FC<TInputProps> = ({
    className,
    containerClassName,
    variant,
    errorEffect,
    fullWidth,
    disableFocusEffect,
    showLabel,
    filledEffect,
    placeholder,
    onFocus,
    onBlur,
    ...rest
}) => {
    const [inputFocused, setIsInputFocused] = useState(false);
    const [inputHasValue, setIsInputHasValue] = useState(false);
    const inputElement = useRef<HTMLInputElement>(null);

    useLayoutEffect(() => {
        setIsInputHasValue(inputElement.current?.value.length !== 0)
    },[inputElement.current?.value]);

    const classes = {
        base: `w-full h-full rounded-lg pl-4 pr-2 placeholder:text-mono-ink-lightest
        text-large focus:outline-none`,
        focus: "focus:border focus:border-accent-cyan",
        simple: "bg-mono-sky-lighter",
        white: "bg-mono-sky-lightest border border-mono-sky",
        error: "border border-accent-redd",
        filled: "border border-mono-sky bg-mono-sky-lightest",
    };

    const inputClasses = classNames(
        classes.base,
        classes[variant],
        {
            [classes.error]: errorEffect,
            [classes.filled]: filledEffect && inputHasValue,
            [classes.focus]: !disableFocusEffect,
            "pt-4": showLabel,
        },
        className
    );

    const containerClasses = classNames("relative h-[64px]", fullWidth ? "w-full" : "w-[335px]", containerClassName);

    const inputLabelVariants: Variants = {
        focused: {
            left: 17,
            top: 7,
            fontSize: "13px",
            color: "rgb(92 97 111)",
            fontWeight: 400,
            translateY: 0,
            transition: {
                duration: 0.15,
                type: "tween",
            },
        },
        idle: {
            left: 16,
            top: "50%",
            color: "rgb(167 170 178)",
            fontSize: "17px",
            fontWeight: 500,
            translateY: "-50%",
            transition: {
                duration: 0.15,
                type: "tween",
            },
        },
    };

    const onInputFocus = (e: React.FocusEvent<HTMLInputElement>) => {
        if (onFocus) onFocus(e);
        setIsInputFocused(true);
    };
    const onInputBlur = (e: React.FocusEvent<HTMLInputElement>) => {
        if (onBlur) onBlur(e);
        setIsInputFocused(false);
    };

    return (
        <div className={containerClasses}>
            {showLabel && (
                <motion.span
                    variants={inputLabelVariants}
                    initial="idle"
                    animate={inputFocused || inputHasValue ? "focused" : "idle"}
                    className="text-mono-ink-lighter absolute"
                    onClick={() => inputElement.current?.focus()}
                >
                    {placeholder}
                </motion.span>
            )}
            <input
                className={inputClasses}
                placeholder={!showLabel ? placeholder : undefined}
                onBlur={onInputBlur}
                onFocus={onInputFocus}
                ref={inputElement}
                {...rest}
            />
        </div>
    );
};

export default Input;

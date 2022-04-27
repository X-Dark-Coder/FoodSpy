import classNames from "classnames";
import { TInputProps } from "./types";

const Input: React.FC<TInputProps> = ({
    className,
    variant,
    errorEffect,
    fullWidth,
    disableFocusEffect,
    filledEffect,
    value,
    ...rest
}) => {
    const inputClasses = {
        base: `h-[64px] rounded-lg pl-4 pr-2 placeholder:text-mono-ink-lightest
        text-large font-medium focus:outline-none`,
        focus: "focus:border focus:border-accent-cyan",
        simple: "bg-mono-sky-lighter",
        white: "bg-mono-sky-lightest border border-mono-sky",
        error: "border border-accent-redd",
        filled: "border border-mono-sky bg-mono-sky-lightest",
    };

    const classes = classNames(
        inputClasses.base,
        inputClasses[variant],
        fullWidth ? "w-full" : "w-[335px]",
        {
            [inputClasses.error]: errorEffect,
            [inputClasses.filled]: filledEffect && value,
            [inputClasses.focus]: !disableFocusEffect,
        },
        className
    );

    return <input className={classes} value={value} {...rest} />;
};

export default Input;

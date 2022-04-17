import classNames from "classnames";
import { InputProps } from "./types";

const Input: React.FC<InputProps> = ({ className, variant, errorEffect,fullWidth, disableFocusEffect, ...rest }) => {
    const inputClasses = {
        base: `h-[64px] rounded-lg pl-4 placeholder:text-mono-ink-lightest
        text-large font-medium focus:outline-none`,
        focus: "focus:border focus:border-accent-cyan",
        simple: "bg-mono-sky-lighter",
        white: "bg-mono-sky-lightest border border-mono-sky",
        error: "border border-accent-redd",
    };

    const classes = classNames(
        inputClasses.base,
        inputClasses[variant],
        errorEffect ? inputClasses.error : "",
        !disableFocusEffect ? inputClasses.focus : "",
        fullWidth ? "w-full" : "w-[335px]",
        className
    );

    const xcd = <div className="border-accent-cyan "></div>;
    return <input className={classes} {...rest} />;
};

export default Input;

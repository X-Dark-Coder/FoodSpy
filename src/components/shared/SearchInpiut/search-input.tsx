import classNames from "classnames";
import { SearchInputProps } from "./types";
import { ReactComponent as SearchIcon } from "assets/icons/Search.svg";
import Button from "../Button/button";

const SearchInput: React.FC<SearchInputProps> = ({ className, variant, ...rest }) => {
    const inputContainerClasses = {
        base: `h-[48px] w-full rounded-md placeholder:text-mono-ink-lightest
        text-medium font-medium text-mono-ink-light flex
        justify-between items-center p-1`,
        default: "bg-mono-sky-lighter",
        white: "bg-white",
        focus: `focus:border focus:border-mono-sky focus:bg-white`,
    };

    const classes = classNames(
        inputContainerClasses.base,
        {
            [inputContainerClasses.focus]: variant === "default",
            [inputContainerClasses.default]: variant === "default",
            [inputContainerClasses.white]: variant === "white",
        },
        className
    );
    return (
        <div className={classes} tabIndex={1}>
            <div className="flex justify-start items-center">
                <SearchIcon className="my-[14px] ml-[14px] mr-[12px]" />
                <input className="bg-transparent outline-none" {...rest} />
            </div>
            <Button variant="expand-small" className="mr-[6px]"/>
        </div>
    );
};

export default SearchInput;

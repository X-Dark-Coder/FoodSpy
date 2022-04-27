import React, { useEffect } from "react";
import classNames from "classnames";
import { TSearchInputProps } from "./types";
import { ReactComponent as SearchIcon } from "assets/icons/Search.svg";
import { ReactComponent as CloseIcon } from "assets/icons/Close.svg";
import { Button } from "components/shared";
import { useState } from "react";

const SearchInput: React.FC<TSearchInputProps> = ({
    className,
    inputClassName,
    locationSearchButton,
    variant,
    initialInputValue,
    onSearchClicked,
    onClearButtonClicked,
    showClearButton,
    hideSearchButton,
    ...rest
}) => {
    const [searchValue, setSearchValue] = useState<string>("");

    useEffect(() => {
        setSearchValue(initialInputValue ? initialInputValue : "");
    }, [initialInputValue]);

    const inputContainerClasses = {
        base: `h-[48px] w-full rounded-md placeholder:text-mono-ink-lightest
        text-medium font-medium text-mono-ink-light flex
        justify-between items-center p-1`,
        default: "bg-mono-sky-lighter",
        white: "bg-white",
        focus: `focus-within:border focus-within:border-mono-sky focus-within:bg-white`,
    };

    const containerClasses = classNames(className, inputContainerClasses.base, {
        [inputContainerClasses.focus]: variant === "default",
        [inputContainerClasses.default]: variant === "default",
        [inputContainerClasses.white]: variant === "white",
    });

    const inputClasses = classNames(
        "bg-transparent outline-none min-w-[150px] h-full",
        {
            "pl-3": hideSearchButton,
        },
        inputClassName
    );

    const onInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => setSearchValue(e.target.value);

    const onClearBtnClicked = () => {
        if (onClearButtonClicked) onClearButtonClicked();
        setSearchValue("");
    };

    const onEnterPressed = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === "Enter") onSearchClicked(searchValue);
    };

    return (
        <div className={containerClasses} tabIndex={1}>
            <div className="flex justify-start items-center h-full">
                {!hideSearchButton && (
                    <button
                        onClick={() => onSearchClicked(searchValue)}
                        className="my-[14px] ml-[14px] mr-[12px] flex justify-center items-center"
                    >
                        <SearchIcon />
                    </button>
                )}
                <input
                    value={searchValue}
                    onChange={onInputChanged}
                    className={inputClasses}
                    onKeyPress={onEnterPressed}
                    {...rest}
                />
            </div>

            {showClearButton && !locationSearchButton && searchValue.length !== 0 && (
                <button onClick={onClearBtnClicked} className="pr-3">
                    <CloseIcon />
                </button>
            )}

            {locationSearchButton && <Button variant="expand-small" className="mr-[6px]" />}
        </div>
    );
};

export default React.memo(SearchInput);

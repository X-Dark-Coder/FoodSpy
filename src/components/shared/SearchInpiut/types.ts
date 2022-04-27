import React from "react";

export type TSearchInputProps = {
    variant: "white" | "default";
    locationSearchButton?: any;
    onSearchClicked: (searchText : string) => void;
    onClearButtonClicked?: () => void;
    initialInputValue?: string;
    showClearButton?: boolean;
    hideSearchButton?: boolean;
    inputClassName?: string;
} & React.ComponentProps<"input">;

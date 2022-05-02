import React from "react";

export type TInputProps = {
    variant: "simple" | "white";
    disableFocusEffect?: boolean;
    errorEffect?: boolean;
    fullWidth?: boolean;
    filledEffect?: boolean;
    showLabel?: boolean;
    containerClassName?: string;
} & React.ComponentProps<"input">;

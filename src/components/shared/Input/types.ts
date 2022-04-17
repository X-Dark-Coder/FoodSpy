import React from "react";

export type InputProps = {
    variant: "simple" | "white";
    disableFocusEffect?: boolean;
    errorEffect?: boolean,
    fullWidth?: boolean
} & React.ComponentProps<"input">;

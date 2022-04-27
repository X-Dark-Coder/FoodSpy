import { Input } from "components/shared";
import React, { useState } from "react";
import { TSelectRangeCaloriesProps } from "./types";

const SelectRangeCalories: React.FC<TSelectRangeCaloriesProps> = ({ calorieRange, setCalorieRange }) => {
    const onMinCalorieChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCalorieRange([Number(e.target.value), calorieRange[1]]);
    };

    const onMaxCalorieChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCalorieRange([calorieRange[0], Number(e.target.value)]);
    };

    console.log("Select Price Re Rendered")

    return (
        <div className="w-full sm:w-[500px] mt-[24px]">
            <h3 className="mb-4 text-large font-semibold text-mono-ink">Range Price</h3>
            <div className="flex justify-center items-center gap-5">
                <Input
                    filledEffect
                    value={calorieRange[0]}
                    onChange={onMinCalorieChanged}
                    variant="simple"
                    type="number"
                    placeholder="Min Calorie"
                    className="w-1/2"
                    min={1}
                />
                <Input
                    filledEffect
                    value={calorieRange[1]}
                    onChange={onMaxCalorieChanged}
                    variant="simple"
                    type="number"
                    placeholder="Max Calorie"
                    className="w-1/2"
                    min={1}
                />
            </div>
        </div>
    );
};

export default React.memo(SelectRangeCalories);

import { Input } from "components/shared";
import React from "react";
import { TSelectRangePriceProps } from "./types";

const SelectRangePrice: React.FC<TSelectRangePriceProps> = ({ priceRange, setPriceRange }) => {
    const onMinPriceChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPriceRange([Number(e.target.value), priceRange[1]]);
    };

    const onMaxPriceChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPriceRange([priceRange[0], Number(e.target.value)]);
    };

    console.log("Select Calories Re Rendered")

    return (
        <div className="w-full sm:w-[500px] mt-[24px]">
            <h3 className="mb-4 text-large font-semibold text-mono-ink">Range Price</h3>
            <div className="flex justify-center items-center gap-5">
                <Input
                    filledEffect
                    value={priceRange[0]}
                    onChange={onMinPriceChanged}
                    variant="simple"
                    type="number"
                    placeholder="Min Price"
                    className="w-1/2"
                    min={1}
                />
                <Input
                    filledEffect
                    value={priceRange[1]}
                    onChange={onMaxPriceChanged}
                    variant="simple"
                    type="number"
                    placeholder="Max Price"
                    className="w-1/2"
                    min={1}
                />
            </div>
        </div>
    );
};

export default React.memo(SelectRangePrice);

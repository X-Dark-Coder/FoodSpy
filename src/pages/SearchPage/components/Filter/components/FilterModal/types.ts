import React from "react";
import { TSearchFilter } from "../../types";

export type TFilterModalProps = {
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;
    searchFilter: TSearchFilter;
    setSearchFilter: (filter: TSearchFilter) => void;
};

export type TFilterRange = [number | undefined, number | undefined];

export type TSelectFoodTypeProps = {
    selectedTypes: number[];
    setSelectedTypes: (types: number[]) => void;
};

export type TSelectRangePriceProps = {
    priceRange: TFilterRange;
    setPriceRange: (priceRange: TFilterRange) => void;
};

export type TSelectRangeCaloriesProps = {
    calorieRange: TFilterRange;
    setCalorieRange: (calorieRange: TFilterRange) => void;
};

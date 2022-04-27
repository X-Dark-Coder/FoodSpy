import { TFilterRange } from "./components/FilterModal/types";

export type TSearchFilter = {
    selectedTypes: number[];
    priceRange: TFilterRange;
    calorieRange: TFilterRange;
};

export type TFilterProps = {
    disable?: boolean;
    searchFilter: TSearchFilter;
    setSearchFilter: (filter: TSearchFilter) => void;
};

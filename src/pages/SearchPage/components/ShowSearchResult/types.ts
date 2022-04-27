import { TFood } from "components/Food/types";
import { TRestaurant } from "components/Restaurant/types";
import { TTabs } from "../ResultTabs/types";

export type TSearchResult = { foods: TFood[]; restaurants: TRestaurant[] } | null;

export type TShowSearchResultProps = {
    result: TSearchResult;
    type: TTabs;
};

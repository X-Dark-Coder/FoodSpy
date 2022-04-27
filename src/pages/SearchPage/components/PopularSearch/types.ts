import { THistoryItem } from "../SearchHistory/types";
import { TSearchResult } from "../ShowSearchResult/types";

export type TPopularSearchItem = {
    id : number;
    text : string;
}

export type TPopularSearchItemProps = {
    onClick : () => void;
} & Omit<TPopularSearchItem,"id">

export type TPopularSearchProps = {
    setSearchResult: (search : TSearchResult) => void;
    setHistory: (history: THistoryItem[]) => void;
}
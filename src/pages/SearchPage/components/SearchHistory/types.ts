import { TSearchResult } from "../ShowSearchResult/types";

export type THistoryItem = {
    id: number;
    searchText: string;
};

export type THistoryItemProps = THistoryItem & {
    onDelete: (id: number) => void;
    onClick: (e: React.MouseEvent<HTMLDivElement>) => void;
};

export type TSearchHistoryProps = {
    history: THistoryItem[];
    setHistory: (history: THistoryItem[]) => void;
    setSearchResult: (search : TSearchResult) => void;
};

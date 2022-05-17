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
    setSearchResult: (search : TSearchResult) => void;
};

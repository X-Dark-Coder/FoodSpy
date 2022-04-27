import { THistoryItem } from "./types";

/**
 * Get history from localStorage
 */

export const getHistory = () => {
    const history = localStorage.getItem("SEARCH_HISTORY");
    return history ? (JSON.parse(history) as THistoryItem[]) : [];
};

/**
 * Add history item to localStorage
 *
 * @param searchText
 */

export const addHistory = (searchText: string) => {
    const history = localStorage.getItem("SEARCH_HISTORY");

    let newHistoryList: THistoryItem[] = [];

    if (history) {
        let parsedHistory = JSON.parse(history) as THistoryItem[];
        if (!history.includes(searchText)) {
            if (parsedHistory.length !== 0) {
                parsedHistory.unshift({
                    id: parsedHistory[0].id + 1,
                    searchText,
                });
            } else {
                parsedHistory.push({
                    id: 0,
                    searchText,
                });
            }
        }
        newHistoryList = parsedHistory;
    } else {
        newHistoryList.unshift({
            id: 0,
            searchText,
        });
    }

    localStorage.setItem("SEARCH_HISTORY", JSON.stringify(newHistoryList.slice(-7)));

    return newHistoryList;
};

/**
 * Remove history item from localStorage
 *
 * @param id
 */

export const removeHistory = (id: number) => {
    const history = localStorage.getItem("SEARCH_HISTORY") as string;

    let newHistoryList: THistoryItem[] = [];

    let parsedHistory = JSON.parse(history) as THistoryItem[];

    newHistoryList = parsedHistory.filter((historyItem) => historyItem.id !== id);

    localStorage.setItem("SEARCH_HISTORY", JSON.stringify(newHistoryList.slice(-10)));

    return newHistoryList;
};

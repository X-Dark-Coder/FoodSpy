import React from "react";
import { useNavigate } from "react-router-dom";
import HistoryItem from "./history-item";
import { removeHistory } from "./historyStorage";
import { TSearchHistoryProps } from "./types";
import { foods, restaurants } from "pages/SearchPage/search-page.constants";

const SearchHistory: React.FC<TSearchHistoryProps> = ({ history, setHistory, setSearchResult }) => {
    const navigate = useNavigate();

    const deleteHistoryItem = (id: number) => {
        const newHistoryList = removeHistory(id);
        setHistory(newHistoryList);
    };

    const clearHistory = () => {
        localStorage.setItem("SEARCH_HISTORY", "[]");
        setHistory([]);
    };

    const fakeSearchApi = () => {
        setTimeout(() => {
            setSearchResult({
                foods,
                restaurants,
            });
        }, 2000);
    };

    const onHistoryItemClicked = (searchText: string) => {
        setSearchResult(null);
        navigate("/search/" + searchText);
        fakeSearchApi();
    };

    return (
        <section className="w-full">
            <div className="flex justify-between items-center mt-6 w-full">
                <h3 className="text-mono-ink text-title-3 font-semibold">Search History</h3>
                <button className="text-primary text-medium-16 font-semibold" onClick={clearHistory}>
                    Clear
                </button>
            </div>
            <div className="w-full flex justify-start items-start flex-col mt-5 gap-4">
                {history.map(({ id, searchText }) => (
                    <HistoryItem
                        id={id}
                        searchText={searchText}
                        key={id}
                        onDelete={deleteHistoryItem}
                        onClick={() => onHistoryItemClicked(searchText)}
                    />
                ))}
            </div>
        </section>
    );
};

export default React.memo(SearchHistory, (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

import React from "react";
import { useNavigate } from "react-router-dom";
import HistoryItem from "./history-item";
import { TSearchHistoryProps } from "./types";
import { fakeRestaurants as restaurants } from "api/restaurants";
import { fakeFoods as foods } from "api/foods";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { clearSearchHistory, removeSearchHistory } from "store/actions/user.actions";
import { useTypedSelector } from "hooks/useTypedSelector";

const SearchHistory: React.FC<TSearchHistoryProps> = ({ setSearchResult }) => {
    const dispatch = useDispatch();
    const history = useTypedSelector(state => state.user.searchHistory);
    const navigate = useNavigate();

    const deleteHistoryItem = (id: number) => {
        dispatch(removeSearchHistory(id));
    };

    const clearHistory = () => {
        dispatch(clearSearchHistory());
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
        <motion.section layout className="w-full">
            <motion.div layout className="flex justify-between items-center mt-6 w-full">
                <h3 className="text-mono-ink text-title-3 font-semibold">Search History</h3>
                <button className="text-primary text-medium-16 font-semibold" onClick={clearHistory}>
                    Clear
                </button>
            </motion.div>
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
        </motion.section>
    );
};

export default React.memo(SearchHistory, (prevProps, nextProps) => {
    return JSON.stringify(prevProps) === JSON.stringify(nextProps);
});

import {
    TAction,
    ActionType,
    TActionSetWalletCredit,
    TActionAddSearchHistory,
    TActionRemoveSearchHistory,
    TActionAddFoodToWishlist,
    TActionRemoveFoodFromWishlist,
} from "store/actions/user.types";
import { TUserState } from "store/types";
import { THistoryItem } from "pages/SearchPage/components/SearchHistory/types";
import { getSearchHistory, getWishlist } from "./utils";

const init: TUserState = {
    walletCredit: 0,
    searchHistory: getSearchHistory(),
    wishlist: getWishlist(),
    name: localStorage.getItem("USER_NAME") ? localStorage.getItem("USER_NAME")! : "Please Login",
};

export const userReducer = (state: TUserState = init, action: TAction): TUserState => {
    switch (action.type) {
        case ActionType.SET_WALLET_CREDIT:
            return setWalletCreditReducer(state, action);
        case ActionType.ADD_SEARCH_HISTORY:
            return addSearchHistoryReducer(state, action);
        case ActionType.REMOVE_SEARCH_HISTORY:
            return removeSearchHistoryReducer(state, action);
        case ActionType.CLEAR_SEARCH_HISTORY:
            return clearSearchHistoryReducer(state);
        case ActionType.ADD_FOOD_TO_WISHLIST:
            return addFoodToWishlistReducer(state, action);
        case ActionType.REMOVE_FOOD_FROM_WISHLIST:
            return removeFoodFromWishlistReducer(state, action);
        default:
            return state;
    }
};

/**
 * Increase or decrease wallet credit
 */

const setWalletCreditReducer = (state: TUserState, action: TActionSetWalletCredit) => {
    return { ...state, walletCredit: state.walletCredit + action.payload };
};

/**
 * Add history item to localStorage
 */

const addSearchHistoryReducer = (state: TUserState, action: TActionAddSearchHistory) => {
    const history = localStorage.getItem("SEARCH_HISTORY");

    let newHistoryList: THistoryItem[] = [];

    if (history) {
        let parsedHistory = JSON.parse(history) as THistoryItem[];
        if (!history.includes(action.payload)) {
            if (parsedHistory.length !== 0) {
                parsedHistory.unshift({
                    id: parsedHistory[0].id + 1,
                    searchText: action.payload,
                });
            } else {
                parsedHistory.push({
                    id: 0,
                    searchText: action.payload,
                });
            }
        }
        newHistoryList = parsedHistory;
    } else {
        newHistoryList.unshift({
            id: 0,
            searchText: action.payload,
        });
    }

    localStorage.setItem("SEARCH_HISTORY", JSON.stringify(newHistoryList.slice(-7)));

    return { ...state, searchHistory: newHistoryList };
};

/**
 * Remove history item from localStorage
 */

const removeSearchHistoryReducer = (state: TUserState, action: TActionRemoveSearchHistory) => {
    const history = localStorage.getItem("SEARCH_HISTORY") as string;

    let newHistoryList: THistoryItem[] = [];

    let parsedHistory = JSON.parse(history) as THistoryItem[];

    newHistoryList = parsedHistory.filter((historyItem) => historyItem.id !== action.payload);

    localStorage.setItem("SEARCH_HISTORY", JSON.stringify(newHistoryList.slice(-10)));

    return { ...state, searchHistory: newHistoryList };
};

/**
 * Clear all searches history from localStorage
 */

const clearSearchHistoryReducer = (state: TUserState) => {
    localStorage.setItem("SEARCH_HISTORY", "[]");
    return { ...state, searchHistory: [] };
};

/**
 * Add food to wishlist in localStorage
 */

const addFoodToWishlistReducer = (state: TUserState, action: TActionAddFoodToWishlist) => {
    if (!state.wishlist.find((itemId) => itemId === action.payload)) {
        const newWishlist = [action.payload, ...state.wishlist];
        localStorage.setItem("WISHLIST", JSON.stringify(newWishlist));
        return { ...state, wishlist: newWishlist };
    }
    
    return state;
};

/**
 * Remove food from wishlist in localStorage
 */

const removeFoodFromWishlistReducer = (state: TUserState, action: TActionRemoveFoodFromWishlist) => {
    const newWishlist = state.wishlist.filter((itemId) => itemId !== action.payload);
    localStorage.setItem("WISHLIST", JSON.stringify(newWishlist));
    return { ...state, wishlist: newWishlist };
};

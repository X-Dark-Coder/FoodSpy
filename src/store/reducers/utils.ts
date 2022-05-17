import { THistoryItem } from "pages/SearchPage/components/SearchHistory/types";

export const calculateDiscount = (price: number, discount: number = 0) => {
    return Math.round((price / 100) * discount);
};

export const getSearchHistory = () => {
    const history = localStorage.getItem("SEARCH_HISTORY");
    return history ? (JSON.parse(history) as THistoryItem[]) : [];
};

export const getWishlist = () => {
    const history = localStorage.getItem("WISHLIST");
    return history ? (JSON.parse(history) as number[]) : [];
};

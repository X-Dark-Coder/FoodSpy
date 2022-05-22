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

export const getOrderHistory = () => {
    const history = localStorage.getItem("ORDER_HISTORY");
    return history ? (JSON.parse(history) as any[]) : [];
};

export const getUserInfo = () => {
    const userInfo = localStorage.getItem("USER_INFO");
    return userInfo
        ? (JSON.parse(userInfo) as { name: string; email: string; phone: string; walletCredit: number })
        : null;
};

export const getWalletCredit = () => {
    const localStorageUserInfo = localStorage.getItem("USER_INFO")
        ? JSON.parse(localStorage.getItem("USER_INFO")!)
        : null;
    const userInfo = localStorageUserInfo as {
        name: string;
        email: string;
        phone: string;
        walletCredit: number;
    } | null;

    return userInfo ? userInfo.walletCredit : 0;
};

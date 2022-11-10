import { TShoppingCartFoodItem } from "store/types";

export enum ActionType {
    SET_WALLET_CREDIT = "SET_WALLET_CREDIT",
    ADD_SEARCH_HISTORY = "ADD_SEARCH_HISTORY",
    REMOVE_SEARCH_HISTORY = "REMOVE_SEARCH_HISTORY",
    CLEAR_SEARCH_HISTORY = "CLEAR_SEARCH_HISTORY",
    ADD_FOOD_TO_WISHLIST = "ADD_FOOD_TO_WISHLIST",
    REMOVE_FOOD_FROM_WISHLIST = "REMOVE_FOOD_FROM_WISHLIST",
    SET_USER_INFORMATION = "SET_USER_INFORMATION",
    ADD_ORDER_HISTORY = "ADD_ORDER_HISTORY",
}

export type TActionSetWalletCredit = {
    type: ActionType.SET_WALLET_CREDIT;
    payload: number;
};

export type TActionAddSearchHistory = {
    type: ActionType.ADD_SEARCH_HISTORY;
    payload: string;
};

export type TActionRemoveSearchHistory = {
    type: ActionType.REMOVE_SEARCH_HISTORY;
    payload: number;
};

export type TActionClearSearchHistory = {
    type: ActionType.CLEAR_SEARCH_HISTORY;
};

export type TActionAddFoodToWishlist = {
    type: ActionType.ADD_FOOD_TO_WISHLIST;
    payload: {
        food: number,
        restaurant: number
    };
};

export type TActionRemoveFoodFromWishlist = {
    type: ActionType.REMOVE_FOOD_FROM_WISHLIST;
    payload: number;
};

export type TActionSetUserInformation = {
    type: ActionType.SET_USER_INFORMATION;
    payload: {
        name: string;
        email: string;
        phone: string;
    };
};

export type TActionAddOrderHistory = {
    type: ActionType.ADD_ORDER_HISTORY;
    payload: {
        payment: number;
        products: TShoppingCartFoodItem[];
        date: Date;
        restaurant: number;
    };
};

export type TAction =
    | TActionSetWalletCredit
    | TActionAddSearchHistory
    | TActionRemoveSearchHistory
    | TActionClearSearchHistory
    | TActionAddFoodToWishlist
    | TActionRemoveFoodFromWishlist
    | TActionSetUserInformation
    | TActionAddOrderHistory;

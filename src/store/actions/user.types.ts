export enum ActionType {
    SET_WALLET_CREDIT = "SET_WALLET_CREDIT",
    ADD_SEARCH_HISTORY = "ADD_SEARCH_HISTORY",
    REMOVE_SEARCH_HISTORY = "REMOVE_SEARCH_HISTORY",
    CLEAR_SEARCH_HISTORY = "CLEAR_SEARCH_HISTORY",
    ADD_FOOD_TO_WISHLIST = "ADD_FOOD_TO_WISHLIST",
    REMOVE_FOOD_FROM_WISHLIST = "REMOVE_FOOD_FROM_WISHLIST",
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
    payload: number;
};

export type TActionRemoveFoodFromWishlist = {
    type: ActionType.REMOVE_FOOD_FROM_WISHLIST;
    payload: number;
};

export type TAction =
    | TActionSetWalletCredit
    | TActionAddSearchHistory
    | TActionRemoveSearchHistory
    | TActionClearSearchHistory
    | TActionAddFoodToWishlist
    | TActionRemoveFoodFromWishlist;

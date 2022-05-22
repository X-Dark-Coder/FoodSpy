import { TShoppingCartFoodItem } from "store/types";
import { ActionType } from "./user.types";

export const setWalletCredit = (payload: number) => ({ type: ActionType.SET_WALLET_CREDIT, payload });

export const addSearchHistory = (payload: string) => ({ type: ActionType.ADD_SEARCH_HISTORY, payload });

export const removeSearchHistory = (payload: number) => ({ type: ActionType.REMOVE_SEARCH_HISTORY, payload });

export const clearSearchHistory = () => ({ type: ActionType.CLEAR_SEARCH_HISTORY });

export const addFoodToWishlist = (payload: number) => ({ type: ActionType.ADD_FOOD_TO_WISHLIST, payload });

export const removeFoodFromWishlist = (payload: number) => ({ type: ActionType.REMOVE_FOOD_FROM_WISHLIST, payload });

export const setUserInformation = (payload: { name: string; email: string; phone: string }) => ({
    type: ActionType.SET_USER_INFORMATION,
    payload,
});

export const addOrderHistory = (payload: {
    payment: number;
    products: TShoppingCartFoodItem[];
    date: Date;
    restaurant: number;
}) => ({
    type: ActionType.ADD_ORDER_HISTORY,
    payload,
});

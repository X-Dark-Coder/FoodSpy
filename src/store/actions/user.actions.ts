import { ActionType } from "./user.types";

export const setWalletCredit = (credit: number) => ({ type: ActionType.SET_WALLET_CREDIT, payload: credit });

export const addSearchHistory = (searchText: string) => ({ type: ActionType.ADD_SEARCH_HISTORY, payload: searchText });

export const removeSearchHistory = (id: number) => ({ type: ActionType.REMOVE_SEARCH_HISTORY, payload: id });

export const clearSearchHistory = () => ({ type: ActionType.CLEAR_SEARCH_HISTORY });

export const addFoodToWishlist = (id: number) => ({ type: ActionType.ADD_FOOD_TO_WISHLIST, payload: id });

export const removeFoodFromWishlist = (id: number) => ({ type: ActionType.REMOVE_FOOD_FROM_WISHLIST, payload: id });

export const setUserInformation = ({ name, email, phone }: { name: string; email: string; phone: string }) => ({
    type: ActionType.SET_USER_INFORMATION,
    payload: { name, email, phone },
});

import { ActionType } from "./shopping-cart.types";

export const setShoppingCartRestaurant = (id: number) => ({
    type: ActionType.SET_SHOPPING_CART_RESTAURANT,
    payload: id,
});

export const addProduct = ({ id, count, instructions }: { id: number; count: number; instructions: string }) => ({
    type: ActionType.ADD_PRODUCT,
    payload: { id, count, instructions },
});

export const removeProduct = (id: number) => ({ type: ActionType.REMOVE_PRODUCT, payload: id });

export const clearShoppingCart = () => ({ type: ActionType.CLEAR_SHOPPING_CART });

export const changeProductCount = ({ id, type }: { id: number; type: "increase" | "decrease" }) => ({
    type: ActionType.CHANGE_PRODUCT_COUNT,
    payload: { id, type },
});

export const changeProductInstructions = ({ id, instructions }: { id: number; instructions: string }) => ({
    type: ActionType.CHANGE_PRODUCT_INSTRUCTIONS,
    payload: { id, instructions },
});

export const setDiscount = (percent: number) => ({ type: ActionType.SET_DISCOUNT, payload: percent });

export const removeDiscount = () => ({ type: ActionType.REMOVE_DISCOUNT});

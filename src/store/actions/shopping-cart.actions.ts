import { ActionType } from "./shopping-cart.types";

export const setShoppingCartRestaurant = (id: number) => ({
    type: ActionType.SET_SHOPPING_CART_RESTAURANT,
    payload: id,
});

export const addProduct = ({ id, count }: { id: number; count: number }) => ({
    type: ActionType.ADD_PRODUCT,
    payload: { id, count },
});

export const removeProduct = (id: number) => ({ type: ActionType.REMOVE_PRODUCT, payload: id });

export const clearShoppingCart = () => ({ type: ActionType.CLEAR_SHOPPING_CART });

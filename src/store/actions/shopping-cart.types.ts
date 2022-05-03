export enum ActionType {
    ADD_PRODUCT = "ADD_PRODUCT",
    REMOVE_PRODUCT = "REMOVE_PRODUCT",
    CLEAR_SHOPPING_CART = "CLEAR_SHOPPING_CART",
    SET_SHOPPING_CART_RESTAURANT = "SET_SHOPPING_CART_RESTAURANT",
}

export type TActionSetShoppingCartRestaurant = {
    type: ActionType.SET_SHOPPING_CART_RESTAURANT;
    payload: number;
};

export type TActionAddProduct = {
    type: ActionType.ADD_PRODUCT;
    payload: {
        id: number;
        count: number;
    };
};

export type TActionRemoveProduct = {
    type: ActionType.REMOVE_PRODUCT;
    payload: number;
};

export type TActionClearShoppingCart = {
    type: ActionType.CLEAR_SHOPPING_CART;
};

export type TAction =
    | TActionSetShoppingCartRestaurant
    | TActionAddProduct
    | TActionRemoveProduct
    | TActionClearShoppingCart;

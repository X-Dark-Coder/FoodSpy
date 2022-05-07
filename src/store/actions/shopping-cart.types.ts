export enum ActionType {
    ADD_PRODUCT = "ADD_PRODUCT",
    REMOVE_PRODUCT = "REMOVE_PRODUCT",
    CLEAR_SHOPPING_CART = "CLEAR_SHOPPING_CART",
    SET_SHOPPING_CART_RESTAURANT = "SET_SHOPPING_CART_RESTAURANT",
    CHANGE_PRODUCT_COUNT = "CHANGE_PRODUCT_COUNT",
    CHANGE_PRODUCT_INSTRUCTIONS = "CHANGE_PRODUCT_INSTRUCTIONS",
    SET_DISCOUNT = "SET_DISCOUNT",
    REMOVE_DISCOUNT = "REMOVE_DISCOUNT",
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
        instructions: string;
    };
};

export type TActionRemoveProduct = {
    type: ActionType.REMOVE_PRODUCT;
    payload: number;
};

export type TActionClearShoppingCart = {
    type: ActionType.CLEAR_SHOPPING_CART;
};

export type TActionChangeProductCount = {
    type: ActionType.CHANGE_PRODUCT_COUNT;
    payload: {
        id: number;
        type: "decrease" | "increase";
    };
};

export type TActionChangeProductInstructions = {
    type: ActionType.CHANGE_PRODUCT_INSTRUCTIONS;
    payload: {
        id: number;
        instructions: string;
    };
};

export type TActionSetDiscount = {
    type: ActionType.SET_DISCOUNT;
    payload: number;
};

export type TActionRemoveDiscount = {
    type: ActionType.REMOVE_DISCOUNT;
};

export type TAction =
    | TActionSetShoppingCartRestaurant
    | TActionAddProduct
    | TActionRemoveProduct
    | TActionClearShoppingCart
    | TActionChangeProductCount
    | TActionChangeProductInstructions
    | TActionSetDiscount
    | TActionRemoveDiscount;

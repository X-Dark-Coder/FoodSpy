import { TShoppingCartState } from "store/types";
import {
    TAction,
    ActionType,
    TActionAddProduct,
    TActionSetShoppingCartRestaurant,
} from "store/actions/shopping-cart.types";

const init: TShoppingCartState = {
    products: [],
    restaurant: null,
    totalPrice: 0,
    productsCount: 0,
};

export const shoppingCartReducer = (state: TShoppingCartState = init, action: TAction): TShoppingCartState => {
    switch (action.type) {
        case ActionType.SET_SHOPPING_CART_RESTAURANT:
            return setShoppingCartRestaurantReducer(state, action);
        case ActionType.ADD_PRODUCT:
            return addProductReducer(state, action);
        case ActionType.REMOVE_PRODUCT:
            return { ...state, products: [] };
        case ActionType.CLEAR_SHOPPING_CART:
            return clearShoppingCartReducer(state);
        default:
            return state;
    }
};

/**
 * Find target product in shopping cart state and add to its count
 */

const addProductReducer = (state: TShoppingCartState, action: TActionAddProduct) => {
    const productIndex = state.products.findIndex((product) => product.id === action.payload.id);

    const lastState = {
        ...state,
        productsCount: state.productsCount + action.payload.count,
        totalPrice: state.totalPrice + action.payload.count * 13,
    };

    if (productIndex !== -1) {
        const copyOfProducts = [...state.products];
        copyOfProducts[productIndex].count += action.payload.count;
        return {
            ...lastState,
            products: copyOfProducts,
        };
    }

    return {
        ...lastState,
        products: [...state.products, { id: action.payload.id, count: action.payload.count }],
    };
};

/**
 * Set shopping cart restaurant id
 */

const setShoppingCartRestaurantReducer = (state: TShoppingCartState, action: TActionSetShoppingCartRestaurant) => {
    return {
        ...state,
        restaurant: action.payload,
    };
};

/**
 * Clear all added products and set current restaurant to null
 */

const clearShoppingCartReducer = (state: TShoppingCartState) => {
    return {
        restaurant: null,
        products: [],
        totalPrice: 0,
        productsCount: 0,
    };
};

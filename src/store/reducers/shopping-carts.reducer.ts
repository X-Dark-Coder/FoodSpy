import { TShoppingCartState } from "store/types";
import {
    TAction,
    ActionType,
    TActionAddProduct,
    TActionSetShoppingCartRestaurant,
    TActionChangeProductCount,
    TActionChangeProductInstructions,
} from "store/actions/shopping-cart.types";
import { foods } from "api/fakeApi";
import { changeProductInstructions } from "store/actions/shopping-cart.actions";

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
        case ActionType.CHANGE_PRODUCT_COUNT:
            return changeProductCountReducer(state, action);
        case ActionType.CHANGE_PRODUCT_INSTRUCTIONS:
            return changeProductInstructionsReducer(state, action);
        default:
            return state;
    }
};

/**
 * Find target product in shopping cart state and add to its count
 */

const addProductReducer = (state: TShoppingCartState, action: TActionAddProduct) => {
    const originalProduct = foods.find((product) => product.id === action.payload.id)!;
    const productIndex = state.products.findIndex((product) => product.id === action.payload.id);

    const lastState = {
        ...state,
        productsCount: state.productsCount + action.payload.count,
        totalPrice: state.totalPrice + action.payload.count * originalProduct.price,
    };

    if (productIndex !== -1) {
        const copyOfProducts = [...state.products];
        copyOfProducts[productIndex].count += action.payload.count;
        return {
            ...lastState,
            products: copyOfProducts,
            instructions: action.payload.instructions,
        };
    }

    return {
        ...lastState,
        products: [
            ...state.products,
            { id: action.payload.id, count: action.payload.count, instructions: action.payload.instructions },
        ],
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

/**
 * Increase or decrease product count in shopping cart
 */

const changeProductCountReducer = (state: TShoppingCartState, action: TActionChangeProductCount) => {
    const originalProduct = foods.find((product) => product.id === action.payload.id)!;
    const productIndex = state.products.findIndex((product) => product.id === action.payload.id);
    const copyOfProducts = [...state.products];

    const lastState = {
        ...state,
        products: copyOfProducts,
    };

    if (productIndex !== -1) {
        if (action.payload.type === "increase") {
            copyOfProducts[productIndex].count += 1;
            return {
                ...lastState,
                totalPrice: state.totalPrice + originalProduct.price,
                productsCount: state.productsCount + 1,
            };
        } else {
            copyOfProducts[productIndex].count -= 1;
            return {
                ...lastState,
                totalPrice: state.totalPrice - originalProduct.price,
                productsCount: state.productsCount - 1,
            };
        }
    }

    return state;
};

/**
 * Change product instructions in shopping cart
 */

const changeProductInstructionsReducer = (state: TShoppingCartState, action: TActionChangeProductInstructions) => {
    const productIndex = state.products.findIndex((product) => product.id === action.payload.id);
    const copyOfProducts = [...state.products];

    if (productIndex !== -1) {
        copyOfProducts[productIndex].instructions = action.payload.instructions;
        return {
            ...state,
            products: copyOfProducts,
        };
    }

    return state;
};

import { combineReducers, createStore } from "redux";
import { shoppingCartReducer } from "./reducers/shopping-carts.reducer";
import { TRootState } from "./types";

const store = createStore<TRootState, any, any, any>(combineReducers({ cart: shoppingCartReducer }));

export default store;

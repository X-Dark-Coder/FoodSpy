import { combineReducers, createStore } from "redux";
import { appReducer } from "./reducers/app.reducer";
import { shoppingCartReducer } from "./reducers/shopping-carts.reducer";
import { TRootState } from "./types";

const store = createStore<TRootState, any, any, any>(combineReducers({ cart: shoppingCartReducer, app: appReducer }));

export default store;

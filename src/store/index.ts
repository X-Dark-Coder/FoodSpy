import { combineReducers, createStore } from "redux";
import { appReducer } from "./reducers/app.reducer";
import { shoppingCartReducer } from "./reducers/shopping-carts.reducer";
import { userReducer } from "./reducers/user.reducer";
import { TRootState } from "./types";

const store = createStore<TRootState, any, any, any>(
    combineReducers({ cart: shoppingCartReducer, app: appReducer, user: userReducer })
);

export default store;

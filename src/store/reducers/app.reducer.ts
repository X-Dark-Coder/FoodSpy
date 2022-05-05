import { ActionType, TAction, TActionToggleBottomNavbar } from "store/actions/app.types";
import { TAppState } from "store/types";

const init: TAppState = {
    showBottomNavbar: true,
};

export const appReducer = (state: TAppState = init, action: TAction): TAppState => {
    switch (action.type) {
        case ActionType.TOGGLE_BOTTOM_NAVBAR:
            return toggleBottomNavbarReducer(state, action);
        default:
            return state;
    }
};

const toggleBottomNavbarReducer = (state: TAppState, action: TActionToggleBottomNavbar) => {
    return { ...state, showBottomNavbar: action.payload };
};

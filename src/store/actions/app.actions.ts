import { ActionType } from "./app.types";

export const toggleBottomNavbar = (toggle : boolean) => ({
    type: ActionType.TOGGLE_BOTTOM_NAVBAR,
    payload: toggle,
});
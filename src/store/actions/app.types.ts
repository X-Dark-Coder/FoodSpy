export enum ActionType {
    TOGGLE_BOTTOM_NAVBAR = "TOGGLE_BOTTOM_NAVBAR",
}

export type TActionToggleBottomNavbar = {
    type: ActionType.TOGGLE_BOTTOM_NAVBAR;
    payload: boolean;
};


export type TAction = TActionToggleBottomNavbar;

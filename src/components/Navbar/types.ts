import { NavLink } from "react-router-dom";

export type TNavbarItemProps = {
    activeIcon: any;
    disableIcon: any;
} & React.ComponentProps<typeof NavLink>;

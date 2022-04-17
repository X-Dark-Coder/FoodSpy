import { NavLink } from "react-router-dom";

export type NavbarItemProps = {
    activeIcon: any;
    disableIcon: any;
} & React.ComponentProps<typeof NavLink>;

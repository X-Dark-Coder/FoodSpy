import { NavLink } from "react-router-dom";

export type TNavbarItemProps = {
    activeIcon: any;
    disableIcon: any;
    activeWhen: string[];
} & React.ComponentProps<typeof NavLink>;

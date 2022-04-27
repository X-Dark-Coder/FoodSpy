import classNames from "classnames";
import { TNavbarItemProps } from "./types";
import { useLocation, NavLink } from "react-router-dom";

const NavbarItem: React.FC<TNavbarItemProps> = ({
    activeIcon: ActiveIcon,
    disableIcon: DisabledIcon,
    children,
    className,
    to,
    ...rest
}) => {
    const location = useLocation();
    const isActive = location.pathname.includes(to as string);

    const containerClasses = classNames(
        "w-full py-2 md:pl-3 flex flex-col md:flex-row justify-center md:justify-start items-center w-full rounded-lg text-medium",
        isActive ? "md:bg-primary" : "md:bg-transparent",
        className
    );

    const spanClasses = classNames(
        "text-[11px] mt-[4px] md:mt-0 md:text-medium md:ml-4 font-semibold",
        isActive ? "text-primary md:text-white" : "text-mono-ink-lighter"
    );

    return (
        <NavLink to={to} className={containerClasses} {...rest}>
            {isActive ? <ActiveIcon className="md:navbar-desktop-item-icon-active" /> : <DisabledIcon />}
            <span className={spanClasses}>{children}</span>
        </NavLink>
    );
};

export default NavbarItem;

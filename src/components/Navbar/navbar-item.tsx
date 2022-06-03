import classNames from "classnames";
import { TNavbarItemProps } from "./types";
import { useLocation, NavLink } from "react-router-dom";

const NavbarItem: React.FC<TNavbarItemProps> = ({
    activeIcon: ActiveIcon,
    disableIcon: DisabledIcon,
    children,
    className,
    to,
    activeWhen,
    ...rest
}) => {
    const location = useLocation();
    const isActive = activeWhen.some((activeState) => location.pathname.includes(activeState));

    const containerClasses = classNames(
        "w-full py-2 md:pl-3 flex flex-col md:flex-row justify-center md:justify-start items-center w-full rounded-lg text-medium",
        isActive ? "md:bg-primary" : "md:bg-transparent",
        className
    );

    const spanClasses = classNames(
        "text-[11px] mt-[4px] md:mt-0 md:text-medium md:ml-4 font-semibold",
        isActive ? "text-primary md:text-white" : "text-mono-ink-lighter"
    );

    const disableIconClasses = classNames("w-7 h-7", {
        "stroke-mono-ink-light": to === "/search",
        "fill-mono-ink-light": to !== "/search",
    });

    return (
        <NavLink to={to} className={containerClasses} {...rest}>
            {isActive ? (
                <ActiveIcon className="fill-primary md:fill-white w-7 h-7" />
            ) : (
                <DisabledIcon className={disableIconClasses} />
            )}
            <span className={spanClasses}>{children}</span>
        </NavLink>
    );
};

export default NavbarItem;

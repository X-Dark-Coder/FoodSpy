import classNames from "classnames";
import { TTabMenuItemProps } from "./types";

const TabMenuItem: React.FC<TTabMenuItemProps> = ({ name, active, onClick }) => {
    const classes = classNames(
        "text-small md:text-medium font-semibold py-[5px] md:py-[7px] px-4 md:px-5 rounded-lg cursor-pointer transition whitespace-nowrap",
        {
            "bg-primary text-white": active,
            "bg-mono-sky-lighter text-mono-ink-lighter": !active,
        }
    );

    return (
        <li className={classes} onClick={onClick}>
            {name}
        </li>
    );
};

export default TabMenuItem;

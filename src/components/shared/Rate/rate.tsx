import { ReactComponent as StarIcon } from "assets/icons/Star_Active.svg";
import classNames from "classnames";
import { TRateProps } from "./types";

const Rate: React.FC<TRateProps> = ({ stars, count, white, size = "sm" }) => {
    const spanClasses = classNames({
        "text-mono-sky-lightest": white,
        "text-mono-ink-light": !white,
        "text-small" : size === "sm",
        "text-medium-16" : size === "md"
    });

    const iconClasses = classNames("mr-1 mb-[1.5px]",{
        "w-3 h-3" : size === "sm",
        "w-4 h-4" : size === "md"
    });

    return (
        <div className="flex justify-center items-center">
            <StarIcon className={iconClasses} />
            <span className={spanClasses}>{stars}</span>
            {count && <span className={spanClasses + " ml-[3px]"}>({count})</span>}
        </div>
    );
};

export default Rate;

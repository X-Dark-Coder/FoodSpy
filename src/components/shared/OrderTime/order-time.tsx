import { ReactComponent as ClockIcon } from "assets/icons/Clock.svg";
import classNames from "classnames";
import { TOrderTimeProps } from "./types";

const OrderTime: React.FC<TOrderTimeProps> = ({time,size = "sm"}) => {

    const spanClasses = classNames("text-mono-ink-light",{
        "text-small" : size === "sm",
        "text-medium-16" : size === "md"
    });

    const iconClasses = classNames("mr-1",{
        "w-3 h-3" : size === "sm",
        "w-4 h-4" : size === "md"
    });

    return (
        <div className="flex justify-center items-center">
            <ClockIcon className={iconClasses} />
            <span className={spanClasses}>{time} min</span>
        </div>
    );
};

export default OrderTime;

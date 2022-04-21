import { ReactComponent as ClockIcon } from "assets/icons/Clock.svg";

const OrderTime: React.FC<{time : number}> = ({time}) => {
    return (
        <div className="flex justify-center items-center">
            <ClockIcon className="w-3 h-3 mr-1" />
            <span className="text-small text-mono-ink-light">{time} min</span>
        </div>
    );
};

export default OrderTime;

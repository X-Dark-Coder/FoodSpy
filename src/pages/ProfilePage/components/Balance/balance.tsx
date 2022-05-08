import { ReactComponent as BigWaletIcon } from "assets/icons/Big Walet.svg";
import classNames from "classnames";
import { Button } from "components/shared";
import { useMediaQuery } from "react-responsive";

const Balance: React.FC = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 820px)" });

    const containerClasses = classNames(
        "bg-accent-cyan-tint-40 rounded-lg py-3 px-4 flex justify-between items-center",
        {
            "w-[335px]": !isMobile,
            "w-full": isMobile,
        }
    );

    return (
        <div className={containerClasses}>
            <div className="flex justify-start items-center">
                <BigWaletIcon className="mr-3" />
                <div className="flex justify-between items-start flex-col">
                    <span className="text-accent-cyan text-[12px] whitespace-nowrap">Digifood Balance</span>
                    <span className="text-large font-semibold text-accent-cyan">$250</span>
                </div>
            </div>
            <Button variant="small-primary">Topup</Button>
        </div>
    );
};

export default Balance;

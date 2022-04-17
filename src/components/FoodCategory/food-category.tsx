import classNames from "classnames";
import { FoodCategoryProps } from "./types";
import { Button } from "components/shared";

const FoodCategory: React.FC<FoodCategoryProps> = ({ variant, title, menuCount, from, className, picture }) => {
    const containerClasses = classNames(
        "flex justify-end items-center flex-col relative",
        {
            "min-w-[157px] max-w-[157px] h-[220px]": variant === "big",
            "min-w-[144px] max-w-[144px] h-[190px]": variant === "small",
        },
        className
    );

    const imageClasses = classNames("absolute shadow-[0_4px_24px_0_rgba(0,0,0,0.15)] rounded-full top-0", {
        "w-[80px] h-[80px]": variant === "small",
        "w-[96px] h-[96px]": variant === "big",
    });

    const boxClasses = classNames(
        `w-full rounded-lg bg-white shadow-[0_4px_8px_0_rgba(0,0,0,0.04),_0_0_2px_0_rgba(0,0,0,0.06),_0_0_1px_0_rgba(0,0,0,0.04)]`,
        {
            "h-[150px]": variant === "small",
            "h-[160px]": variant === "big",
        }
    );

    const bottomDivClasses = classNames("flex justify-between items-center px-3", {
        "mt-[14px]": variant === "small",
        "mt-[22px]": variant === "big",
    });

    return (
        <div className={containerClasses}>
            <img className={imageClasses} src={picture} alt="salad" />
            <div className={boxClasses}>
                <div className="flex justify-center items-start flex-col mt-[50px] pl-3">
                    <span className="text-mono-ink-light text-medium-16 font-medium">{title}</span>
                    <span className="text-mono-ink-lightest text-small mt-1">{menuCount}+ menu</span>
                </div>
                <div className={bottomDivClasses}>
                    <div className="flex justify-start items-end">
                        <span className="text-mono-ink-lighter text-[12px] mb-0.5 pr-[6px] block">From</span>
                        <span className="text-large text-mono-ink font-semibold block">${from}</span>
                    </div>
                    {variant === "small" && <Button variant="expand-small" />}
                    {variant === "big" && <Button variant="expand-medium" className="translate-y-[-2px]" />}
                </div>
            </div>
        </div>
    );
};

export default FoodCategory;

import { useEffect, useRef, useState } from "react";
import { TCartFood } from "./types";
import { ReactComponent as EditIcon } from "assets/icons/Edit.svg";
import { ReactComponent as PlusIcon } from "assets/icons/Plus.svg";
import { ReactComponent as MinusIcon } from "assets/icons/Minus.svg";
import { useDispatch } from "react-redux";
import { changeProductCount, changeProductInstructions, removeProduct } from "store/actions/shopping-cart.actions";
import { useMediaQuery } from "react-responsive";
import { motion, Variants, useAnimation } from "framer-motion";
import classNames from "classnames";
import { calculateDiscount } from "store/reducers/utils";

const CartFood: React.FC<TCartFood> = ({ id, name, price, picture, count, instruction, discount }) => {
    const dispatch = useDispatch();
    const isMobile = useMediaQuery({ query: "(max-width : 500px)" });
    const animationControls = useAnimation();
    const [foodInstruction, setFoodInstruction] = useState(instruction ? instruction : "");
    const [foodCount, setFoodCount] = useState(count);

    const timerInstance = useRef<NodeJS.Timeout | null>(null);

    const onInstructionChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFoodInstruction(e.target.value);
        if (timerInstance) clearTimeout(timerInstance.current!);
        timerInstance.current = setTimeout(() => {
            dispatch(changeProductInstructions({ id, instructions: e.target.value }));
        }, 1000);
    };

    const decreaseFoodCount = () => {
        animationControls.start("beatDown");
        setFoodCount(foodCount - 1);
        dispatch(changeProductCount({ id, type: "decrease" }));
        if (foodCount - 1 === 0) {
            dispatch(removeProduct(id));
        }
    };

    const increaseFoodCount = () => {
        animationControls.start("beatUp");
        setFoodCount(foodCount + 1);
        dispatch(changeProductCount({ id, type: "increase" }));
    };

    const containerClasses = classNames("h-[120px] bg-white rounded-md shadow-main flex justify-start items-center ", {
        "w-full": isMobile,
        " min-w-[335px] max-w-[335px]": !isMobile,
    });

    const constCartContainerVariants: Variants = {
        hide: {
            scale: 0.1,
            opacity: 0,
            transition: {
                opacity: {
                    duration: 0.15,
                },
                scale: {
                    duration: 0.25,
                },
            },
        },
        show: {
            scale: 1,
            opacity: 1,
        },
    };

    const priceVariants: Variants = {
        beatDown: {
            scale: [1, 0.8, 1],
            color: ["#040C22", "#00B167", "#040C22"],
            transition: { duration: 0.15 },
        },
        beatUp: {
            scale: [1, 1.2, 1],
            color: ["#040C22", "#F55053", "#040C22"],
            transition: { duration: 0.15 },
        },
    };

    return (
        <motion.div
            variants={constCartContainerVariants}
            initial="hide"
            animate="show"
            exit="hide"
            className={containerClasses}
            layout
        >
            <div className="h-full w-[120px] relative">
                <img
                    src={picture}
                    alt="salad"
                    className="w-full h-full rounded-md object-cover absolute top-0 left-0"
                />
            </div>
            <div className="w-[calc(100%_-_120px)] pl-3 py-[8px] pr-[18px] flex justify-between items-start flex-col h-full">
                <div>
                    <h3 className="text-mono-ink-light text-medium-16">{name}</h3>
                    <div className="flex justify-start items-center mt-1">
                        <EditIcon className="w-4 h-4" />
                        <input
                            className="ml-1 text-small text-mono-ink-lighter outline-none max-w-[170px]"
                            type="text"
                            value={foodInstruction}
                            onChange={onInstructionChanged}
                            placeholder="Add note"
                        />
                    </div>
                </div>
                <div className="w-full flex justify-between items-center">
                    <motion.span
                        variants={priceVariants}
                        animate={animationControls}
                        className="text-mono-ink font-semibold text-large"
                    >
                        ${count * (discount ? price - calculateDiscount(price, discount) : price)}
                    </motion.span>
                    <div className="flex justify-center items-center gap-4">
                        <button
                            className="w-6 h-6 rounded-lg bg-mono-sky-lighter flex justify-center items-center"
                            onClick={decreaseFoodCount}
                        >
                            <MinusIcon className="w-[16px] h-[16px]" />
                        </button>
                        <span className="text-medium-16 font-semibold text-mono-ink-light">{foodCount}</span>
                        <button
                            className="w-6 h-6 rounded-lg bg-mono-sky-lighter flex justify-center items-center"
                            onClick={increaseFoodCount}
                        >
                            <PlusIcon className="w-[16px] h-[16px]" />
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default CartFood;

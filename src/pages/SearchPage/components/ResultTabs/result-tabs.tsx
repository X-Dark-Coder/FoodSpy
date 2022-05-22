import React from "react";
import classNames from "classnames";
import { TResultTabsProps } from "./types";
import { useMediaQuery } from "react-responsive";
import { motion, AnimatePresence, Variants } from "framer-motion";

const ResultTabs: React.FC<TResultTabsProps> = ({ activeTab, setActiveTab, disable }) => {
    const isMobile = useMediaQuery({ query: "(max-width: 639px)" });

    const containerClasses = classNames(
        "w-full sm:w-[215px] lg:w-[335px] h-[40px] sm:h-[48px] bg-mono-sky-lighter p-[5px] flex justify-evenly items-center rounded-md",
        {
            "opacity-[0.6]": disable,
        }
    );

    const tabClasses = {
        base: "rounded-[4px] w-full h-full text-small-14 font-semibold",
        active: "bg-white text-primary",
        default: "text-mono-ink-lighter",
    };

    const restaurantTabClasses = classNames(tabClasses.base, {
        [tabClasses.default]: activeTab === "food",
        [tabClasses.active]: activeTab === "restaurant",
    });

    const foodTabClasses = classNames(tabClasses.base, {
        [tabClasses.default]: activeTab === "restaurant",
        [tabClasses.active]: activeTab === "food",
    });

    const resultTabsVariants: Variants = {
        hide: {
            y: -10,
            opacity: 0,
            transition: {
                duration: 0.1,
            },
        },
        show: {
            y: 0,
            opacity: 1,
        },
    };

    const template = (
        <motion.div
            className={containerClasses}
            variants={resultTabsVariants}
            initial="hide"
            animate="show"
            exit="hide"
        >
            <button className={foodTabClasses} onClick={!disable ? () => setActiveTab("food") : undefined}>
                Food
            </button>
            <button className={restaurantTabClasses} onClick={!disable ? () => setActiveTab("restaurant") : undefined}>
                Restaurant
            </button>
        </motion.div>
    );

    if (isMobile) {
        return <AnimatePresence>{!disable && template}</AnimatePresence>;
    } else {
        return template;
    }
};

export default React.memo(ResultTabs);

import { Variants } from "framer-motion";

/**
 *  Framer motion variants
 */

export const searchSectionsVariants: Variants = {
    hide: {
        opacity: 0,
        x: -20,
        transition: {
            duration: 0.15,
            opacity: {
                duration: 0.1,
            },
        },
    },
    show: {
        opacity: 1,
        x: 0,
        transition: {
            duration: 0.25,
            type: "spring",
        },
    },
    exit: {
        opacity: 0,
        x: 20,
        transition: {
            duration: 0.15,
            opacity: {
                duration: 0.1,
            },
        },
    },
};

export const searchResultVariants: Variants = {
    hide: {
        opacity: 0,
        y: 5,
        scale: 0.98,
        transition: {
            duration: 0.15,
            opacity: {
                duration: 0.1,
            },
        },
    },
    show: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            duration: 0.25,
            type: "spring",
        },
    },
};
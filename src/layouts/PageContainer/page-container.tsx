import { motion, Variants } from "framer-motion";
import { TPageContainerProps } from "./types";
import classNames from "classnames";
import { useMediaQuery } from "react-responsive";
import { useEffect } from "react";

const PageContainer: React.FC<TPageContainerProps> = ({ children }) => {
    const containerVariants: Variants = {
        initial: {
            y: 10,
            opacity: 0,
            transition: {
                duration: 0.15,
            },
        },
        fadeIn: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.25,
            },
        },
    };

    const containerClasses = classNames("w-full h-full");

    useEffect(() => {
        const container = document.getElementById("app-scrollable-container")!;
        container.scrollTo(0, 0);
    }, []);

    return (
        <motion.div
            variants={containerVariants}
            initial="initial"
            animate="fadeIn"
            exit="initial"
            className={containerClasses}
        >
            {children}
        </motion.div>
    );
};

export default PageContainer;

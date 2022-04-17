import { motion, Variants } from "framer-motion";
import { PageContainerProps } from "./types";

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
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

    return (
        <motion.div
            variants={containerVariants}
            initial="initial"
            animate="fadeIn"
            exit="initial"
            className="w-full h-full"
        >
            {children}
        </motion.div>
    );
};

export default PageContainer;

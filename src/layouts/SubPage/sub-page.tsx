import { motion, Variants } from "framer-motion";
import { SubPageProps } from "./types";

const SubPage: React.FC<SubPageProps> = ({ children }) => {
    let subPageVariants: Variants = {
        hide: {
            y: 10,
            opacity: 0,
            transition: {
                duration: 0.15,
            },
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.25,
            },
        },
    };

    return (
            <motion.div
                variants={subPageVariants}
                initial="hide"
                animate="show"
                exit="hide"
                className="w-full h-screen bg-mono-sky-lightest z-[800] relative overflow-y-scroll"
            >
                {children}
            </motion.div>
    );
};

export default SubPage;

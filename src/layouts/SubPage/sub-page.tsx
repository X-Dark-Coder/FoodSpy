import { motion, Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import { TSubPageProps } from "./types";

const SubPage: React.FC<TSubPageProps> = ({ children }) => {
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

    const container = useRef<HTMLDivElement>(null);

    // useEffect(() => {
    //     requestAnimationFrame(() => container.current?.scrollTo(0, 0));
    // }, []);

    return (
        <motion.div
            variants={subPageVariants}
            initial="hide"
            animate="show"
            exit="hide"
            className="w-full h-screen bg-mono-sky-lightest z-[800] relative overflow-y-scroll"
            ref={container}
        >
            {children}
            <button onClick={() => console.log(container.current)}>sdfsdfs</button>
        </motion.div>
    );
};

export default SubPage;

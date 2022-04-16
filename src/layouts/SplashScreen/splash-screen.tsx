import Logo from "assets/img/logo.png";
import { motion, Variants } from "framer-motion";

const SplashScreen = () => {
    const parentVariants: Variants = {
        exit: {
            y: 10,
            opacity: 0,
            transition: {
                type: "spring",
                damping: 14,
                bounce: 1,
                duration: 0.15,
                delay: 0.25,
            },
        },
    };

    const childVariants: Variants = {
        initial: {
            y: 40,
            opacity: 0,
            scale: 0.9,
        },
        fadeIn: {
            y: 0,
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                damping: 14,
                bounce: 1,
                duration: 0.15,
                delay: 0.25,
            },
        },
    };

    return (
        <motion.div
            variants={parentVariants}
            exit="exit"
            className="bg-white h-screen w-screen overflow-hidden top-0 left-0 fixed z-[999]"
        >
            <motion.div
                className="flex justify-center items-center flex-col h-screen w-full"
                initial="initial"
                animate="fadeIn"
                variants={childVariants}
            >
                <img className="w-[140px] md:w-auto" src={Logo} alt="brand-logo" />
            </motion.div>
        </motion.div>
    );
};

export default SplashScreen;

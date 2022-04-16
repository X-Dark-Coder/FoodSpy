import { motion, Variants } from "framer-motion";

type SlideContentProps = { title: string; description: string };

const SlideContent: React.FC<SlideContentProps> = ({ title, description }) => {
    const slidesContentVariants: Variants = {
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

    return (
        <motion.div
            variants={slidesContentVariants}
            initial="hide"
            animate="show"
            exit="hide"
            className="w-4/5 flex justify-center items-center flex-col mb-8"
        >
            <h4 className="text-mono-ink text-title-2 lg:text-white text-center font-bold">{title}</h4>
            <p className="text-mono-ink-lighter lg:text-mono-sky-lightest text-center pt-3 font-normal">
                {description}
            </p>
        </motion.div>
    );
};

export default SlideContent;

import { createPortal } from "react-dom";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { TModalProps } from "./types";
import classNames from "classnames";

const Modal: React.FC<TModalProps> = ({ show, onClose, children, containerClassName }) => {
    const overlayVariants: Variants = {
        hide: {
            opacity: 0,
            transition: {
                duration: 0.25,
            },
        },
        show: {
            opacity: 1,
            transition: {
                duration: 0.25,
            },
        },
    };

    const contentVariants: Variants = {
        hide: {
            opacity: 0,
            scale: 0.95,
            y: 30,
            transition: {
                duration: 0.2,
            },
        },
        show: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.2,
            },
        },
    };

    return createPortal(
        <AnimatePresence>
            {show && (
                <div className="z-[999] fixed top-0 flex justify-center items-center w-full h-full">
                    <motion.div
                        variants={contentVariants}
                        initial="hide"
                        animate="show"
                        exit="hide"
                        className="z-[1000] min-w-[250px] mx-5 rounded-3xl bg-white absolute"
                    >
                        <div className={classNames("flex justify-center items-center", containerClassName)}>
                            {children}
                        </div>
                    </motion.div>
                    <motion.div
                        variants={overlayVariants}
                        initial="hide"
                        animate="show"
                        exit="hide"
                        className="z-[999] bg-modal-overlay w-full h-full cursor-pointer absolute"
                        onClick={onClose}
                        title="Click To Close"
                    ></motion.div>
                </div>
            )}
        </AnimatePresence>,
        document.getElementsByTagName("body")[0]
    );
};

export default Modal;

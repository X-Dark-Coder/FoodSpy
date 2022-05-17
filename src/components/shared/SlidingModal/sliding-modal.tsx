import { createPortal } from "react-dom";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { TSlidingModalProps } from "./types";

const SlidingModal: React.FC<TSlidingModalProps> = ({ show, onClose, children }) => {
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
            y: "100%",
            transition: {
                duration: 0.25,
            },
        },
        show: {
            y: 0,
            transition: {
                duration: 0.25,
            },
        },
    };

    return createPortal(
        <AnimatePresence>
            {show && (
                <div className="z-[999] fixed top-0 left-0 w-full h-full">
                    <motion.div
                        variants={contentVariants}
                        initial="hide"
                        animate="show"
                        exit="hide"
                        className="z-[1000] w-full rounded-t-3xl bg-white absolute bottom-0"
                        drag="y"
                        dragConstraints={{ top: 0, bottom: 0 }}
                        onDragEnd={(e, info) => {
                            if (info.offset.y > 120) {
                                onClose();
                            }
                        }}
                    >
                        <div className="w-full py-2 flex justify-center items-center cursor-grab">
                            <div className="h-[5px] w-[50px] rounded-sm bg-mono-sky"></div>
                        </div>
                        <div className="flex justify-center items-start max-h-[80vh] overflow-y-scroll overscroll-contain">{children}</div>
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

export default SlidingModal;

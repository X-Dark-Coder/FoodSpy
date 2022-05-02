import { TLikeButtonProps } from "./types";
import { motion, Variants, AnimatePresence } from "framer-motion";
import { ReactComponent as HeartIcon } from "assets/icons/Heart.svg";
import { ReactComponent as HeartFillIcon } from "assets/icons/Heart-fill.svg";

const LikeButton: React.FC<TLikeButtonProps> = ({ isLiked, setIsLiked }) => {
    const likeIconVariants: Variants = {
        unliked: {
            scale: 1,
            x: [0, 2, -2, 2, -2, 2, 0],
            rotate: [0, 6, -6, 6, -6, 6, 0],
            transition: {
                duration: 0.5,
            },
        },
        liked: {
            scale: [0.9, 1.15, 0.9, 1.15, 0.9, 1],
            transition: {
                duration: 0.6,
            },
        },
    };

    return (
        <button
            className="flex justify-center items-center absolute top-2 right-2 z-50 w-9 h-9 rounded-full bg-[rgba(0,0,0,0.6)]"
            onClick={() => setIsLiked(!isLiked)}
        >
            {isLiked ? (
                <motion.div variants={likeIconVariants} animate="liked">
                    <HeartFillIcon className="w-5 h-5 mt-px" />
                </motion.div>
            ) : (
                <motion.div variants={likeIconVariants} animate="unliked" className="origin-bottom">
                    <HeartIcon className="w-5 h-5 mt-px" />
                </motion.div>
            )}
        </button>
    );
};

export default LikeButton;

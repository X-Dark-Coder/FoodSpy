import { motion, Variants } from "framer-motion";
import { ReactComponent as HeartIcon } from "assets/icons/Heart.svg";
import { ReactComponent as HeartFillIcon } from "assets/icons/Heart-fill.svg";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addFoodToWishlist, removeFoodFromWishlist } from "store/actions/user.actions";
import { useState } from "react";

const LikeButton: React.FC = () => {
    const { productId } = useParams<{ productId: string }>();
    const dispatch = useDispatch();
    const isFoodInWishlist = useTypedSelector((state) =>
        state.user.wishlist.find((itemId) => itemId === Number(productId))
    );
    const [isLiked, setIsLiked] = useState(!!isFoodInWishlist);

    const removeFoodFromWishlistHandler = () => {
        setIsLiked(false);
        dispatch(removeFoodFromWishlist(Number(productId)));
    };

    const addFoodToWishlistHandler = () => {
        setIsLiked(true);
        dispatch(addFoodToWishlist(Number(productId)));
    };

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
            className="flex justify-center items-center absolute top-2 right-2 z-50 w-9 h-9 rounded-full bg-white"
            onClick={isLiked ? removeFoodFromWishlistHandler : addFoodToWishlistHandler}
        >
            {isLiked ? (
                <motion.div initial={false} variants={likeIconVariants} animate="liked">
                    <HeartFillIcon className="w-5 h-5 mt-px" />
                </motion.div>
            ) : (
                <motion.div initial={false} variants={likeIconVariants} animate="unliked" className="origin-bottom">
                    <HeartIcon className="w-5 h-5 mt-px" />
                </motion.div>
            )}
        </button>
    );
};

export default LikeButton;

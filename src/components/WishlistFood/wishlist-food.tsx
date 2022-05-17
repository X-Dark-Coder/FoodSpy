import classNames from "classnames";
import { Button } from "components/shared";
import { calculateDiscount } from "store/reducers/utils";
import { TWishlistFoodProps } from "./types";
import { ReactComponent as HeartFillIcon } from "assets/icons/Heart-fill.svg";
import { ReactComponent as HeartFillBlackIcon } from "assets/icons/Heart-fill-black.svg";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useState } from "react";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useDispatch } from "react-redux";
import { removeFoodFromWishlist } from "store/actions/user.actions";
import { useNavigate } from "react-router-dom";

const WishListFood: React.FC<TWishlistFoodProps> = ({ fullWidth, picture, price, discount, name, id, restaurant }) => {
    const dispatch = useDispatch();
    const isFoodInWishlist = useTypedSelector((state) => state.user.wishlist.find((itemId) => itemId === id));
    const [isLiked, setIsLiked] = useState(!!isFoodInWishlist);
    const navigate = useNavigate();

    const rowTemplateContainerClasses = classNames(
        "h-[120px] bg-white rounded-md shadow-main flex justify-start items-center",
        {
            "min-w-[335px] max-w-[335px]": !fullWidth,
            "w-full": fullWidth,
        }
    );

    const likeButtonVariants: Variants = {
        hide: {
            scale: 0.8,
            opacity: 0,
            transition: {
                duration: 0.1,
            },
        },
        show: {
            scale: 1,
            opacity: 1,
            transition: {
                duration: 0.1,
            },
        },
    };

    const removeFoodFromWishlistHandler = () => {
        setIsLiked(false);
        setTimeout(() => {
            dispatch(removeFoodFromWishlist(id));
        }, 800);
    };

    const navigateToFoodPage = () => navigate(`/restaurant/${restaurant}/product/${id}`);

    return (
        <div className={rowTemplateContainerClasses}>
            <div className="h-full w-[120px] relative cursor-pointer" onClick={navigateToFoodPage}>
                <img src={picture} alt="salad" className="w-full h-full rounded-md object-cover absolute top-0" />
                {discount && (
                    <div className="w-[40px] h-[20px] absolute top-[6px] bg-accent-redd rounded-r-[2px] flex justify-center items-center">
                        <span className="text-accent-redd-tint-40 font-semibold text-[12px]">-{discount}%</span>
                    </div>
                )}
            </div>
            <div className="flex flex-col justify-between h-full py-[10px] pr-4 pl-2 w-[calc(100%_-_120px)]">
                <div className="w-full flex justify-between items-start">
                    <div className="flex flex-col items-start justify-start">
                        <h3 className="text-mono-ink-light text-medium-16">{name}</h3>
                        <span className="text-mono-ink-lightest text-[12px] mt-[2px]">Restaurant Name</span>
                    </div>
                    <button className="mt-1" onClick={removeFoodFromWishlistHandler}>
                        <AnimatePresence exitBeforeEnter>
                            {isLiked && (
                                <motion.div
                                    key={1}
                                    variants={likeButtonVariants}
                                    animate="show"
                                    initial="hide"
                                    exit="hide"
                                >
                                    <HeartFillIcon className="w-5 h-5" />
                                </motion.div>
                            )}

                            {!isLiked && (
                                <motion.div
                                    key={2}
                                    variants={likeButtonVariants}
                                    animate="show"
                                    initial="hide"
                                    exit="hide"
                                >
                                    <HeartFillBlackIcon className="w-5 h-5" />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </button>
                </div>
                <div className="flex justify-between items-end w-full">
                    <div className="flex items-start justify-between w-full mt-[6px]">
                        <div className="flex justify-center items-start">
                            <span className="text-title-4 text-primary font-bold mr-1">
                                ${price - calculateDiscount(price, discount)}
                            </span>
                            {discount && (
                                <span className="line-through text-mono-ink-lightest text-[14px] translate-y-px">
                                    ${price}
                                </span>
                            )}
                        </div>
                    </div>
                    <Button variant="small-primary" className="h-[30px_!important]" onClick={navigateToFoodPage}>
                        Order
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default WishListFood;

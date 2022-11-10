import { Button } from "components/shared";
import { useTypedSelector } from "hooks/useTypedSelector";
import { ReactComponent as ShoppingBag } from "assets/icons/ShoppingBagWhite.svg";
import { AnimatePresence, motion, Variants } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";

const CheckoutButton: React.FC = () => {
    const { restaurantId } = useParams<{ restaurantId: string }>();
    const navigate = useNavigate();
    const cartRestaurantId = useTypedSelector((state) => state.cart.restaurant) as number;
    const productsCount = useTypedSelector((state) => state.cart.productsCount);
    const totalPrice = useTypedSelector((state) => state.cart.totalPrice);

    const buttonText = productsCount + " items to Checkout";

    const rightSideTotalPrice = (
        <div className="ml-12 flex justify-center items-center px-2 bg-primary-tint-10 h-[32px] rounded-md">
            <sup>$</sup>
            <span className="text-large font-semibold">{totalPrice}</span>
        </div>
    );

    const redirectToCheckoutPage = () => navigate("/checkout");

    const containerVariants: Variants = {
        hide: { y: 25, opacity: 0 },
        show: { y: 0, opacity: 1 },
    };

    console.log(cartRestaurantId , Number(restaurantId))

    if (productsCount !== 0 && cartRestaurantId === Number(restaurantId))
        return (
            <AnimatePresence>
                <motion.div
                    variants={containerVariants}
                    initial="hide"
                    animate="show"
                    exit="hide"
                    className="fixed bottom-5 flex justify-center items-center w-full md:w-auto md:block md:right-5"
                >
                    <Button
                        variant="wide-primary"
                        rightSideElement={rightSideTotalPrice}
                        icon={ShoppingBag}
                        onClick={redirectToCheckoutPage}
                    >
                        {buttonText}
                    </Button>
                </motion.div>
            </AnimatePresence>
        );

    return null;
};

export default CheckoutButton;

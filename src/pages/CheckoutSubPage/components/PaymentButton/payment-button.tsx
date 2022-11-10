import { Button } from "components/shared";
import { useTypedSelector } from "hooks/useTypedSelector";
import { motion, Variants } from "framer-motion";
import { useLocation, useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { clearShoppingCart, removeDiscount } from "store/actions/shopping-cart.actions";
import AlertModal from "components/shared/AlertModal/alert-modal";
import { ReactComponent as OrderSuccess } from "assets/img/order-success.svg";
import { ReactComponent as OrderError } from "assets/img/error-picture.svg";
import { addOrderHistory, setWalletCredit } from "store/actions/user.actions";

const CheckoutButton: React.FC = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);
    const [isErrorModalOpen, setIsErrorModalOpen] = useState(false);
    const dispatch = useDispatch();
    const totalPrice = useTypedSelector((state) => state.cart.totalPrice);
    const walletCredit = useTypedSelector((state) => state.user.walletCredit);
    const products = useTypedSelector((state) => state.cart.products);
    const restaurantId = useTypedSelector((state) => state.cart.restaurant)!;

    const rightSideTotalPrice = (
        <div className="flex justify-center items-center px-2 bg-primary-tint-10 h-[32px] rounded-md">
            <sup>$</sup>
            <span className="text-large font-semibold">{totalPrice}</span>
        </div>
    );

    const containerVariants: Variants = {
        hide: { y: 25, opacity: 0 },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                delay: 0.25,
                duration: 0.5,
            },
        },
    };

    const calculatePayment = () => {
        if (walletCredit >= totalPrice) {
            dispatch(setWalletCredit(-totalPrice));
            dispatch(
                addOrderHistory({
                    date: new Date(),
                    payment: totalPrice,
                    products,
                    restaurant: restaurantId,
                })
            );
            dispatch(removeDiscount());
            setIsSuccessModalOpen(true);
        } else {
            setIsErrorModalOpen(true);
        }
    };

    const navigateToRestaurantPage = () => {
        setIsSuccessModalOpen(false);
        dispatch(clearShoppingCart());
    };

    const navigateToProfilePage = () => {
        setIsErrorModalOpen(false);
        navigate("/profile");
    }

    return (
        <React.Fragment>
            {pathname.includes("checkout") && (
                <motion.div
                    variants={containerVariants}
                    initial="hide"
                    animate="show"
                    className="fixed bottom-5 flex justify-center items-center w-full md:w-auto md:block md:right-5"
                >
                    <Button variant="wide-primary" rightSideElement={rightSideTotalPrice} onClick={calculatePayment}>
                        Process To Payment
                    </Button>
                </motion.div>
            )}

            <AlertModal
                title="Success"
                description="Payment successfully completed"
                picture={OrderSuccess}
                onButtonClick={navigateToRestaurantPage}
                buttonText="Ok"
                show={isSuccessModalOpen}
                onClose={navigateToRestaurantPage}
            />

            <AlertModal
                title="Lack Of Money"
                description="Please topup your wallet"
                picture={OrderError}
                onButtonClick={navigateToProfilePage}
                buttonText="Go To Profile"
                show={isErrorModalOpen}
                onClose={() => setIsErrorModalOpen(false)}
            />
        </React.Fragment>
    );
};

export default CheckoutButton;

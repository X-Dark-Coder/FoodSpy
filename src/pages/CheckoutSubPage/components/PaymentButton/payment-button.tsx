import { Button } from "components/shared";
import { useTypedSelector } from "hooks/useTypedSelector";
import { motion, Variants } from "framer-motion";
import { useNavigate, useLocation, useParams } from "react-router-dom";
import React from "react";

const CheckoutButton: React.FC = () => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const totalPrice = useTypedSelector((state) => state.cart.totalPrice);

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

    return (
        <React.Fragment>
            {pathname.includes("checkout") && (
                <motion.div
                    variants={containerVariants}
                    initial="hide"
                    animate="show"
                    className="fixed bottom-5 flex justify-center items-center w-full md:w-auto md:block md:right-5"
                >
                    <Button variant="wide-primary" rightSideElement={rightSideTotalPrice}>
                        Process To Payment
                    </Button>
                </motion.div>
            )}
        </React.Fragment>
    );
};

export default CheckoutButton;

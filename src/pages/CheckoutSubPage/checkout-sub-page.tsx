import { AnimateSharedLayout } from "framer-motion";
import { SubPage } from "layouts";
import { useParams } from "react-router-dom";
import { AddressDetails, Discount, OrderReview, PaymentButton, YourOrder } from "./components";

const CheckoutSubPage: React.FC = () => {
    const { restaurantId } = useParams<{ restaurantId: string }>();

    return (
        <SubPage backLink={"/restaurant/" + restaurantId} title="Checkout">
            <AnimateSharedLayout>
                <div className="pb-[90px]">
                    <YourOrder />
                    <div className="flex justify-start items-start flex-col lg:flex-row mt-7">
                        <div className="w-full max-w-[500px] lg:max-w-[400px]">
                            <AddressDetails />
                            <Discount />
                        </div>
                        <div className="w-full max-w-[500px]">
                            <OrderReview />
                            <PaymentButton />
                        </div>
                    </div>
                </div>
            </AnimateSharedLayout>
        </SubPage>
    );
};

export default CheckoutSubPage;

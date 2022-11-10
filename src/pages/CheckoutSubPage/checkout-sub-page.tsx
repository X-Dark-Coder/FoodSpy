import { LayoutGroup } from "framer-motion";
import { SubPage } from "layouts";
import { AddressDetails, Discount, OrderReview, PaymentButton, YourOrder } from "./components";
import { useTypedSelector } from "hooks/useTypedSelector";

const CheckoutSubPage: React.FC = () => {
    const restaurantId = useTypedSelector((state) => state.cart.restaurant)!;

    return (
        <SubPage backLink={"/restaurant/" + restaurantId} title="Checkout">
            <LayoutGroup>
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
            </LayoutGroup>
        </SubPage>
    );
};

export default CheckoutSubPage;

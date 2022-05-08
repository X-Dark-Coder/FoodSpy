import { foods } from "api/fakeApi";
import { useTypedSelector } from "hooks/useTypedSelector";
import { motion } from "framer-motion";
import { calculateDiscount } from "store/reducers/utils";

const OrderReview: React.FC = () => {
    const products = useTypedSelector((state) => state.cart.products);
    const totalPrice = useTypedSelector((state) => state.cart.totalPrice);
    const discount = useTypedSelector((state) => state.cart.discount);

    return (
        <motion.section layout className="mt-6 lg:mt-0 w-full">
            <h3 className="text-mono-ink text-title-3 font-bold px-5">Order Review</h3>
            <div className="w-full mt-6 px-5 flex justify-start items-start flex-col gap-4">
                {products.map(({ id, count }) => {
                    const targetProduct = foods.find((food) => food.id === id)!;
                    return (
                        <div className="w-full text-mono-ink-light text-medium flex justify-between items-center">
                            <span>
                                {targetProduct.name} ({count} items)
                            </span>
                            <span>${count * targetProduct.price}</span>
                        </div>
                    );
                })}

                {discount !== 0 && (
                    <div className="w-full text-mono-ink text-medium font-semibold flex justify-between items-center">
                        <span>Discount</span>
                        <span className="text-accent-green">
                            ${calculateDiscount((totalPrice / (100 - discount)) * 100, discount)}
                        </span>
                    </div>
                )}

                <div className="w-full text-mono-ink text-medium font-semibold flex justify-between items-center">
                    <span>Total Price</span>
                    <span>${totalPrice}</span>
                </div>
            </div>
        </motion.section>
    );
};

export default OrderReview;

import { useMediaQuery } from "react-responsive";
import { useTypedSelector } from "hooks/useTypedSelector";
import classNames from "classnames";
import { fakeFoods as foods } from "api/foods";
import CartFood from "components/CartFood/cart-food";
import { AnimatePresence } from "framer-motion";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";

const YourOrder: React.FC = () => {
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ query: "(max-width : 500px)" });
    const products = useTypedSelector((state) => state.cart.products);
    const { restaurantId } = useParams<{ restaurantId: string }>();

    const orderContainerClasses = classNames(
        // "grid grid-cols-[repeat(auto-fill,_157px)] gap-5 justify-evenly mt-5 px-5 w-full ",
        "mt-5 px-5 w-full flex justify-start items-center gap-5 flex-wrap",
        {
            "flex-col": isMobile,
        }
    );

    useEffect(() => {
        if (products.length === 0) navigate("/restaurant/" + restaurantId);
    }, [products]);

    return (
        <section className="mt-6 w-full">
            <h3 className="text-mono-ink text-title-3 font-bold px-5">Your Order</h3>
            <div className={orderContainerClasses}>
                <AnimatePresence>
                    {products.map(({ id, count, instructions }) => {
                        const targetProduct = foods.find((food) => food.id === id)!;
                        return (
                            <CartFood
                                key={id}
                                id={id}
                                count={count}
                                instruction={instructions}
                                name={targetProduct.name}
                                picture={targetProduct.picture}
                                price={targetProduct.price}
                                discount={targetProduct.discount}
                            />
                        );
                    })}
                </AnimatePresence>
            </div>
        </section>
    );
};

export default YourOrder;

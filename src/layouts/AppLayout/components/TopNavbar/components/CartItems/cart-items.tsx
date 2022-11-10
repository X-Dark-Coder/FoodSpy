import { ReactComponent as ShoppingBagIcon } from "assets/icons/ShoppingBag.svg";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useNavigate } from "react-router";

const CartItems: React.FC = () => {
    const navigate = useNavigate();
    const productsCount = useTypedSelector(state => state.cart.productsCount);
    const totalPrice = useTypedSelector(state => state.cart.totalPrice);

    const goToCheckoutPage = () => navigate("/checkout")

    if (productsCount !== 0) {
        return (
            <div
                className="bg-primary-tint-40 py-[5px] px-3 flex justify-center items-center rounded-[30px] h-[32px] gap-[6px] cursor-pointer"
                onClick={goToCheckoutPage}
            >
                <ShoppingBagIcon className="w-[16px]" />
                <span className="text-small text-primary font-semibold translate-y-px whitespace-nowrap">{productsCount} Items {totalPrice}$</span>
            </div>
        );
    }

    return null;

};
export default CartItems;

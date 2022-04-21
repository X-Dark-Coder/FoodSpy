import { ReactComponent as ShoppingBagIcon } from "assets/icons/ShoppingBag.svg";

const CartItems: React.FC = () => {
    return (
        <div
            className="bg-primary-tint-40 py-[5px] px-3 flex justify-center items-center rounded-[30px] h-[32px] gap-[6px]"
        >
            <ShoppingBagIcon className="w-[16px]" />
            <span className="text-small text-primary font-semibold translate-y-px whitespace-nowrap">2 Items</span>
        </div>
    );
};
export default CartItems;

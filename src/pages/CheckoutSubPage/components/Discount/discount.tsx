import { Button, Input } from "components/shared";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { setDiscount, removeDiscount } from "store/actions/shopping-cart.actions";
import { useTypedSelector } from "hooks/useTypedSelector";
import { motion } from "framer-motion";

const Discount: React.FC = () => {
    const dispatch = useDispatch();
    const discount = useTypedSelector((state) => state.cart.discount);
    const [discountCode, setDiscountCode] = useState<string>("");

    const onInputChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDiscountCode(e.target.value);
    };

    const submitDiscount = () => {
        dispatch(setDiscount(Number(30)));
    };

    const removeDiscountHandler = () => {
        dispatch(removeDiscount());
        setDiscountCode("");
    };

    return (
        <motion.section layout className="mt-6 w-full max-w-[500px]">
            <h3 className="text-mono-ink text-title-3 font-bold px-5">Discount</h3>
            <div className="flex justify-between items-center w-full h-[52px] rounded-md gap-3 mt-5 px-5">
                <Input
                    variant="simple"
                    type="text"
                    placeholder="Have a discount code?"
                    containerClassName="h-[100%_!important]"
                    onChange={onInputChanged}
                    value={discountCode}
                    fullWidth
                    disabled={discount !== 0}
                />
                <div className="w-[120px] h-full">
                    <Button
                        variant="wide-secondary"
                        className="h-[100%_!important]"
                        onClick={discount !== 0 ? removeDiscountHandler : submitDiscount}
                        fullWidth
                    >
                        {discount !== 0 ? "Remove" : "Apply"}
                    </Button>
                </div>
            </div>
        </motion.section>
    );
};

export default Discount;

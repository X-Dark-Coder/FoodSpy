import { Button } from "components/shared";
import { ReactComponent as PlusIcon } from "assets/icons/Plus.svg";
import { ReactComponent as MinusIcon } from "assets/icons/Minus.svg";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "store/actions/shopping-cart.actions";
import { useNavigate, useParams } from "react-router-dom";
import { TAddToCartProps } from "./types";

const AddToCart: React.FC<TAddToCartProps> = ({ foodInstructions }) => {
    const { restaurantId, productId } = useParams<{ restaurantId: string; productId: string }>();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [foodCount, setFoodCount] = useState(1);

    const increaseFoodCount = () => {
        if (foodCount !== 8) setFoodCount(foodCount + 1);
    };

    const decreaseFoodCount = () => {
        if (foodCount !== 1) setFoodCount(foodCount - 1);
    };

    const addProductToCart = () => {
        dispatch(addProduct({ id: Number(productId)!, count: foodCount, instructions: foodInstructions }));
        navigate("/restaurant/" + restaurantId);
    };

    return (
        <div className="mt-6">
            <div className="w-full h-px rounded-sm bg-[rgba(0,0,0,0.1)]"></div>
            <div className="flex justify-between items-center gap-5 mt-6">
                <div className="flex justify-center items-center gap-4">
                    <button
                        className="w-9 h-9 rounded-lg bg-mono-sky-lighter flex justify-center items-center"
                        onClick={decreaseFoodCount}
                    >
                        <MinusIcon />
                    </button>
                    <span className="text-medium-16 font-semibold text-mono-ink-light">{foodCount}</span>
                    <button
                        className="w-9 h-9 rounded-lg bg-mono-sky-lighter flex justify-center items-center"
                        onClick={increaseFoodCount}
                    >
                        <PlusIcon />
                    </button>
                </div>
                <div className="w-[200px]">
                    <Button variant="wide-primary" fullWidth onClick={addProductToCart}>
                        Add To Cart
                    </Button>
                </div>
            </div>
        </div>
    );
};

export default AddToCart;

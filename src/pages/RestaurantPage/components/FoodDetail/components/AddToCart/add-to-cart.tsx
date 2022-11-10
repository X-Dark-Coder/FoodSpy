import React, { useState } from "react";
import { Button } from "components/shared";
import { ReactComponent as PlusIcon } from "assets/icons/Plus.svg";
import { ReactComponent as MinusIcon } from "assets/icons/Minus.svg";
import { useDispatch } from "react-redux";
import { addProduct, setShoppingCartRestaurant } from "store/actions/shopping-cart.actions";
import { useNavigate, useParams } from "react-router-dom";
import { TAddToCartProps } from "./types";
import { useTypedSelector } from "hooks/useTypedSelector";
import AlertModal from "components/shared/AlertModal/alert-modal";
import { ReactComponent as OrderSuccess } from "assets/img/order-success.svg";

const AddToCart: React.FC<TAddToCartProps> = ({ foodInstructions }) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [foodCount, setFoodCount] = useState(1);
    const [showInfoModal, setShowInfoModal] = useState(false);

    const { restaurantId, productId } = useParams<{ restaurantId: string; productId: string }>();
    const cartRestaurantId = useTypedSelector((state) => state.cart.restaurant);

    const increaseFoodCount = () => {
        if (foodCount !== 8) setFoodCount(foodCount + 1);
    };

    const decreaseFoodCount = () => {
        if (foodCount !== 1) setFoodCount(foodCount - 1);
    };

    const addProductToCart = () => {
        if (cartRestaurantId === null || cartRestaurantId === Number(restaurantId)) {
            dispatch(addProduct({ id: Number(productId)!, count: foodCount, instructions: foodInstructions }));
            if (cartRestaurantId === null) dispatch(setShoppingCartRestaurant(Number(restaurantId)));
            navigate("/restaurant/" + restaurantId);
        } else {
            setShowInfoModal(true);
        }
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

            <AlertModal
                title="Error"
                description="You cannot order from two restaurants, please clear or complete your shopping cart."
                picture={OrderSuccess}
                onButtonClick={() => setShowInfoModal(false)}
                buttonText="Ok"
                show={showInfoModal}
                onClose={() => setShowInfoModal(false)}
            />

        </div>
    );
};

export default AddToCart;

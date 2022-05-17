import { Modal, OrderTime, Rate, SlidingModal } from "components/shared";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation, useNavigate } from "react-router-dom";
import { TFoodDetail } from "./types";
import { AddToCart, FoodInformations, FoodIngredients, FoodInstructions, LikeButton } from "./components";
import { fakeFoods } from "api/foods";
import { calculateDiscount } from "store/reducers/utils";

const FoodDetail: React.FC<TFoodDetail> = ({ restaurantId, id }) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
    const [foodInstructions, setFoodInstructions] = useState("");

    const food = fakeFoods.find((food) => food.id === id);

    const navigateToRestaurantPage = () => navigate("/restaurant/" + restaurantId);

    const modalContent = (
        <div className="flex flex-col md:flex-row md:justify-center items-start p-4">
            <div className="w-[350px]">
                <div className="w-full h-[290px] relative rounded-2xl overflow-hidden flex justify-center items-center">
                    <LikeButton />
                    <img className="w-full absolute object-cover rounded-2xl" src={food?.picture} alt="food" />
                </div>
                <div className="w-full mt-9">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-mono-ink text-title-3 font-semibold max-w-[228px]">{food?.name}</h3>
                            <div className="flex justify-start items-center gap-4 mt-3">
                                <Rate stars={food?.rate ? food.rate : 1} />
                                <OrderTime time={food?.orderTime ? food.orderTime : 1} />
                            </div>
                        </div>
                        <div className="flex justify-end items-end flex-col">
                            <span className="text-title-1 text-primary font-bold">
                                ${food && food.price - calculateDiscount(food?.price, food?.discount)}
                            </span>
                            {food?.discount && (
                                <div className="mt-1 flex justify-center items-center">
                                    <span className="text-small-14 text-mono-ink-lightest line-through ">
                                        {food.price}
                                    </span>
                                    <span className="text-mono-ink-lighter text-small font-semibold ml-[6px]">
                                        -{food.discount} OFF
                                    </span>
                                </div>
                            )}
                        </div>
                    </div>
                    <p className="w-full text-medium text-mono-ink-lighter mt-3">{food?.description}</p>
                </div>
            </div>
            <div className="mt-3 md:mt-0 md:ml-4 w-full md:w-auto">
                {food && (
                    <div className="flex justify-start items-start gap-4 flex-col">
                        {food.ingredients.length !== 0 && <FoodIngredients ingredients={food.ingredients} />}
                        <FoodInformations informations={food.informations} />
                        <FoodInstructions
                            foodInstructions={foodInstructions}
                            setFoodInstructions={setFoodInstructions}
                        />
                    </div>
                )}
                <AddToCart foodInstructions={foodInstructions} />
            </div>
        </div>
    );

    return isMobile ? (
        <SlidingModal show={!!id && pathname.includes("product")} onClose={navigateToRestaurantPage}>
            {modalContent}
        </SlidingModal>
    ) : (
        <Modal show={!!id && pathname.includes("product")} onClose={navigateToRestaurantPage}>
            {modalContent}
        </Modal>
    );
};
export default FoodDetail;

import { Modal, OrderTime, Rate, SlidingModal } from "components/shared";
import { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { useLocation, useNavigate } from "react-router-dom";
import { TFoodDetail } from "./types";
import FoodDetailPicture from "assets/img/food-detail-picture.jpg";
import { AddToCart, FoodInformations, FoodIngredients, FoodInstructions, LikeButton } from "./components";

const FoodDetail: React.FC<TFoodDetail> = ({ restaurantId, id }) => {
    const { pathname } = useLocation();
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
    const [foodInstructions, setFoodInstructions] = useState("");
    const [isLiked, setIsLiked] = useState(false);

    const navigateToRestaurantPage = () => navigate("/restaurant/" + restaurantId);

    const modalContent = (
        <div className="flex flex-col md:flex-row md:justify-center items-start p-4">
            <div className="w-[350px]">
                <div className="w-full h-[290px] relative rounded-2xl overflow-hidden flex justify-center items-center">
                    <LikeButton isLiked={isLiked} setIsLiked={setIsLiked} />
                    <img className="w-full absolute object-cover rounded-2xl" src={FoodDetailPicture} alt="food" />
                </div>
                <div className="w-full mt-9">
                    <div className="flex justify-between items-start">
                        <div>
                            <h3 className="text-mono-ink text-title-3 font-semibold max-w-[228px]">
                                Authentic Japanese Ramen
                            </h3>
                            <div className="flex justify-start items-center gap-4 mt-3">
                                <Rate stars={4.7} />
                                <OrderTime time={34} />
                            </div>
                        </div>
                        <div className="flex justify-end items-end flex-col">
                            <span className="text-title-1 text-primary font-bold">$10</span>
                            <div className="mt-1 flex justify-center items-center">
                                <span className="text-small-14 text-mono-ink-lightest line-through ">$18</span>
                                <span className="text-mono-ink-lighter text-small font-semibold ml-[6px]">-75 OFF</span>
                            </div>
                        </div>
                    </div>
                    <p className="w-full text-medium text-mono-ink-lighter mt-3">
                        Lorem ipsum et dolor sit amet, and consectetur eadipiscing elit. Ametmo magna the cursus yum
                        dolor praesenta the pulvinar tristique the food.
                    </p>
                </div>
            </div>
            <div className="mt-3 md:mt-0 md:ml-4 w-full md:w-auto">
                <div>
                    <FoodIngredients />
                    <FoodInformations />
                    <FoodInstructions foodInstructions={foodInstructions} setFoodInstructions={setFoodInstructions} />
                </div>
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

import { Food } from "components";
import FoodImage1 from "assets/img/food-card-image-1.png";
import FoodImage2 from "assets/img/food-card-image-2.png";
import classNames from "classnames";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";

const PopularMenu: React.FC = () => {
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ query: "(max-width: 400px)" });

    const popularFoods = [
        {
            id: 43,
            name: "Salmon & Leek Dumplings",
            price: 26,
            discount: 30,
            rate: 4,
            orderTime: 45,
            picture: FoodImage1,
        },
        {
            id: 1,
            name: "Salmon & Leek Dumplings",
            price: 30,
            rate: 4.8,
            orderTime: 25,
            picture: FoodImage2,
        },
        {
            id: 2,
            name: "Salmon & Leek Dumplings",
            price: 42,
            discount: 45,
            rate: 3.9,
            orderTime: 28,
            picture: FoodImage1,
        },
        {
            id: 3,
            name: "Salmon & Leek Dumplings",
            price: 26,
            discount: 30,
            rate: 4,
            orderTime: 45,
            picture: FoodImage2,
        },
    ];

    const popularMenuContainerClasses = classNames("w-full mt-5 px-5", {
        "flex justify-start items-center overflow-x-scroll hide-scrollbar gap-5": !isMobile,
        "grid grid-cols-[repeat(auto-fill,_160px)] justify-evenly gap-4": isMobile,
    });

    return (
        <section className="w-full">
            <h3 className="text-mono-ink text-title-3 font-bold px-5">Popular Menu</h3>
            <div className={popularMenuContainerClasses}>
                {popularFoods.map((food) => (
                    <Food
                        name={food.name}
                        orderTime={food.orderTime}
                        picture={food.picture}
                        price={food.price}
                        rate={food.rate}
                        discount={food.discount}
                        variant="column"
                        key={food.id}
                        onClick={() => navigate("product/" + food.id)}
                    />
                ))}
            </div>
        </section>
    );
};

export default PopularMenu;

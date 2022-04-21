import { SubPage } from "layouts";
import { NavLink } from "react-router-dom";
import { ReactComponent as BackIcon } from "assets/icons/Back.svg";
import { ReactComponent as SearchIcon } from "assets/icons/Search.svg";
import FoodImage1 from "assets/img/food-card-image-1.png";
import FoodImage2 from "assets/img/food-card-image-2.png";
import { Food } from "components";

const PopularFoodSubPage: React.FC = () => {
    const popularFoods = [
        {
            id: 0,
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
        {
            id: 4,
            name: "Salmon & Leek Dumplings",
            price: 30,
            rate: 4.8,
            orderTime: 25,
            picture: FoodImage2,
        },
        {
            id: 5,
            name: "Salmon & Leek Dumplings",
            price: 42,
            discount: 45,
            rate: 3.9,
            orderTime: 28,
            picture: FoodImage1,
        },
        {
            id: 6,
            name: "Salmon & Leek Dumplings",
            price: 26,
            discount: 30,
            rate: 4,
            orderTime: 45,
            picture: FoodImage1,
        },
        {
            id: 7,
            name: "Salmon & Leek Dumplings",
            price: 30,
            rate: 4.8,
            orderTime: 25,
            picture: FoodImage2,
        },
        {
            id: 8,
            name: "Salmon & Leek Dumplings",
            price: 42,
            discount: 45,
            rate: 3.9,
            orderTime: 28,
            picture: FoodImage1,
        },
    ];

    return (
        <SubPage>
            <div className="w-full px-4 py-3 flex justify-between items-center">
                <NavLink to="/home">
                    <BackIcon style={{ width: 24 }} />
                </NavLink>
                <h3 className="text-large font-semibold text-mono-ink">Popular Food</h3>
                <SearchIcon style={{ width: 24 }} />
            </div>

            <div className="mt-6 w-full grid grid-cols-[repeat(auto-fill,_335px)] gap-5 px-4 py-2 justify-evenly">
                {popularFoods.map((food) => (
                    <Food
                        name={food.name}
                        orderTime={food.orderTime}
                        picture={food.picture}
                        price={food.price}
                        rate={food.rate}
                        discount={food.discount}
                        variant="row"
                        key={food.id}
                    />
                ))}
            </div>
        </SubPage>
    );
};

export default PopularFoodSubPage;

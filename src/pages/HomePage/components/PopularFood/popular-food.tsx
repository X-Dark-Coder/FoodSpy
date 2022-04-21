import { Food } from "components";
import { SeeAll } from "components/shared";
import FoodImage1 from "assets/img/food-card-image-1.png";
import FoodImage2 from "assets/img/food-card-image-2.png";

const PopularFood: React.FC = () => {
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
        <section className="w-full mt-8">
            <div className="w-full flex justify-between items-center px-5">
                <h3 className="text-mono-ink text-title-3 font-bold">Popular Food</h3>
                <SeeAll link="/popular-food" />
            </div>
            <div className="w-full flex gap-4 justify-start items-center px-5 py-3 mt-3 overflow-x-scroll hide-scrollbar">
                {popularFoods.map((food) => (
                    <Food
                        variant="column"
                        name={food.name}
                        orderTime={food.orderTime}
                        price={food.price}
                        rate={food.rate}
                        discount={food.discount}
                        picture={food.picture}
                    />
                ))}
            </div>
        </section>
    );
};

export default PopularFood;

import { useState } from "react";
import { TabMenu } from "./components";
import { TTabMenuItem } from "./components/TabMenu/types";
import FoodImage1 from "assets/img/food-card-image-1.png";
import FoodImage2 from "assets/img/food-card-image-2.png";
import { Food } from "components";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";

const RightFromOvensMenu: React.FC = () => {
    const isMobile = useMediaQuery({ query: "(max-width : 500px)" });
    const [activeTab, setActiveTab] = useState(0);

    const tabs: TTabMenuItem[] = [
        { id: 34, name: "All Menu" },
        { id: 1, name: "Breakfast" },
        { id: 2, name: "Lunch" },
        { id: 3, name: "Beverage" },
        { id: 4, name: "Lunch" },
        { id: 5, name: "Beverage" },
    ];

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

    const tabMenusContainerClasses = classNames("mt-6 px-5 w-full flex justify-start items-center gap-5", {
        "overflow-x-scroll hide-scrollbar": !isMobile,
        "flex-col": isMobile,
    });

    return (
        <section className="w-full mt-5">
            <h3 className="text-mono-ink text-title-3 font-bold px-5">Right From Oven's Menu</h3>
            <div className="mt-5">
                <TabMenu tabs={tabs} active={activeTab} setActive={setActiveTab} />
                <div className={tabMenusContainerClasses}>
                    {popularFoods.map((food) => (
                        <Food
                            name={food.name}
                            orderTime={food.orderTime}
                            picture={food.picture}
                            price={food.price}
                            rate={food.rate}
                            discount={food.discount}
                            variant={isMobile ? "row" : "column"}
                            fullWidth={isMobile}
                            key={food.id}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default RightFromOvensMenu;

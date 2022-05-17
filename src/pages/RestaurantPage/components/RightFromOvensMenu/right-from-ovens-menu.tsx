import { useState } from "react";
import { TabMenu } from "./components";
import { TTabMenuItem } from "./components/TabMenu/types";
import { Food } from "components";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";
import { fakeFoods, fakeFoods as foods } from "api/foods";
import { useParams } from "react-router-dom";
import { fakeRestaurants } from "api/restaurants";

const RightFromOvensMenu: React.FC = () => {
    const isMobile = useMediaQuery({ query: "(max-width : 500px)" });
    const [activeTab, setActiveTab] = useState(1);
    const { restaurantId } = useParams<{ restaurantId: string }>();
    const restaurant = fakeRestaurants.find((restaurant) => restaurant.id === Number(restaurantId))!;

    const tabs: TTabMenuItem[] = restaurant.menu.map((menu, index) => ({
        id: index + 1,
        name: menu.title,
        foods: menu.foods,
    }));

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
                    {restaurant.menu
                        .find((m, indx) => indx + 1 === activeTab)
                        ?.foods.map((food) => (
                            <Food
                                id={food.id}
                                name={food.name}
                                orderTime={food.orderTime}
                                picture={food.picture}
                                price={food.price}
                                rate={food.rate}
                                discount={food.discount}
                                variant={isMobile ? "row" : "column"}
                                fullWidth={isMobile}
                                key={food.id}
                                restaurant={food.restaurant}
                            />
                        ))}
                </div>
            </div>
        </section>
    );
};

export default RightFromOvensMenu;

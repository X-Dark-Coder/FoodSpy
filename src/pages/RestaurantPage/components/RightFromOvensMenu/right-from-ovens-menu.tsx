import { useState } from "react";
import { TabMenu } from "./components";
import { TTabMenuItem } from "./components/TabMenu/types";
import { Food } from "components";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";
import { useParams } from "react-router-dom";
import { fakeRestaurants } from "api/restaurants";
import { AnimatePresence, motion, Variant, Variants } from "framer-motion";

const RightFromOvensMenu: React.FC = () => {
    const isMobile = useMediaQuery({ query: "(max-width : 500px)" });
    const [activeTab, setActiveTab] = useState(1);
    const { restaurantId } = useParams<{ restaurantId: string }>();
    const restaurant = fakeRestaurants.find((restaurant) => restaurant.id === Number(restaurantId))!;

    const tabs: TTabMenuItem[] = restaurant.menu
        .filter(menu => menu.foods.filter(food => food.restaurant.includes(Number(restaurantId))).length !== 0)
        .map((menu, index) => ({
            id: index + 1,
            name: menu.title
        }));

    const tabMenusContainerClasses = classNames("mt-6 px-5 w-full flex justify-start items-center gap-5", {
        "overflow-x-scroll pb-3 scrollbar-custom-white": !isMobile,
        "flex-col": isMobile
    });

    const menuFoodsVariants: Variants = {
        hide: {
            scale: 0.9,
            opacity: 0,
            transition: {
                opacity: {
                    duration: 0.15
                },
                scale: {
                    duration: 0.25
                }
            }
        },
        show: {
            scale: 1,
            opacity: 1
        }
    };

    const renderMenus = () => {
        return restaurant.menu
            .filter(menu => tabs.find(tab => tab.name === menu.title))
            .map(({ foods }, index) => {
                if (index + 1 === activeTab) {
                    return foods.filter(food => food.restaurant.includes(Number(restaurantId))).map((food) => (
                        <motion.div
                            variants={menuFoodsVariants}
                            initial="hide"
                            animate="show"
                            exit="hide"
                            key={food.id}
                            className={isMobile ? "w-full" : ""}
                        >
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
                                restaurant={food.restaurant}
                                navigateTo={`/restaurant/${Number(restaurantId)}/product/${food.id}`}
                            />
                        </motion.div>
                    ));
                }
            });
    };

    return (
        <section className="w-full mt-5">
            <h3 className="text-mono-ink text-title-3 font-bold px-5">Right From Oven's Menu</h3>
            <div className="mt-5">
                <TabMenu tabs={tabs} active={activeTab} setActive={setActiveTab} />
                <div className={tabMenusContainerClasses}>
                    <AnimatePresence exitBeforeEnter>{renderMenus()}</AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default RightFromOvensMenu;

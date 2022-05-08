import { TShowSearchResultProps } from "./types";
import { ReactComponent as LoadingSpinner } from "assets/img/loading-spinner.svg";
import { Food, Restaurant } from "components";
import { motion, AnimatePresence } from "framer-motion";
import { searchResultVariants } from "pages/SearchPage/search-page.constants";

const ShowSearchResult: React.FC<TShowSearchResultProps> = ({ result, type }) => {
    const renderResultByType = () => {
        if (result) {
            if (type === "food") {
                return (
                    <motion.div
                        key={1}
                        variants={searchResultVariants}
                        initial="hide"
                        animate="show"
                        exit="hide"
                        className="mt-6 w-full grid grid-cols-[repeat(auto-fill,_335px)] gap-5 justify-evenly px-4 pb-[100px] pt-2 md:pb-2"
                    >
                        {result.foods.map((food) => {
                            return (
                                <Food
                                    id={food.id}
                                    name={food.name}
                                    orderTime={food.orderTime}
                                    picture={food.picture}
                                    price={food.price}
                                    rate={food.rate}
                                    discount={food.discount}
                                    variant="row"
                                    restaurant={food.restaurant}
                                />
                            );
                        })}
                    </motion.div>
                );
            } else {
                return (
                    <motion.div
                        key={2}
                        variants={searchResultVariants}
                        initial="hide"
                        animate="show"
                        exit="hide"
                        className="mt-6 w-full grid grid-cols-[repeat(auto-fill,_335px)] gap-5 px-4 pb-[100px] pt-2 md:pb-2 justify-evenly"
                    >
                        {result.restaurants.map((restaurant) => {
                            return (
                                <Restaurant
                                    id={restaurant.id}
                                    categories={restaurant.categories}
                                    distance={restaurant.distance}
                                    name={restaurant.name}
                                    openAt={restaurant.openAt}
                                    picture={restaurant.picture}
                                    rate={restaurant.rate}
                                    closed={restaurant.closed}
                                />
                            );
                        })}
                    </motion.div>
                );
            }
        }
    };

    return (
        <div>
            <AnimatePresence exitBeforeEnter>
                {result ? (
                    <motion.div key={1} variants={searchResultVariants} initial="hide" animate="show" exit="hide">
                        <AnimatePresence exitBeforeEnter>{renderResultByType()}</AnimatePresence>
                    </motion.div>
                ) : (
                    <motion.div
                        key={2}
                        variants={searchResultVariants}
                        initial="hide"
                        animate="show"
                        exit="hide"
                        className="w-full h-[calc(100vh_-_86px)] flex justify-center items-center"
                    >
                        <LoadingSpinner className="w-[70px] h-[70px]" />
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default ShowSearchResult;

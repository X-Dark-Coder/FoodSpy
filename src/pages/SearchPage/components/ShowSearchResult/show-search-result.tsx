import { TShowSearchResultProps } from "./types";
import { ReactComponent as LoadingSpinner } from "assets/img/loading-spinner.svg";
import { Food, Restaurant } from "components";
import { motion, AnimatePresence } from "framer-motion";
import { searchResultVariants } from "pages/SearchPage/search-page.constants";
import { useMediaQuery } from "react-responsive";

const ShowSearchResult: React.FC<TShowSearchResultProps> = ({ result, type }) => {
    const isBigScreen = useMediaQuery({ query: "(min-width : 1440px)" });
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
                        className="mt-6 w-full grid grid-cols-[1fr] bp680:grid-cols-[repeat(2,1fr)] md:grid-cols-[1fr] bp960:grid-cols-[repeat(2,1fr)] bp1070:grid-cols-[repeat(2,1fr)] xl:grid-cols-[repeat(3,1fr)] 2xl:grid-cols-[repeat(auto-fill,335px)] gap-5 justify-evenly px-4 pb-[100px] pt-2 md:pb-2"
                    >
                        {result.foods.map((food) => {
                            return (
                                <Food
                                    key={food.id}
                                    id={food.id}
                                    name={food.name}
                                    orderTime={food.orderTime}
                                    picture={food.picture}
                                    price={food.price}
                                    rate={food.rate}
                                    discount={food.discount}
                                    variant="row"
                                    restaurant={food.restaurant}
                                    fullWidth={!isBigScreen}
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
                        className="mt-6 w-full grid grid-cols-[1fr] bp620:grid-cols-[repeat(2,1fr)] md:grid-cols-[1fr] bp830:grid-cols-[repeat(2,1fr)] bp1070:grid-cols-[repeat(2,1fr)] xl:grid-cols-[repeat(3,1fr)] 2xl:grid-cols-[repeat(auto-fill,_335px)] gap-5 px-4 pb-[100px] pt-2 md:pb-2 justify-evenly"
                    >
                        {result.restaurants.map((restaurant) => {
                            return (
                                <Restaurant
                                    key={restaurant.id}
                                    id={restaurant.id}
                                    categories={restaurant.categories}
                                    distance={restaurant.distance}
                                    name={restaurant.name}
                                    openAt={restaurant.openAt}
                                    picture={restaurant.picture}
                                    rate={restaurant.rate}
                                    closed={restaurant.closed}
                                    fullWidth={!isBigScreen}
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

import { SubPage } from "layouts";
import { fakeFoods as popularFoods } from "api/foods";
import { Food } from "components";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";

const PopularFoodSubPage: React.FC = () => {
    const isMobile = useMediaQuery({ query: "(max-width : 500px)" });

    const foodsContainerClasses = classNames("mt-6 w-full gap-5 px-4 pb-10 pt-2",{
        "grid grid-cols-[repeat(auto-fill,_160px)] justify-evenly" : !isMobile,
        "flex flex-col" : isMobile
    });

    return (
        <SubPage backLink="/home" title="Popular Food">
            <div className={foodsContainerClasses}>
                {popularFoods.map((food) => (
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
                        key={food.id}
                    />
                ))}
            </div>
        </SubPage>
    );
};

export default PopularFoodSubPage;

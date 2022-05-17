import { Food } from "components";
import classNames from "classnames";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { fakeFoods as popularFoods } from "api/foods";

const PopularMenu: React.FC = () => {
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ query: "(max-width: 400px)" });

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
                        id={food.id}
                        name={food.name}
                        orderTime={food.orderTime}
                        picture={food.picture}
                        price={food.price}
                        rate={food.rate}
                        discount={food.discount}
                        variant="column"
                        key={food.id}
                        restaurant={food.restaurant}
                    />
                ))}
            </div>
        </section>
    );
};

export default PopularMenu;

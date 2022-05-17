import { TFoodIngredientsProps } from "./types";

const FoodIngredients: React.FC<TFoodIngredientsProps> = ({ingredients}) => {

    return (
        <div>
            <h4 className="text-mono-ink-light font-semibold text-medium-16">Food Ingredients</h4>
            <div className="flex justify-start items-center gap-3 flex-wrap mt-[14px]">
                {ingredients.map((ingredient,index) => {
                    return (
                        <div
                            key={index+1}
                            className="h-[36px] w-[36px] relative flex justify-center items-center"
                        >
                            <img
                                className="object-cover absolute"
                                src={ingredient.picture}
                                alt={ingredient.title}
                                title={ingredient.title}
                            />
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default FoodIngredients;

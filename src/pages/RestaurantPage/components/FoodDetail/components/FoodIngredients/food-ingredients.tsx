import FoodIngredientPic1 from "assets/img/food-ingredient-1.jpg";
import FoodIngredientPic2 from "assets/img/food-ingredient-2.jpg";
import FoodIngredientPic3 from "assets/img/food-ingredient-3.jpg";
import FoodIngredientPic4 from "assets/img/food-ingredient-4.jpg";
import FoodIngredientPic5 from "assets/img/food-ingredient-5.jpg";

const FoodIngredients: React.FC = () => {
    const ingredients = [
        { id: 0, title: "Food1", picture: FoodIngredientPic1 },
        { id: 1, title: "Food2", picture: FoodIngredientPic2 },
        { id: 2, title: "Food3", picture: FoodIngredientPic3 },
        { id: 3, title: "Food4", picture: FoodIngredientPic4 },
        { id: 4, title: "Food5", picture: FoodIngredientPic5 },
    ];

    return (
        <div>
            <h4 className="text-mono-ink-light font-semibold text-medium-16">Food Ingredients</h4>
            <div className="flex justify-start items-center gap-3 flex-wrap mt-[14px]">
                {ingredients.map((ingredient) => {
                    return (
                        <div
                            key={ingredient.id}
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

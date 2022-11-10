import { FoodCategory } from "components";
import { SeeAll } from "components/shared";
import FoodImage1 from "assets/img/categories/Salad.png";
import FoodImage2 from "assets/img/categories/Sandwich.png";
import FoodImage3 from "assets/img/categories/Chicken.png";
import FoodImage4 from "assets/img/categories/Ramen.png";
import FoodImage5 from "assets/img/categories/Seafood.png";
import FoodImage6 from "assets/img/categories/Omelette.png";

const AllCategories: React.FC = () => {
    const categories = [
        {
            id: 0,
            title: "Salad",
            from: 29,
            menuCount: 23,
            picture: FoodImage1,
        },
        {
            id: 1,
            title: "Sandwich",
            from: 23,
            menuCount: 15,
            picture: FoodImage2,
        },
        {
            id: 2,
            title: "Chicken",
            from: 47,
            menuCount: 4,
            picture: FoodImage3,
        },
        {
            id: 3,
            title: "Ramen",
            from: 30,
            menuCount: 11,
            picture: FoodImage4,
        },
        {
            id: 4,
            title: "Seafood",
            from: 29,
            menuCount: 23,
            picture: FoodImage5,
        },
        {
            id: 5,
            title: "Omelette",
            from: 23,
            menuCount: 15,
            picture: FoodImage6,
        },
        {
            id: 6,
            title: "Salad",
            from: 47,
            menuCount: 4,
            picture: FoodImage1,
        },
        {
            id: 7,
            title: "Sandwich",
            from: 30,
            menuCount: 11,
            picture: FoodImage2,
        },
    ];

    return (
        <section className="w-full">
            <div className="w-full flex justify-between items-center px-5">
                <h3 className="text-mono-ink text-title-3 font-bold">All Categories</h3>
                <SeeAll link="/all-categories"/>
            </div>
            <div className="w-full flex gap-4 justify-start items-center px-5 py-3 mt-3 overflow-x-scroll pb-3 hover:scrollbar-custom scrollbar-custom-hide">
                {categories.map((category) => (
                    <FoodCategory
                        key={category.id}
                        variant="small"
                        title={category.title}
                        from={category.from}
                        picture={category.picture}
                        menuCount={category.menuCount}
                    />
                ))}
            </div>
        </section>
    );
};

export default AllCategories;

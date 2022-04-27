import { FoodCategory } from "components";
import { SeeAll } from "components/shared";
import FoodImage1 from "assets/img/Salad.png";
import FoodImage2 from "assets/img/Noodle.png";

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
            title: "Salad",
            from: 23,
            menuCount: 15,
            picture: FoodImage2,
        },
        {
            id: 2,
            title: "Salad",
            from: 47,
            menuCount: 4,
            picture: FoodImage1,
        },
        {
            id: 3,
            title: "Salad",
            from: 30,
            menuCount: 11,
            picture: FoodImage1,
        },
        {
            id: 4,
            title: "Salad",
            from: 29,
            menuCount: 23,
            picture: FoodImage2,
        },
        {
            id: 5,
            title: "Salad",
            from: 23,
            menuCount: 15,
            picture: FoodImage1,
        },
        {
            id: 6,
            title: "Salad",
            from: 47,
            menuCount: 4,
            picture: FoodImage2,
        },
        {
            id: 7,
            title: "Salad",
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
            <div className="w-full flex gap-4 justify-start items-center px-5 py-3 mt-3 overflow-x-scroll hide-scrollbar">
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

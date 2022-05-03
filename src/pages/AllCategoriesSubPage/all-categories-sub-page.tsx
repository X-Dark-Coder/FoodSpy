import { SubPage } from "layouts";
import { ReactComponent as BackIcon } from "assets/icons/Back.svg";
import { ReactComponent as SearchIcon } from "assets/icons/Search.svg";
import FoodImage1 from "assets/img/Salad.png";
import FoodImage2 from "assets/img/Noodle.png";
import { FoodCategory } from "components";
import { NavLink } from "react-router-dom";

const AllCategoriesSubPage: React.FC = () => {
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
        {
            id: 8,
            title: "Salad",
            from: 29,
            menuCount: 23,
            picture: FoodImage1,
        },
        {
            id: 9,
            title: "Salad",
            from: 23,
            menuCount: 15,
            picture: FoodImage2,
        },
        {
            id: 10,
            title: "Salad",
            from: 47,
            menuCount: 4,
            picture: FoodImage1,
        },
        {
            id: 11,
            title: "Salad",
            from: 30,
            menuCount: 11,
            picture: FoodImage1,
        },
        {
            id: 12,
            title: "Salad",
            from: 29,
            menuCount: 23,
            picture: FoodImage2,
        },
        {
            id: 13,
            title: "Salad",
            from: 23,
            menuCount: 15,
            picture: FoodImage1,
        },
        {
            id: 14,
            title: "Salad",
            from: 47,
            menuCount: 4,
            picture: FoodImage2,
        },
        {
            id: 15,
            title: "Salad",
            from: 30,
            menuCount: 11,
            picture: FoodImage2,
        },
    ];

    return (
        <SubPage backLink="/home" title="All Categories">
            <div className="mt-6 w-full grid grid-cols-[repeat(auto-fill,_157px)] gap-5 px-4 py-2 justify-evenly">
                {categories.map((category) => (
                    <FoodCategory
                        key={category.id}
                        variant="big"
                        title={category.title}
                        from={category.from}
                        picture={category.picture}
                        menuCount={category.menuCount}
                    />
                ))}
            </div>
        </SubPage>
    );
};

export default AllCategoriesSubPage;

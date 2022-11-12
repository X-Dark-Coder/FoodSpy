import { SubPage } from "layouts";
import FoodImage1 from "assets/img/Salad.png";
import FoodImage2 from "assets/img/Noodle.png";
import { FoodCategory } from "components";
import {categories} from "api/categories";

const AllCategoriesSubPage: React.FC = () => {

    return (
        <SubPage backLink="/home" title="All Categories">
            <div className="mt-6 w-full grid grid-cols-[repeat(auto-fill,_157px)] gap-5 px-4 pt-2 pb-10 justify-evenly">
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

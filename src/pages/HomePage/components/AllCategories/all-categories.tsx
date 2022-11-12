import { FoodCategory } from "components";
import { SeeAll } from "components/shared";
import {categories} from "api/categories";

const AllCategories: React.FC = () => {

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

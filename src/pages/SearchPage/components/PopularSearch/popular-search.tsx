import { useNavigate } from "react-router-dom";
import PopularSearchItem from "./popular-search-item";
import { TPopularSearchItem, TPopularSearchProps } from "./types";
import { fakeRestaurants as restaurants } from "api/restaurants";
import { fakeFoods as foods } from "api/foods";
import { motion } from "framer-motion";
import { useDispatch } from "react-redux";
import { addSearchHistory } from "store/actions/user.actions";

const PopularSearch: React.FC<TPopularSearchProps> = ({ setSearchResult }) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const popularSearches: TPopularSearchItem[] = [
        {
            id: 0,
            text: "Chicken",
        },
        {
            id: 1,
            text: "Burger",
        },
        {
            id: 2,
            text: "Snack",
        },
        {
            id: 3,
            text: "Taco",
        },
        {
            id: 4,
            text: "Pizza",
        },
        {
            id: 5,
            text: "Sandwich",
        },
        {
            id: 6,
            text: "Steak",
        }
    ];

    const fakeSearchApi = () => {
        setTimeout(() => {
            setSearchResult({
                foods,
                restaurants,
            });
        }, 2000);
    };

    const onPopularSearchItemClicked = (searchText: string) => {
        setSearchResult(null);
        navigate("/search/" + searchText);
        fakeSearchApi();
        dispatch(addSearchHistory(searchText));
    };

    return (
        <motion.section layout className="w-full">
            <div className="flex justify-start items-center mt-6 w-full">
                <h3 className="text-mono-ink text-title-3 font-semibold">Popular Search</h3>
            </div>
            <div className="w-full flex justify-start items-center gap-3 mt-5 flex-wrap">
                {popularSearches.map(({ id, text }) => (
                    <PopularSearchItem key={id} text={text} onClick={() => onPopularSearchItemClicked(text)} />
                ))}
            </div>
        </motion.section>
    );
};

export default PopularSearch;

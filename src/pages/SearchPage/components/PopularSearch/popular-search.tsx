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
            text: "Test 1",
        },
        {
            id: 1,
            text: "Test 12",
        },
        {
            id: 2,
            text: "Test 123",
        },
        {
            id: 3,
            text: "Test 1234234",
        },
        {
            id: 4,
            text: "Test 12345",
        },
        {
            id: 5,
            text: "Test 12341234214",
        },
        {
            id: 6,
            text: "Test 12214",
        },
        {
            id: 7,
            text: "Teasdfst 1sdf23",
        },
        {
            id: 8,
            text: "Te242st 1234",
        },
        {
            id: 9,
            text: "Test 12342345",
        },
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
        dispatch(addSearchHistory(searchText));
        navigate("/search/" + searchText);
        fakeSearchApi();
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

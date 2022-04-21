import { useMediaQuery } from "react-responsive";
import { ReactComponent as SearchIcon } from "assets/icons/Search.svg";

const SearchBox: React.FC = () => {
    const isTablet = useMediaQuery({query: "(min-width: 1024px)"});
    const isMobile = useMediaQuery({query: "(min-width: 768px)"});

    return (
        <div className="ml-1 flex justify-start items-center">
            <SearchIcon />
            {isTablet && <input className="ml-3 text-small" type="text" placeholder="what do you want to eat ?" />}
        </div>
    );
};

export default SearchBox;

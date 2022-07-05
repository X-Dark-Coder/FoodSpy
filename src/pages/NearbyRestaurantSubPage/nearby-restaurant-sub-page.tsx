import RestaurantImage from "assets/img/restaurant1.jpg";
import { SubPage } from "layouts";
import { NavLink } from "react-router-dom";
import { ReactComponent as BackIcon } from "assets/icons/Back.svg";
import { ReactComponent as SearchIcon } from "assets/icons/Search.svg";
import { Restaurant } from "components";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";

const NearbyRestaurantSubPage: React.FC = () => {
    const isTablet = useMediaQuery({ query: "(max-width : 1300px)" });
    const isBigScreen = useMediaQuery({ query: "(min-width : 1440px)" });

    const restaurants = [
        {
            id: 0,
            name: "Fast Food X",
            categories: ["Cake", "Bread"],
            distance: 1.8,
            openAt: "10:00 AM",
            rate: 4.3,
            picture: RestaurantImage,
            closed: false
        },
        {
            id: 1,
            name: "Fast Food X",
            categories: ["Cake", "Bread"],
            distance: 1.8,
            openAt: "10:00 AM",
            rate: 4.3,
            picture: RestaurantImage,
            closed: true
        },
        {
            id: 2,
            name: "Fast Food X",
            categories: ["Cake", "Bread"],
            distance: 1.8,
            openAt: "10:00 AM",
            rate: 4.3,
            picture: RestaurantImage,
            closed: true
        },
        {
            id: 3,
            name: "Fast Food X",
            categories: ["Cake", "Bread"],
            distance: 1.8,
            openAt: "10:00 AM",
            rate: 4.3,
            picture: RestaurantImage,
            closed: false
        },
        {
            id: 4,
            name: "Fast Food X",
            categories: ["Cake", "Bread"],
            distance: 1.8,
            openAt: "10:00 AM",
            rate: 4.3,
            picture: RestaurantImage,
            closed: false
        }
    ];
    // grid grid-cols-[1fr_minmax(auto,720px)_1fr] items-stretch

    //     'sm': '640px',
    //     // => @media (min-width: 640px) { ... }
    //
    //     'md': '768px',
    //     // => @media (min-width: 768px) { ... }
    //
    //     'lg': '1024px',
    //     // => @media (min-width: 1024px) { ... }
    //
    //     'xl': '1280px',
    //     // => @media (min-width: 1280px) { ... }
    //
    //     '2xl': '1536px',
    //     // => @media (min-width: 1536px) { ... }

    return (
        <SubPage backLink="/home" title="Nearby Restaurant">
            <div
                className="mt-6 w-full grid gap-5 grid-cols-[1fr] bp620:grid-cols-[repeat(2,1fr)] md:grid-cols-[1fr] bp830:grid-cols-[repeat(2,1fr)] bp1070:grid-cols-[repeat(2,1fr)] xl:grid-cols-[repeat(3,1fr)] 2xl:grid-cols-[repeat(auto-fill,_335px)] pb-10 justify-evenly px-4 pt-2">
                {restaurants.map((restaurant) => (
                    <Restaurant
                        id={restaurant.id}
                        categories={restaurant.categories}
                        distance={restaurant.distance}
                        name={restaurant.name}
                        openAt={restaurant.openAt}
                        rate={restaurant.rate}
                        picture={restaurant.picture}
                        closed={restaurant.closed}
                        fullWidth={!isBigScreen}
                    />
                ))}
            </div>
        </SubPage>
    );
};

export default NearbyRestaurantSubPage;

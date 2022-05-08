import RestaurantImage from "assets/img/restaurant1.jpg";
import { SubPage } from "layouts";
import { NavLink } from "react-router-dom";
import { ReactComponent as BackIcon } from "assets/icons/Back.svg";
import { ReactComponent as SearchIcon } from "assets/icons/Search.svg";
import { Restaurant } from "components";

const NearbyRestaurantSubPage: React.FC = () => {
    const restaurants = [
        {
            id: 0,
            name: "Fast Food X",
            categories: ["Cake", "Bread"],
            distance: 1.8,
            openAt: "10:00 AM",
            rate: 4.3,
            picture: RestaurantImage,
            closed: false,
        },
        {
            id: 1,
            name: "Fast Food X",
            categories: ["Cake", "Bread"],
            distance: 1.8,
            openAt: "10:00 AM",
            rate: 4.3,
            picture: RestaurantImage,
            closed: true,
        },
        {
            id: 2,
            name: "Fast Food X",
            categories: ["Cake", "Bread"],
            distance: 1.8,
            openAt: "10:00 AM",
            rate: 4.3,
            picture: RestaurantImage,
            closed: true,
        },
        {
            id: 3,
            name: "Fast Food X",
            categories: ["Cake", "Bread"],
            distance: 1.8,
            openAt: "10:00 AM",
            rate: 4.3,
            picture: RestaurantImage,
            closed: false,
        },
        {
            id: 4,
            name: "Fast Food X",
            categories: ["Cake", "Bread"],
            distance: 1.8,
            openAt: "10:00 AM",
            rate: 4.3,
            picture: RestaurantImage,
            closed: false,
        },
    ];

    return (
        <SubPage backLink="/home" title="Nearby Restaurant">
            <div className="mt-6 w-full grid grid-cols-[repeat(auto-fill,_335px)] gap-5 pb-10 justify-evenly px-4 pt-2">
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
                    />
                ))}
            </div>
        </SubPage>
    );
};

export default NearbyRestaurantSubPage;

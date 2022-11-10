import RestaurantImage from "assets/img/restaurant1.jpg";
import { SubPage } from "layouts";
import { Restaurant } from "components";
import { useMediaQuery } from "react-responsive";
import {fakeRestaurants} from "api/restaurants";

const NearbyRestaurantSubPage: React.FC = () => {
    const isTablet = useMediaQuery({ query: "(max-width : 1300px)" });
    const isBigScreen = useMediaQuery({ query: "(min-width : 1440px)" });

    return (
        <SubPage backLink="/home" title="Nearby Restaurant">
            <div
                className="mt-6 w-full grid gap-5 grid-cols-[1fr] bp620:grid-cols-[repeat(2,1fr)] md:grid-cols-[1fr] bp830:grid-cols-[repeat(2,1fr)] bp1070:grid-cols-[repeat(2,1fr)] xl:grid-cols-[repeat(3,1fr)] 2xl:grid-cols-[repeat(auto-fill,_335px)] pb-10 justify-evenly px-4 pt-2">
                {fakeRestaurants.map((restaurant) => (
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

import MediaQuery, { useMediaQuery } from "react-responsive";
import { Restaurant } from "components";
import { SeeAll } from "components/shared";
import classNames from "classnames";
import { fakeRestaurants as restaurants } from "api/restaurants";

const NearbyRestaurant: React.FC = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 400px)" });
    const restaurantsContainerClasses = classNames("w-full px-5 py-3 mt-3", {
        "flex justify-start items-center overflow-x-scroll pb-3 scrollbar-custom gap-5": !isMobile,
        "grid justify-evenly gap-5 grid-cols-[1fr]": isMobile,
    });

    return (
        <section className="w-full mt-8">
            <div className="w-full flex justify-between items-center px-5">
                <h3 className="text-mono-ink text-title-3 font-bold">Nearby Restaurant</h3>
                <MediaQuery minWidth={401}>
                    <SeeAll link="/nearby-restaurant" />
                </MediaQuery>
            </div>
            <div className={restaurantsContainerClasses}>
                {restaurants.map((restaurant) => (
                    <Restaurant
                        key={restaurant.id}
                        id={restaurant.id}
                        categories={restaurant.categories}
                        distance={restaurant.distance}
                        name={restaurant.name}
                        openAt={restaurant.openAt}
                        rate={restaurant.rate}
                        picture={restaurant.picture}
                        closed={restaurant.closed}
                        fullWidth={isMobile}
                    />
                ))}
            </div>
            <MediaQuery maxWidth={400}>
                <div className="w-full flex justify-end items-center px-5">
                    <SeeAll link="/nearby-restaurant" />
                </div>
            </MediaQuery>
        </section>
    );
};

export default NearbyRestaurant;

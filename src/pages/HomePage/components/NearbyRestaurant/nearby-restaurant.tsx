import MediaQuery, { useMediaQuery } from "react-responsive";
import RestaurantImage from "assets/img/restaurant1.jpg";
import { Restaurant } from "components";
import { SeeAll } from "components/shared";
import classNames from "classnames";

const NearbyRestaurant: React.FC = () => {    
    const isMobile = useMediaQuery({ query: "(max-width: 400px)" });

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

    const restaurantsContainerClasses = classNames("w-full px-5 py-3 mt-3", {
        "flex justify-start items-center overflow-x-scroll hide-scrollbar gap-5": !isMobile,
        "grid grid-cols-[repeat(auto-fill,_335px)] justify-evenly gap-5": isMobile,
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
            <MediaQuery maxWidth={400}>
                <div className="w-full flex justify-end items-center px-5">
                    <SeeAll link="/nearby-restaurant" />
                </div>
            </MediaQuery>
        </section>
    );
};

export default NearbyRestaurant;

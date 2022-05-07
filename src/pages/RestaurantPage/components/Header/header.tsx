import RestaurantWallpaper from "assets/img/restaurant-wallpaper.jpg";
import { ReactComponent as BackIcon } from "assets/icons/BackWhite.svg";
import { ReactComponent as SearchIcon } from "assets/icons/SearchWhite.svg";
import { ReactComponent as InfoIcon } from "assets/icons/InfoWhite.svg";
import { ReactComponent as PickupIcon } from "assets/icons/Pickup.svg";
import { ReactComponent as FreeDeliveryIcon } from "assets/icons/Free Delivery.svg";
import { Rate } from "components/shared";
import { useMediaQuery } from "react-responsive";
import HeaderLabel from "./header-label";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
    const categories = ["Hotdog", "Berger"];
    const labels = [
        { icon: "test", name: "Test" },
        { icon: "test", name: "Test2" },
    ];

    const renderCategories = () => {
        return categories.map((category, index) => {
            if (index + 1 !== categories.length) return category + ", ";
            else return category;
        });
    };

    return (
        <header className="w-full h-[230px] relative">
            <img className="object-cover w-full h-full absolute top-0" src={RestaurantWallpaper} alt="restaurant" />
            <div className="flex justify-between items-center absolute top-0 w-full p-4">
                <button onClick={() => navigate("/home")}>
                    <BackIcon className="w-6 h-6" />
                </button>
                <button className="flex justify-end items-center gap-3" onClick={() => navigate("/search")}>
                    <SearchIcon className="w-6 h-6" /> <InfoIcon className="w-6 h-6" />
                </button>
            </div>
            <div className="absolute bottom-0 p-4 pb-8 md:pb-4">
                <h1 className="text-title-2 font-bold text-white md:text-[32px]">Express Ramen Shop</h1>
                <div className="flex justify-start items-center gap-3 mt-2 md:mt-4">
                    <Rate stars={4.5} count={300} size={isMobile ? "sm" : "md"} white />
                    <span className="text-small md:text-medium-16 text-mono-sky-lightest">{renderCategories()}</span>
                </div>
                <div className="flex justify-start items-center flex-wrap mt-4 gap-[5px]">
                    <HeaderLabel icon={PickupIcon} text="Pickup" />
                    <HeaderLabel icon={FreeDeliveryIcon} text="Free Delivery" />
                </div>
            </div>
        </header>
    );
};

export default Header;

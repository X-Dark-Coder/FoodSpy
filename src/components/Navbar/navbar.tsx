import NavbarItem from "./navbar-item";
import { ReactComponent as HomeIconActive } from "assets/icons/Bottom Nav Bar/Active/Home.svg";
import { ReactComponent as HomeIconPassive } from "assets/icons/Bottom Nav Bar/Pasive/Home.svg";
import { ReactComponent as OrderIconActive } from "assets/icons/Bottom Nav Bar/Active/Order.svg";
import { ReactComponent as OrderIconPassive } from "assets/icons/Bottom Nav Bar/Pasive/Order.svg";
import { ReactComponent as ProfileIconActive } from "assets/icons/Bottom Nav Bar/Active/Profile.svg";
import { ReactComponent as ProfileIconPassive } from "assets/icons/Bottom Nav Bar/Pasive/Profile.svg";
import { ReactComponent as SearchIconActive } from "assets/icons/Bottom Nav Bar/Active/Search.svg";
import { ReactComponent as SearchIconPassive } from "assets/icons/Bottom Nav Bar/Pasive/Search.svg";
import { ReactComponent as UpdatesIconActive } from "assets/icons/Bottom Nav Bar/Active/Updates.svg";
import { ReactComponent as UpdatesIconPassive } from "assets/icons/Bottom Nav Bar/Pasive/Updates.svg";
import { useMediaQuery } from "react-responsive";
import classNames from "classnames";

const Navbar: React.FC = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });

    const containerClasses = classNames("h-[86px] px-3 flex justify-center items-center bg-white md:justify-start md:flex-col rounded-t-2xl gap-[14px]", {
        "shadow-[0_-8px_24px_0_#00000008]": isMobile,
    });

    return (
        <nav>
            <ul className={containerClasses}>
                <NavbarItem
                    to="/home"
                    activeWhen={["/home", "/all-categories", "/popular-food", "/nearby-restaurant"]}
                    activeIcon={HomeIconActive}
                    disableIcon={HomeIconPassive}
                >
                    Home
                </NavbarItem>
                <NavbarItem
                    to="/search"
                    activeWhen={["/search"]}
                    activeIcon={SearchIconActive}
                    disableIcon={SearchIconPassive}
                >
                    Search
                </NavbarItem>
                <NavbarItem
                    to="/order-history"
                    activeWhen={["/order-history"]}
                    activeIcon={OrderIconActive}
                    disableIcon={OrderIconPassive}
                >
                    Order
                </NavbarItem>
                <NavbarItem
                    to="/updates"
                    activeWhen={["/updates"]}
                    activeIcon={UpdatesIconActive}
                    disableIcon={UpdatesIconPassive}
                >
                    Updates
                </NavbarItem>
                <NavbarItem
                    to="/profile"
                    activeWhen={["/profile", "/wishlist", "/account"]}
                    activeIcon={ProfileIconActive}
                    disableIcon={ProfileIconPassive}
                >
                    Profile
                </NavbarItem>
            </ul>
        </nav>
    );
};

export default Navbar;

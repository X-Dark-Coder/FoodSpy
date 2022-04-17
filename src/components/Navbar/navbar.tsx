import NavbarItem from "./navbar-item";
import { ReactComponent as HomeIconActive } from "assets/icons/Bottom Nav Bar/Active/Home.svg";
import { ReactComponent as HomeIconPasive } from "assets/icons/Bottom Nav Bar/Pasive/Home.svg";
import { ReactComponent as OrderIconActive } from "assets/icons/Bottom Nav Bar/Active/Order.svg";
import { ReactComponent as OrderIconPasive } from "assets/icons/Bottom Nav Bar/Pasive/Order.svg";
import { ReactComponent as ProfileIconActive } from "assets/icons/Bottom Nav Bar/Active/Profile.svg";
import { ReactComponent as ProfileIconPasive } from "assets/icons/Bottom Nav Bar/Pasive/Profile.svg";
import { ReactComponent as SearchIconActive } from "assets/icons/Bottom Nav Bar/Active/Search.svg";
import { ReactComponent as SearchIconPasive } from "assets/icons/Bottom Nav Bar/Pasive/Search.svg";
import { ReactComponent as UpdatesIconActive } from "assets/icons/Bottom Nav Bar/Active/Updates.svg";
import { ReactComponent as UpdatesIconPasive } from "assets/icons/Bottom Nav Bar/Pasive/Updates.svg";

const Navbar: React.FC = () => {
    return (
        <nav>
            <ul className="h-[86px] px-3 flex justify-center items-center bg-white md:block shadow-[0_-8px_24px_0_#00000008] rounded-t-2xl">
                <NavbarItem to="/home" activeIcon={HomeIconActive} disableIcon={HomeIconPasive} className="mt-2">
                    Home
                </NavbarItem>
                <NavbarItem to="/order" activeIcon={OrderIconActive} disableIcon={OrderIconPasive} className="mt-2">
                    Order
                </NavbarItem>
                <NavbarItem to="/profile" activeIcon={ProfileIconActive} disableIcon={ProfileIconPasive} className="mt-2">
                    Profile
                </NavbarItem>
                <NavbarItem to="/search" activeIcon={SearchIconActive} disableIcon={SearchIconPasive} className="mt-2">
                    Search
                </NavbarItem>
                <NavbarItem to="/updates" activeIcon={UpdatesIconActive} disableIcon={UpdatesIconPasive} className="mt-2">
                    Updates
                </NavbarItem>
            </ul>
        </nav>
    );
};

export default Navbar;

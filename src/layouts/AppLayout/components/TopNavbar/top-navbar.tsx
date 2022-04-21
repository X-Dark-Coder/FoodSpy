import MediaQuery from "react-responsive";
import { Avatar } from "components/shared";
import { CartItems, DeliverTo, Profile, SearchBox, WalletBalance } from "./components";
import AvatarImage from "assets/img/avatar.png";

const TopNavbar = () => {
    return (
        <nav className="py-3 px-5 md:py-2 md:pl-6 md:pr-4 flex md:bg-white md:shadow-[0_-4px_24px_0_#00000008] w-full md:w-[calc(100%_-_230px)] md:fixed top-0 z-[850] justify-between items-center">
            <div className="flex justify-between items-center gap-5">
                <DeliverTo />
                <MediaQuery minWidth={870}>
                    <CartItems />
                </MediaQuery>
                <MediaQuery minWidth={500}>
                    <SearchBox />
                </MediaQuery>
            </div>
            <div className="flex justify-between items-center gap-3">
                <WalletBalance />
                <Profile />
            </div>
        </nav>
    );
};

export default TopNavbar;

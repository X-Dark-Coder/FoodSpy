import { Navbar } from "components";
import { ReactComponent as Logo } from "assets/img/Brand Logo.svg";

const SideMenu: React.FC = () => {
    return (
        <menu className="hidden md:flex flex-col justify-between items-start w-[230px] h-screen bg-white shadow-[4px_0_24px_0_#00000008]">
            <div className="w-full ">
                <div className="px-3 pt-[10px] pb-14">
                    <Logo className="w-[calc(100%_-_20px)] h-[36px]" />
                </div>

                <Navbar />
            </div>

        </menu>
    );
};

export default SideMenu;

import { Navbar } from "components";

const SideMenu: React.FC = () => {
    return (
        <menu className="hidden md:flex flex-col justify-between items-start w-[230px] h-screen bg-white shadow-[4px_0_24px_0_#00000008]">
            <div className="w-full">
                <h1 className="text-title-1 pb-14">Logo</h1>
                <Navbar />
            </div>
            <div className="w-full flex justify-center items-center">
                <div className="bg-mono-ink-lighter w-12 h-12 rounded-full"></div>
            </div>
        </menu>
    );
};

export default SideMenu;

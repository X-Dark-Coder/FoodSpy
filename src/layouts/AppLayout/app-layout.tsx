import { Navbar } from "components";
import { SideMenu, TopNavbar } from "./components";
import { AppLayoutProps } from "./types";

const AppLayout: React.FC<AppLayoutProps> = ({ children }) => {
    return (
        <main className="w-full h-screen bg-mono-sky-lightest flex justify-start items-start">
            <SideMenu />
            <div className="w-[calc(100%_-_230px)] h-full overflow-x-hidden hide-scrollbar">
                <TopNavbar />
                <div className="md:mt-14">{children}</div>
            </div>
            <div className="w-full fixed z-[750] bottom-0 md:hidden">
                <Navbar />
            </div>
        </main>
    );
};

export default AppLayout;

import MediaQuery from "react-responsive";
import { Navbar } from "components";
import { SideMenu, TopNavbar } from "./components";
import { TAppLayoutProps } from "./types";

const AppLayout: React.FC<TAppLayoutProps> = ({ children }) => {
    return (
        <main className="w-full h-screen bg-mono-sky-lightest flex justify-start items-start">
            <SideMenu />
            <div className="w-full md:w-[calc(100%_-_230px)] h-full overflow-x-hidden hide-scrollbar">
                <MediaQuery minWidth={1024}>
                    <TopNavbar />
                </MediaQuery>
                <div className="md:mt-14">{children}</div>
            </div>
            <div className="w-full fixed z-[750] bottom-0 md:hidden">
                <Navbar />
            </div>
        </main>
    );
};

export default AppLayout;

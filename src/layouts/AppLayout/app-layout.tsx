import MediaQuery, { useMediaQuery } from "react-responsive";
import { Navbar } from "components";
import { SideMenu, TopNavbar } from "./components";
import { TAppLayoutProps } from "./types";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useLocation } from "react-router-dom";
import classNames from "classnames";

const AppLayout: React.FC<TAppLayoutProps> = ({ children }) => {
    const isMobile = useMediaQuery({ query: "(max-width: 768px)" });
    const showBottomNavbar = useTypedSelector((state) => state.app.showBottomNavbar);

    const bottomNavbarVariants: Variants = {
        hide: {
            y: 10,
            opacity: 0,
            transition: {
                duration: 0.25
            }
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.25
            }
        }
    };

    const mainContainerClasses = classNames("h-full h-[calc(100vh_-_58px)] md:h-screen overflow-y-scroll", {
        "hide-scrollbar": isMobile
    });

    return (
        <main className="w-full h-screen bg-mono-sky-lightest flex justify-start items-start">
            <SideMenu />
            <div className="w-full md:w-[calc(100%_-_230px)] h-screen overflow-hidden">
                <MediaQuery minWidth={1025}>
                    <TopNavbar />
                </MediaQuery>
                <div className={mainContainerClasses} id="app-scrollable-container">
                    {children}
                </div>
            </div>
            <AnimatePresence>
                {showBottomNavbar ? (
                    <motion.div
                        variants={bottomNavbarVariants}
                        initial="hide"
                        animate="show"
                        exit="hide"
                        className="w-full fixed z-[750] bottom-0 md:hidden"
                    >
                        <Navbar />
                    </motion.div>
                ) : null}
            </AnimatePresence>
        </main>
    );
};

export default AppLayout;

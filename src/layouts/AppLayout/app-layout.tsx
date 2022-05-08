import MediaQuery from "react-responsive";
import { Navbar } from "components";
import { SideMenu, TopNavbar } from "./components";
import { TAppLayoutProps } from "./types";
import { AnimatePresence, Variants, motion } from "framer-motion";
import { useTypedSelector } from "hooks/useTypedSelector";
import { useEffect, useRef } from "react";
import { useLocation } from "react-router-dom";

const AppLayout: React.FC<TAppLayoutProps> = ({ children }) => {
    const { pathname } = useLocation();
    const showBottomNavbar = useTypedSelector((state) => state.app.showBottomNavbar);

    const bottomNavbarVariants: Variants = {
        hide: {
            y: 10,
            opacity: 0,
            transition: {
                duration: 0.25,
            },
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.25,
            },
        },
    };

    const container = useRef<HTMLDivElement>(null);

    useEffect(() => {
        setTimeout(() => {
            container.current?.scrollTo(0, 0);
        }, 200);
    }, [pathname]);

    return (
        <main className="w-full h-screen bg-mono-sky-lightest flex justify-start items-start">
            <SideMenu />
            <div className="w-full md:w-[calc(100%_-_230px)] h-screen overflow-hidden">
                <MediaQuery minWidth={1024}>
                    <TopNavbar />
                </MediaQuery>
                <div className="h-full md:h-[calc(100vh_-_58px)] overflow-y-scroll hide-scrollbar" ref={container}>
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

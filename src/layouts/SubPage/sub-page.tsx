import { motion, Variants } from "framer-motion";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { TSubPageProps } from "./types";
import { ReactComponent as BackIcon } from "assets/icons/Back.svg";
import { ReactComponent as SearchIcon } from "assets/icons/Search.svg";

const SubPage: React.FC<TSubPageProps> = ({ children, backLink, searchLink }) => {
    let subPageVariants: Variants = {
        hide: {
            y: 10,
            opacity: 0,
            transition: {
                duration: 0.15,
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

    // useEffect(() => {
    //     requestAnimationFrame(() => container.current?.scrollTo(0, 0));
    // }, []);

    return (
        <motion.div
            variants={subPageVariants}
            initial="hide"
            animate="show"
            exit="hide"
            className="w-full h-screen bg-mono-sky-lightest z-[800] relative overflow-y-scroll"
            ref={container}
        >
            <div className="w-full px-4 py-3 flex justify-between items-center">
                <NavLink to={backLink}>
                    <BackIcon style={{ width: 24 }} />
                </NavLink>
                <h3 className="text-large font-semibold text-mono-ink">All Categories</h3>
                {searchLink ? (
                    <NavLink to={searchLink}>
                        <SearchIcon style={{ width: 24 }} />
                    </NavLink>
                ) : (
                    <div className="w-1"></div>
                )}
            </div>
            <div>{children}</div>
        </motion.div>
    );
};

export default SubPage;

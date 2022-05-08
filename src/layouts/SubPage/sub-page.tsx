import { motion, Variants } from "framer-motion";
import { useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import { TSubPageProps } from "./types";
import { ReactComponent as BackIcon } from "assets/icons/Back.svg";
import { ReactComponent as SearchIcon } from "assets/icons/Search.svg";
import { toggleBottomNavbar } from "store/actions/app.actions";
import { useDispatch } from "react-redux";

const SubPage: React.FC<TSubPageProps> = ({ children, backLink, searchLink, title }) => {
    const dispatch = useDispatch();

    useEffect(() => {
         dispatch(toggleBottomNavbar(false));
     }, []);

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

    return (
        <motion.div
            variants={subPageVariants}
            initial="hide"
            animate="show"
            exit="hide"
            className="w-full h-full bg-mono-sky-lightest z-[800] relative"
        >
            <div className="w-full px-4 pt-6 sm:py-6 flex justify-between items-center">
                <NavLink to={backLink}>
                    <BackIcon className="w-6 sm:w-7 h-6 sm:h-7" />
                </NavLink>
                <h3 className="text-large sm:text-title-3 font-semibold text-mono-ink">{title}</h3>
                {searchLink ? (
                    <NavLink to={searchLink}>
                        <SearchIcon className="w-6 sm:w-7 h-6 sm:h-7" />
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

import React, { useState, useCallback } from "react";
import { Swiper } from "swiper";
import { motion, Variants } from "framer-motion";
import { AlertModal, Button } from "components/shared";
import { OnboardingSlider, RegisterModal, SlidesContent } from "./components";
import LeftSideWallpaper from "assets/img/dopolnitelnye-ingridenty.jpg";
import { useMediaQuery } from "react-responsive";
import { useNavigate } from "react-router-dom";
import { ReactComponent as SuccessPicture } from "assets/img/order-success.svg";

const OnboardingPage: React.FC = () => {
    const navigate = useNavigate();
    const [currentActiveSlide, setCurrentActiveSlide] = useState(0);
    const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
    const [isOpen, setIsOpen] = useState(false);
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    let containerVariants: Variants = {
        exit: {
            opacity: 0,
        },
    };

    let leftSideWallpaperVariants: Variants = {
        hide: {
            y: 50,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 1,
                type: "spring",
                delay: 0.25,
            },
        },
    };

    let onboardingVariants: Variants = {
        hide: {
            x: 100,
            opacity: 0,
        },
        show: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                type: "spring",
                delay: isMobile ? 0 : 0.75,
                when: "beforeChildren",
                staggerChildren: 0.25,
            },
        },
    };

    const childVariants: Variants = {
        hide: {
            y: 40,
            opacity: 0,
        },
        show: {
            y: 0,
            opacity: 1,
        },
    };

    const onSlideChange = useCallback((swiper: Swiper) => {
        setCurrentActiveSlide(swiper.activeIndex);
    }, []);

    const onSwiperInit = useCallback((swiper: Swiper) => {
        setCurrentActiveSlide(swiper.activeIndex);
    }, []);

    const onGoShoppingClicked = () => {
        setIsSuccessModalOpen(false);
        navigate("/home");
    };

    return (
        <React.Fragment>
            <motion.main
                variants={containerVariants}
                exit="exit"
                className="h-screen w-full flex justify-center items-center overflow-hidden fixed top-0 left-0 z-[999]"
            >
                <motion.div
                    className="w-2/5 h-full hidden bg-white lg:flex justify-center items-center"
                    variants={leftSideWallpaperVariants}
                    initial="hide"
                    animate="show"
                >
                    <img src={LeftSideWallpaper} alt="left-wallpaper" />
                </motion.div>

                <motion.div
                    className="w-full lg:w-3/5 bg-white lg:bg-primary h-screen flex justify-center items-center flex-col"
                    variants={onboardingVariants}
                    initial="hide"
                    animate="show"
                >
                    <OnboardingSlider onSlideChange={onSlideChange} onSwiperInit={onSwiperInit} />
                    <motion.div variants={childVariants} className="flex justify-center items-center flex-col mt-8">
                        <SlidesContent activeSlideIndex={currentActiveSlide} />
                        <Button
                            onClick={() => setIsOpen(!isOpen)}
                            variant={isMobile ? "wide-secondary" : "wide-secondary-white"}
                            className="mt-4"
                        >
                            Register
                        </Button>
                    </motion.div>
                </motion.div>
            </motion.main>
            <RegisterModal isOpen={isOpen} setIsOpen={setIsOpen} setIsSuccessModalOpen={setIsSuccessModalOpen} />
            <AlertModal
                picture={SuccessPicture}
                title="Success"
                description="You are registered successfully"
                onClose={() => setIsSuccessModalOpen(false)}
                show={isSuccessModalOpen}
                buttonText="Go Shopping"
                onButtonClick={onGoShoppingClicked}
            />
        </React.Fragment>
    );
};

export default OnboardingPage;

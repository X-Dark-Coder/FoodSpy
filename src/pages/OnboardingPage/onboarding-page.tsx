import { useState, useCallback, useEffect } from "react";
import { Swiper } from "swiper";
import { motion, Variants } from "framer-motion";
import { Button, Modal, SlidingModal } from "components/shared";
import { OnboardingSlider, SlidesContent } from "./components";
import LeftSideWallpaper from "assets/img/dopolnitelnye-ingridenty.jpg";
import useMediaQuery from "hooks/useMediaQuery";
import classNames from "classnames";
import { Input } from "components/shared";

const OnboardingPage: React.FC = () => {
    const [currentActiveSlide, setCurrentActiveSlide] = useState(0);
    const isMobile = window.innerWidth <= 1024;
    const [isOpen, setIsOpen] = useState(false);

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

    const registerModalContent = (
        <div className="pt-[35px] mx-5 pb-[30px]">
            <h2 className="text-title-2 text-mono-ink font-bold">Register</h2>
            <p className="text-medium-16 text-mono-ink-light mt-3">
                We use this information to facilitate transactions on this application
            </p>
            <div className="mt-7">
                <Input variant="simple" type="text" placeholder="Name" fullWidth />
                <Input variant="simple" type="text" placeholder="Name" className="mt-3" fullWidth />
                <Button variant="wide-primary" onClick={() => {}} className="mt-16" fullWidth>
                    Register
                </Button>
            </div>
        </div>
    );

    return (
        <main className="h-screen w-full flex justify-center items-center overflow-hidden fixed top-0 left-0">
            {isMobile ? (
                <SlidingModal show={isOpen} onClose={() => setIsOpen(false)}>
                    {registerModalContent}
                </SlidingModal>
            ) : (
                <Modal show={isOpen} onClose={() => setIsOpen(false)}>
                    {registerModalContent}
                </Modal>
            )}

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
                    <Button variant={isMobile ? "wide-primary" : "wide-primary-white"}>Get Started</Button>
                    <Button
                        onClick={() => setIsOpen(!isOpen)}
                        variant={isMobile ? "wide-secondary" : "wide-secondary-white"}
                        className="mt-4"
                    >
                        Login
                    </Button>
                </motion.div>
            </motion.div>
        </main>
    );
};

export default OnboardingPage;

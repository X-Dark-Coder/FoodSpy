import React from "react";
import { motion, Variants } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation, Keyboard } from "swiper";
import { TOnboardingSliderProps } from "./types";
import SafeDeliveryIllustration from "assets/img/Frame 213.svg";
import FastDeliveryIllustration from "assets/img/Frame 214.svg";
import OrderFoodIllustration from "assets/img/Frame 215.svg";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./style.css";

const OnboardingSlider: React.FC<TOnboardingSliderProps> = ({ onSlideChange, onSwiperInit }) => {
    const isMobile = window.innerWidth <= 1024;

    const childVariants: Variants = {
        hide: {
            y: 40,
            opacity: 0
        },
        show: {
            y: 0,
            opacity: 1
        }
    };

    return (
        <motion.div variants={childVariants} className="w-full lg:px-8">
            <Swiper
                modules={[EffectFade, Pagination, Navigation, Keyboard]}
                effect={isMobile ? "slide" : "fade"}
                slidesPerView={1}
                className="mb-4 lg:pb-8"
                navigation={!isMobile}
                pagination={{
                    clickable: true,
                    bulletClass: "onboarding-pagination-bullet",
                    bulletActiveClass: "onboarding-pagination-bullet-active"
                }}
                keyboard
                onSlideChange={onSlideChange}
                onInit={onSwiperInit}
            >
                <SwiperSlide className="flex justify-center items-center">
                    <img src={SafeDeliveryIllustration} alt="slide 1" className="w-[400px]" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <img src={FastDeliveryIllustration} alt="slide 1" className="w-[400px]" />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <img src={OrderFoodIllustration} alt="slide 1" className="w-[400px]" />
                </SwiperSlide>
            </Swiper>
        </motion.div>
    );
};

export default React.memo(OnboardingSlider);

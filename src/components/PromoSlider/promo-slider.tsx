import React from "react";
import { TPromoSliderProps } from "./types";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation } from "swiper";
import PromoSlide from "./promo-slide";
import "./style.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PromoSlider: React.FC<TPromoSliderProps> = () => {
    const isMobile = window.innerWidth <= 1024;

    return (
        <div className="w-full pt-6">
            <Swiper
                modules={[EffectFade, Pagination, Navigation]}
                effect={isMobile ? "slide" : "fade"}
                slidesPerView={1}
                className="mb-4 pb-8 lg:pb-10"
                pagination={{
                    clickable: true,
                    bulletClass: "promo-pagination-bullet",
                    bulletActiveClass: "promo-pagination-bullet-active",
                }}
            >
                <SwiperSlide className="flex justify-center items-center">
                    <PromoSlide />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <PromoSlide />
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <PromoSlide />
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default PromoSlider;

import React from "react";
import { TPromoSliderProps } from "./types";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectFade, Pagination, Navigation, Keyboard } from "swiper";
import PromoSlide from "./promo-slide";
import PromoSlideImage1 from "assets/img/slide-1.jpg";
import PromoSlideImage2 from "assets/img/slide-2.png";
import "./style.css";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

const PromoSlider: React.FC<TPromoSliderProps> = ({desktop}) => {
    return (
        <div className="w-full pt-6">
            <Swiper
                modules={[EffectFade, Pagination, Navigation, Keyboard]}
                effect="slide"
                slidesPerView={1}
                className="mb-4 pb-8 lg:pb-10 rounded-lg"
                pagination={{
                    clickable: true,
                    bulletClass: "promo-pagination-bullet",
                    bulletActiveClass: "promo-pagination-bullet-active",
                }}
                keyboard={{
                    enabled: true,
                }}
            >
                <SwiperSlide className="flex justify-center items-center">
                    <PromoSlide desktop={desktop} picture={PromoSlideImage1}/>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center">
                    <PromoSlide desktop={desktop} picture={PromoSlideImage2}/>
                </SwiperSlide>
                <SwiperSlide className="flex justify-center items-center" >
                    <PromoSlide desktop={desktop} picture={PromoSlideImage1}/>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default PromoSlider;

import { Swiper } from "swiper";

export type OnboardingSliderProps = {
    onSlideChange: (swiper: Swiper) => void;
    onSwiperInit: (swiper: Swiper) => void;
};

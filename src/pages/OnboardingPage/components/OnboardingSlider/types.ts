import { Swiper } from "swiper";

export type TOnboardingSliderProps = {
    onSlideChange: (swiper: Swiper) => void;
    onSwiperInit: (swiper: Swiper) => void;
};

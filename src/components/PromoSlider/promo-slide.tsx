import { PromoSlideProps } from "./types";
import PromoSlideImage from "assets/img/promo-slide-img.jpg";
const PromoSlide: React.FC<PromoSlideProps> = () => {
    return (
        <div className="rounded-lg">
            <img src={PromoSlideImage} alt="promo-slide" />
        </div>
    );
};

export default PromoSlide;

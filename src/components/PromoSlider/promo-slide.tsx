import { TPromoSlideProps } from "./types";
import classNames from "classnames";
const PromoSlide: React.FC<TPromoSlideProps> = ({desktop,picture}) => {

    const containerClasses = classNames("flex justify-center overflow-hidden relative rounded-lg aspect-video w-full" ,{
        "mx-6" : desktop
    });

    return (
        <div className={containerClasses}>
            <img src={picture} alt="promo-slide" className="w-full rounded-lg absolute"/>
        </div>
    );
};

export default PromoSlide;

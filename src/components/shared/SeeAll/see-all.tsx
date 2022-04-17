import { ReactComponent as ChevronRight } from "assets/icons/Chevron/Right.svg";
import { Link } from "react-router-dom";
import { SeeAllProps } from "./types";

const SeeAll: React.FC<SeeAllProps> = ({link}) => {
    return (
        <Link to={link} className="flex justify-center items-center text-primary font-semibold">
            See All <ChevronRight className="ml-1" />
        </Link>
    );
};

export default SeeAll;

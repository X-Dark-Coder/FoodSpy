import { Badge } from "components/shared";
import {ReactComponent as CaloriesIcon} from "assets/icons/Calories.svg";
import {ReactComponent as OrganicIcon} from "assets/icons/Organic.svg";
import {ReactComponent as GluttenFreeIcon} from "assets/icons/Glutten Free.svg";

const FoodInformations: React.FC = () => {
    return (
        <div className="mt-5">
            <h4 className="text-mono-ink-light font-semibold text-medium-16">Information</h4>
            <div className="flex justify-start items-center flex-wrap gap-3 mt-3">
                <Badge icon={CaloriesIcon} text="1990 Kal"/>
                <Badge icon={OrganicIcon} text="Organic"/>
                <Badge icon={GluttenFreeIcon} text="Free Gluten"/>
            </div>
        </div>
    );
};

export default FoodInformations;

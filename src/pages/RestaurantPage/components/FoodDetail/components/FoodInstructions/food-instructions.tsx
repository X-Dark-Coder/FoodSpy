import { Input } from "components/shared";
import { useMediaQuery } from "react-responsive";
import { TFoodInstructionsProps } from "./types";

const FoodInstructions: React.FC<TFoodInstructionsProps> = ({ foodInstructions, setFoodInstructions }) => {
    const isMobile = useMediaQuery({ query: "(max-width: 767px)" });

    const onInstructionsChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFoodInstructions(e.target.value);
    };

    return (
        <div className="w-full">
            <div className="w-full h-px rounded-sm bg-[rgba(0,0,0,0.1)]"></div>
            <Input
                value={foodInstructions}
                onChange={onInstructionsChanged}
                variant="simple"
                placeholder="Add Instructions"
                containerClassName="mt-6"
                fullWidth={isMobile}
                showLabel
            />
        </div>
    );
};

export default FoodInstructions;

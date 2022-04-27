import { ReactComponent as Icon } from "assets/icons/Clock.svg";
import { FoodType } from "components/shared";
import { TFoodType } from "components/shared/FoodType/types";
import React, { useCallback } from "react";
import { TSelectFoodTypeProps } from "./types";

const SelectFoodType: React.FC<TSelectFoodTypeProps> = ({ selectedTypes, setSelectedTypes }) => {
    const foodTypes: TFoodType[] = [
        { id: 0, text: "Vegan", icon: Icon },
        { id: 1, text: "Organic", icon: Icon },
        { id: 2, text: "No Pork", icon: Icon },
        { id: 3, text: "Glutten Free", icon: Icon },
        { id: 4, text: "Safe For Children", icon: Icon },
    ];

    console.log("Select Food Re Rendered")

    const toggleFoodType = useCallback(
        (id: number) => {
            if (selectedTypes.includes(id)) {
                setSelectedTypes(selectedTypes.filter((foodTypeId) => foodTypeId !== id));
            } else {
                setSelectedTypes([...selectedTypes, id]);
            }
        },
        [selectedTypes]
    );

    return (
        <div className="w-full sm:w-[500px]">
            <h3 className="mb-4 text-large font-semibold text-mono-ink">Food Type</h3>
            <div>
                <div className="flex justify-start items-center flex-wrap gap-3">
                    {foodTypes.map((foodType) => {
                        return (
                            <FoodType
                                icon={foodType.icon}
                                text={foodType.text}
                                active={selectedTypes.includes(foodType.id)}
                                onClick={() => toggleFoodType(foodType.id)}
                                key={foodType.id}
                            />
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default React.memo(SelectFoodType);

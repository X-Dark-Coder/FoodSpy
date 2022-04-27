import { Modal, SlidingModal } from "components/shared";
import React, { useState } from "react";
import { useMediaQuery } from "react-responsive";
import { TFilterModalProps, TFilterRange } from "./types";
import SelectFoodType from "./select-food-type";
import SelectRangeCalories from "./select-range-calories";
import SelectRangePrice from "./select-range-price";
import { Button } from "components/shared";

const FilterModal: React.FC<TFilterModalProps> = ({ isOpen, setIsOpen, searchFilter, setSearchFilter }) => {
    const isMobile = useMediaQuery({ query: "(max-width: 600px)" });
    const [selectedTypes, setSelectedTypes] = useState<number[]>(searchFilter.selectedTypes);
    const [calorieRange, setCalorieRange] = useState<TFilterRange>(searchFilter.calorieRange);
    const [priceRange, setPriceRange] = useState<TFilterRange>(searchFilter.priceRange);

    const saveFilter = () => {
        setSearchFilter({
            selectedTypes,
            calorieRange,
            priceRange,
        });
    };
    
    const modalContent = (
        <div className="flex justify-center items-center w-full flex-col p-5">
            <SelectFoodType selectedTypes={selectedTypes} setSelectedTypes={setSelectedTypes} />
            <SelectRangePrice priceRange={priceRange} setPriceRange={setPriceRange} />
            <SelectRangeCalories calorieRange={calorieRange} setCalorieRange={setCalorieRange} />
            <Button
                className="mt-[32px]"
                variant="wide-primary"
                onClick={saveFilter}
                fullWidth
            >
                Filter
            </Button>
        </div>
    );

    return isMobile ? (
        <SlidingModal show={isOpen} onClose={() => setIsOpen(false)}>
            {modalContent}
        </SlidingModal>
    ) : (
        <Modal show={isOpen} onClose={() => setIsOpen(false)}>
            {modalContent}
        </Modal>
    );
};

export default FilterModal;

import { ReactComponent as FilterIcon } from "assets/icons/Filter/Line.svg";
import classNames from "classnames";
import React, { useState } from "react";
import { FilterModal } from "./components";
import { TFilterProps } from "./types";

const Filter: React.FC<TFilterProps> = ({ disable, searchFilter, setSearchFilter }) => {
    const [isOpen, setIsOpen] = useState(false);

    const containerClasses = classNames("flex justify-center gap-[11px] pl-[11px] sm:pl-0", {
        "opacity-[0.6]": disable,
    });

    return (
        <div className={containerClasses}>
            <button onClick={!disable ? () => setIsOpen(!isOpen) : undefined}>
                <FilterIcon className="w-[30px] h-[30px]" />
            </button>
            <FilterModal
                searchFilter={searchFilter}
                setSearchFilter={setSearchFilter}
                isOpen={isOpen}
                setIsOpen={setIsOpen}
            />
        </div>
    );
};

export default React.memo(Filter);

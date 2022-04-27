import { ReactComponent as ClockHistory } from "assets/icons/Clock-history.svg";
import { ReactComponent as CloseIcon } from "assets/icons/Close.svg";
import { THistoryItemProps } from "./types";

const HistoryItem: React.FC<THistoryItemProps> = ({ id,searchText,onDelete,onClick }) => {
    return (
        <li className="flex justify-between items-center w-full">
            <div className="flex justify-start items-center gap-[9px] cursor-pointer" onClick={onClick}>
                <ClockHistory />
                <span className="text-medium-16 text-mono-ink-light">{searchText}</span>
            </div>
            <button className="flex justify-center items-center" onClick={() => onDelete(id)}>
                <CloseIcon />
            </button>
        </li>
    );
};

export default HistoryItem;

import { TSettingItemProps } from "./types";
import { ReactComponent as ChevronRightIcon } from "assets/icons/Chevron/RightBlack.svg";

const SettingItem: React.FC<TSettingItemProps> = ({ icon: Icon, onClick, text }) => {
    return (
        <div
            className="flex justify-between items-center border-b-[1px] border-mono-sky-lighter pb-4 w-full"
            onClick={onClick}
        >
            <div className="flex justify-start items-center gap-4 cursor-pointer">
                <div className="flex justify-center items-center w-7 h-7 md:w-10 md:h-10 bg-mono-sky-lighter rounded-md">
                    <Icon className="w-4 h-4 md:w-6 md:h-6" />
                </div>
                <span className="text-mono-ink text-medium-16">{text}</span>
            </div>
            <ChevronRightIcon className="w-5 h-5 md:w-7 md:h-7 cursor-pointer" />
        </div>
    );
};

export default SettingItem;

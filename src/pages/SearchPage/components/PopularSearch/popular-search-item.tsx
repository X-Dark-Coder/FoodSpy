import { TPopularSearchItemProps } from "./types";

const PopularSearchItem: React.FC<TPopularSearchItemProps> = ({ text, onClick }) => {
    return (
        <button className="py-[3px] px-[11px] rounded-[30px] bg-mono-sky-lighter whitespace-nowrap" onClick={onClick}>
            <span className="text-small-14 text-mono-ink-light">{text}</span>
        </button>
    );
};

export default PopularSearchItem;

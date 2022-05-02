import { THeaderLabelProps } from "./types";

const HeaderLabel: React.FC<THeaderLabelProps> = ({ icon: Icon, text }) => {
    return (
        <div className="bg-[#5c616f25] rounded-[4px] h-6 flex justify-center items-center gap-[5px] px-2">
            <Icon className="w-[14px] h-[14px]"/>
            <span className="text-mono-sky-lighter text-small font-semibold mt-px">{text}</span>
        </div>
    );
};

export default HeaderLabel;

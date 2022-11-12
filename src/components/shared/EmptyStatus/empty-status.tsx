import { ReactComponent as ErrorPicture } from "assets/img/error-picture.svg";
import { TEmptyStatusProps } from "./types";

const EmptyStatus: React.FC<TEmptyStatusProps> = ({ title, description }) => {
    return (
        <div className="flex justify-center items-center flex-col py-7 px-5 min-w-[300px] max-w-[400px]">
            <ErrorPicture className="w-[200px] h-[200px]"/>
            <h1 className="mt-6 text-mono-ink text-title-3 font-semibold">{title}</h1>
            <p className="mt-3 text-mono-ink-lighter text-small-14 max-w-[80%] text-center">{description}</p>
        </div>
    );
};

export default EmptyStatus;

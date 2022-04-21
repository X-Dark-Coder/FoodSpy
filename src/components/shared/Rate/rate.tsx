import { ReactComponent as StarIcon } from "assets/icons/Star_Active.svg";

const Rate : React.FC<{stars : number}> = ({stars}) => {
    return <div className="flex justify-center items-center">
    <StarIcon className="w-3 h-3 mr-1" />
    <span className="text-small text-mono-ink-light">{stars}</span>
</div>;
}

export default Rate;
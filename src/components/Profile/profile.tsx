import classNames from "classnames";
import { Avatar } from "components/shared";
import { useTypedSelector } from "hooks/useTypedSelector";
import { TProfileProps } from "./types";

const Profile: React.FC<TProfileProps> = ({ size = "sm" }) => {
    const user = useTypedSelector((state) => state.user.account);

    const nameClasses = classNames("text-mono-ink font-semibold whitespace-nowrap", {
        "text-large md:text-small-14": size === "sm",
        "text-medium-16": size === "md",
    });

    const phoneClasses = classNames("text-mono-ink-light whitespace-nowrap", {
        "text-small-14 md:text-small": size === "sm",
        "text-small-14": size === "md",
    });

    return (
        <div className="flex justify-center items-center text-large">
            <Avatar abbr="MM" name="Cameron Williamson" picture={null} variant={size} />
            <div className="flex flex-col justify-start items-start ml-4 md:ml-3">
                <span className={nameClasses}>{user && user.name}</span>
                <span className={phoneClasses}>{user && user.phone}</span>
            </div>
        </div>
    );
};

export default Profile;

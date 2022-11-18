import SettingItem from "./setting-item";
import { ReactComponent as UserIcon } from "assets/icons/User.svg";
import { ReactComponent as QuestionIcon } from "assets/icons/Question.svg";
import { ReactComponent as UnlockIcon } from "assets/icons/Unlock.svg";
import { ReactComponent as HeartFillIcon } from "assets/icons/Heart-fill-black.svg";
import { ReactComponent as NoteIcon } from "assets/icons/Note.svg";
import { ReactComponent as LockIcon } from "assets/icons/Security.svg";
import { useNavigate } from "react-router-dom";
const SettingsList: React.FC = () => {
    const navigate = useNavigate();

    const onLogout = () => {
        localStorage.clear();
        navigate("/");
        document.location.reload();
    };

    return (
        <div className="pb-[90px]">
            <div className="my-8">
                <h3 className="text-medium-16 font-semibold text-mono-ink">Personal</h3>
                <div className="flex justify-start items-start gap-4 flex-col mt-[22px]">
                    <SettingItem icon={UserIcon} text="User Settings" onClick={() => navigate("/account")} />
                    <SettingItem icon={HeartFillIcon} text="Wishlist" onClick={() => navigate("/wishlist")} />
                    <SettingItem icon={UnlockIcon} text="Logout" onClick={onLogout} />
                </div>
            </div>
            <div className="my-8">
                <h3 className="text-medium-16 font-semibold text-mono-ink">General</h3>
                <div className="flex justify-start items-start gap-4 flex-col mt-[22px]">
                    <SettingItem icon={QuestionIcon} text="Help & Support" onClick={() => {}} />
                    <SettingItem icon={LockIcon} text="Privacy & Policy" onClick={() => {}} />
                    <SettingItem icon={NoteIcon} text="Term & Condition" onClick={() => {}} />
                </div>
            </div>
        </div>
    );
};

export default SettingsList;

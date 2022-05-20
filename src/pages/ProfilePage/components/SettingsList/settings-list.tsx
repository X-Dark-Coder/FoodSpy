import SettingItem from "./setting-item";
import { ReactComponent as UserIcon } from "assets/icons/User.svg";
import { ReactComponent as CreditCardIcon } from "assets/icons/Credit-card.svg";
import { ReactComponent as HeartIcon } from "assets/icons/Heart.svg";
import { ReactComponent as HeartFillIcon } from "assets/icons/Heart-fill-black.svg";
import { useNavigate } from "react-router-dom";
const SettingsList: React.FC = () => {
    const navigate = useNavigate();

    return (
        <div className="pb-[90px]">
            <div className="my-8">
                <h3 className="text-medium-16 font-semibold text-mono-ink">Personal</h3>
                <div className="flex justify-start items-start gap-4 flex-col mt-[22px]">
                    <SettingItem icon={UserIcon} text="User Settings" onClick={() => navigate("/account")} />
                    <SettingItem icon={CreditCardIcon} text="User Settings" onClick={() => {}} />
                    <SettingItem icon={HeartFillIcon} text="Wishlist" onClick={() => navigate("/wishlist")} />
                </div>
            </div>
            <div className="my-8">
                <h3 className="text-medium-16 font-semibold text-mono-ink">General</h3>
                <div className="flex justify-start items-start gap-4 flex-col mt-[22px]">
                    <SettingItem icon={UserIcon} text="User Settings" onClick={() => {}} />
                    <SettingItem icon={CreditCardIcon} text="User Settings" onClick={() => {}} />
                    <SettingItem icon={UserIcon} text="User Settings" onClick={() => {}} />
                    <SettingItem icon={UserIcon} text="User Settings" onClick={() => {}} />
                </div>
            </div>
        </div>
    );
};

export default SettingsList;

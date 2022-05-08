import SettingItem from "./setting-item";
import { ReactComponent as UserIcon } from "assets/icons/User.svg";
import { ReactComponent as CreditCardIcon } from "assets/icons/Credit-card.svg";

const SettingsList: React.FC = () => {
    return (
        <div className="pb-[90px]">
            <div className="my-8">
                <h3 className="text-medium-16 font-semibold text-mono-ink">Personal</h3>
                <div className="flex justify-start items-start gap-4 flex-col mt-[22px]">
                    <SettingItem icon={UserIcon} text="User Settings" link="sad" />
                    <SettingItem icon={CreditCardIcon} text="User Settings" link="sad" />
                    <SettingItem icon={UserIcon} text="User Settings" link="sad" />
                </div>
            </div>
            <div className="my-8">
                <h3 className="text-medium-16 font-semibold text-mono-ink">General</h3>
                <div className="flex justify-start items-start gap-4 flex-col mt-[22px]">
                    <SettingItem icon={UserIcon} text="User Settings" link="sad" />
                    <SettingItem icon={CreditCardIcon} text="User Settings" link="sad" />
                    <SettingItem icon={UserIcon} text="User Settings" link="sad" />
                    <SettingItem icon={UserIcon} text="User Settings" link="sad" />
                </div>
            </div>
        </div>
    );
};

export default SettingsList;

import classNames from "classnames";
import { Profile } from "components";
import { PageContainer } from "layouts";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { toggleBottomNavbar } from "store/actions/app.actions";
import { Balance, SettingsList } from "./components";
import { ReactComponent as SignOutIcon } from "assets/icons/arrow-right-from-bracket.svg";

const ProfilePage: React.FC = () => {
    const dispatch = useDispatch();
    const isMobile = useMediaQuery({ query: "(max-width: 820px)" });

    useEffect(() => {
        dispatch(toggleBottomNavbar(true));
    }, []);

    const onLogout = () => {
        localStorage.clear();
        document.location.reload();
    };

    const profileContainerClasses = classNames("mt-6 flex", {
        "justify-start items-start flex-col gap-7": isMobile,
        "justify-start items-center gap-10": !isMobile
    });

    return (
        <PageContainer>
            <main className="w-full px-6">
                <div className="w-full px-4 pt-6 pb-4 sm:py-6 flex justify-center items-center">
                    <h3 className="text-large sm:text-title-3 font-semibold text-mono-ink">Profile & Settings</h3>
                </div>
                <div className={profileContainerClasses}>
                    <Profile size={isMobile ? "sm" : "md"} />
                    <button
                        onClick={onLogout}
                        className="flex justify-center items-center text-mono-ink-light font-semibold text-large md:text-small-14 group border-2 rounded-md border-transparent hover:border-accent-redd p-2"
                    >
                        <SignOutIcon className="w-[20px] h-[20px] fill-mono-ink-light group-hover:fill-accent-redd" />
                        <span className="pl-2 group-hover:text-accent-redd">Logout</span>
                    </button>
                    <Balance />
                </div>
                <SettingsList />
            </main>
        </PageContainer>
    );
};

export default ProfilePage;

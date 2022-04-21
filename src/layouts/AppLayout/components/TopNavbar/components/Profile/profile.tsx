import { Avatar } from "components/shared";

const Profile: React.FC = () => {
    return (
        <div className="hidden md:flex justify-center items-center">
            <Avatar abbr="MM" name="Mansour Marzban" picture={null} variant="sm" />
            <div className="flex flex-col justify-start items-start ml-4 md:ml-3">
                <span className="text-mono-ink text-large md:text-small-14 font-semibold">Mansour</span>
                <span className="text-mono-ink-light text-small-14 md:text-small font-medium">+989380570535</span>
            </div>
        </div>
    );
};

export default Profile;

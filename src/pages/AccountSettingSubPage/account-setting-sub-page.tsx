import { Avatar, Button, Input } from "components/shared";
import { useTypedSelector } from "hooks/useTypedSelector";
import { SubPage } from "layouts";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUserInformation } from "store/actions/user.actions";

const AccountSettingSubPage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { email, name, phone } = useTypedSelector((state) => state.user.account)!;
    const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

    const [userName, setUserName] = useState(name);
    const [userPhone, setUserPhone] = useState(phone);
    const [userEmail, setUserEmail] = useState(email);

    const onUserNameChanged = (e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value);
    const onUserEmailChanged = (e: React.ChangeEvent<HTMLInputElement>) => setUserEmail(e.target.value);
    const onUserPhoneChanged = (e: React.ChangeEvent<HTMLInputElement>) => setUserPhone(e.target.value);

    const saveChanges = () => {
        dispatch(
            setUserInformation({
                email: userEmail,
                name: userName,
                phone: userPhone,
            })
        );
        navigate("/profile");
    };

    return (
        <React.Fragment>
            <SubPage backLink="/profile" title="Account Setting">
                <div className="mt-6 max-w-[500px] px-6 flex justify-center items-start flex-col">
                    <Avatar variant="2xl" name="" abbr="MM" picture={null} />
                    <div className="mt-7">
                        <Input
                            variant="simple"
                            value={userName}
                            onChange={onUserNameChanged}
                            type="text"
                            placeholder="Full Name"
                            fullWidth
                            showLabel
                        />
                        <Input
                            variant="simple"
                            type="email"
                            value={userEmail}
                            onChange={onUserEmailChanged}
                            placeholder="Email Address"
                            containerClassName="mt-3"
                            fullWidth
                            showLabel
                        />
                        <Input
                            variant="simple"
                            type="text"
                            value={userPhone}
                            onChange={onUserPhoneChanged}
                            placeholder="Phone Number"
                            containerClassName="mt-3"
                            fullWidth
                            showLabel
                        />
                        <Button variant="wide-primary" onClick={saveChanges} className="mt-16">
                            Save
                        </Button>
                    </div>
                </div>
            </SubPage>
        </React.Fragment>
    );
};

export default AccountSettingSubPage;

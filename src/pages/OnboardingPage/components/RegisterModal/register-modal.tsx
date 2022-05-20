import { Button, Input, Modal, SlidingModal } from "components/shared";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { setUserInformation } from "store/actions/user.actions";
import { TRegisterModalProps } from "./types";

const RegisterModal: React.FC<TRegisterModalProps> = ({ isOpen, setIsOpen, setIsSuccessModalOpen }) => {
    const dispatch = useDispatch();
    const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

    const [userName, setUserName] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userEmail, setUserEmail] = useState("");

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
        setTimeout(() => setIsSuccessModalOpen(true), 200);
        setIsOpen(false);
    };

    const registerModalContent = (
        <div className="pt-[35px] mx-5 pb-[30px] min-w-[350px]">
            <h2 className="text-title-2 text-mono-ink font-bold">Register</h2>
            <p className="text-medium-16 text-mono-ink-light mt-3 max-w-[350px]">
                We use this information to facilitate transactions on this application
            </p>
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
                <Button variant="wide-primary" onClick={saveChanges} className="mt-16" fullWidth>
                    Register
                </Button>
            </div>
        </div>
    );

    return isMobile ? (
        <SlidingModal show={isOpen} onClose={() => setIsOpen(false)}>
            {registerModalContent}
        </SlidingModal>
    ) : (
        <Modal show={isOpen} onClose={() => setIsOpen(false)}>
            {registerModalContent}
        </Modal>
    );
};

export default RegisterModal;

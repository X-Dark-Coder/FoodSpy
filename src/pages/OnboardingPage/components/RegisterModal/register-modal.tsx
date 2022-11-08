import { Button, Input, Modal, SlidingModal } from "components/shared";
import { useEffect, useRef, useState } from "react";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { setUserInformation } from "store/actions/user.actions";
import { TFormError, TRegisterModalProps } from "./types";

const RegisterModal: React.FC<TRegisterModalProps> = ({ isOpen, setIsOpen, setIsSuccessModalOpen }) => {
    const dispatch = useDispatch();
    const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });

    const [userName, setUserName] = useState("");
    const [userPhone, setUserPhone] = useState("");
    const [userEmail, setUserEmail] = useState("");

    const timer = useRef<any>(null);
    const [errors, setErrors] = useState<TFormError[]>([]);

    useEffect(() => {
        if (userName !== "" || userPhone !== "" || userEmail !== "") onInputChange();
    }, [userName, userPhone, userEmail]);

    const onUserNameChanged = (e: React.ChangeEvent<HTMLInputElement>) => setUserName(e.target.value);
    const onUserEmailChanged = (e: React.ChangeEvent<HTMLInputElement>) => setUserEmail(e.target.value);
    const onUserPhoneChanged = (e: React.ChangeEvent<HTMLInputElement>) => setUserPhone(e.target.value);

    const checkError = (id: string, msg: string, condition: boolean) => {
        if (condition) {
            if (!errors.find(err => err.id === id)) {
                setErrors(old => ([{ id, msg }, ...old]));
            }
        } else {
            setErrors(old => old.filter(err => err.id !== id));
        }
    };

    const renderError = (id: string) => {
        const err = errors.find(err => err.id === id);
        if (err) return (
            <li className="text-[14px] text-accent-redd-shade-10 list-none pl-4 pt-2">
                {err.msg}
            </li>
        );
        return null;
    };

    const onInputChange = () => {
        if (timer.current) clearTimeout(timer.current);
        timer.current = setTimeout(() => {

            let dotSection: any = userEmail.split("@");
            if (dotSection.length == 2) dotSection = dotSection[1];
            else dotSection = false;

            checkError("email", "Email is incorrect", userEmail.length === 0 || !userEmail.includes("@") || !dotSection || !dotSection.includes("."));
            checkError("phone", "Phone number is incorrect", userPhone.length !== 11 || !userPhone.includes("09"));
            checkError("username", "User name must bigger than 6 char", userName.length < 6);
        }, 200);
    };

    const saveChanges = () => {

        if (errors.length !== 0) return;

        dispatch(
            setUserInformation({
                email: userEmail,
                name: userName,
                phone: userPhone
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
                {renderError("username")}

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
                {renderError("email")}

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
                {renderError("phone")}

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

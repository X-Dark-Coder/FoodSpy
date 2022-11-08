export type TFormError = {
    id : string;
    msg : string;
}

export type TRegisterModalProps = {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    setIsSuccessModalOpen: (isOpen: boolean) => void;
};

import React from "react";
import Button from "../Button/button";
import Modal from "../Modal/modal";
import { TAlertModalProps } from "./types";

const AlertModal: React.FC<TAlertModalProps> = ({
    onButtonClick,
    buttonText,
    description,
    title,
    picture: Picture,
    ...rest
}) => {
    return (
        <Modal {...rest}>
            <div className="flex justify-center items-center flex-col py-7 px-5 min-w-[300px] max-w-[400px]">
                <Picture className="w-[200px] h-[200px]"/>
                <h1 className="mt-6 text-mono-ink text-title-3 font-semibold">{title}</h1>
                <p className="mt-3 text-mono-ink-lighter text-small-14 max-w-[80%] text-center">{description}</p>
                {onButtonClick && (
                    <Button variant="wide-primary" onClick={onButtonClick} className="mt-8" fullWidth>
                        {buttonText}
                    </Button>
                )}
            </div>
        </Modal>
    );
};

export default AlertModal;

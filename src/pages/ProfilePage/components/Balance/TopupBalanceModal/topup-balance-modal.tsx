import { Button, Input, Modal } from "components/shared";
import { useState } from "react";
import { TTopupBalanceProps } from "./types";

const TopupBalanceModal: React.FC<TTopupBalanceProps> = ({ isOpen, setIsOpen, topupBalance }) => {
    const [topupValue, setTopupValue] = useState(10);

    const onTopupChanged = (e: React.ChangeEvent<HTMLInputElement>) => {
        setTopupValue(Number(e.target.value));
    };

    return (
        <Modal show={isOpen} onClose={() => setIsOpen(false)}>
            <div className="flex justify-start items-start flex-col px-5 py-6">
                <h3 className="font-semibold text-title-3 text-mono-ink">Topup Balance</h3>
                <Input
                    containerClassName="mt-6"
                    variant="simple"
                    type="number"
                    value={topupValue}
                    onChange={onTopupChanged}
                    placeholder="Nominal"
                    min={10}
                    showLabel
                />
                <span className="text-mono-ink-light text-small mt-7">*minimum topup balance : $10</span>
                <Button variant="wide-primary" onClick={() => topupBalance(topupValue)} className="mt-[46px]">
                    Topup
                </Button>
            </div>
        </Modal>
    );
};

export default TopupBalanceModal;

import { ReactComponent as BigWaletIcon } from "assets/icons/Big Walet.svg";
import classNames from "classnames";
import { Button } from "components/shared";
import AlertModal from "components/shared/AlertModal/alert-modal";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import TopupBalanceModal from "./TopupBalanceModal/topup-balance-modal";
import { ReactComponent as OrderSuccess } from "assets/img/order-success.svg";
import { useNavigate } from "react-router-dom";
import { useTypedSelector } from "hooks/useTypedSelector";
import { setWalletCredit } from "store/actions/user.actions";

const Balance: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isMobile = useMediaQuery({ query: "(max-width: 820px)" });
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [showSuccessModal, setShowSuccessModal] = useState(false);
    const walletCredit = useTypedSelector((state) => state.user.walletCredit);

    const containerClasses = classNames(
        "bg-accent-cyan-tint-40 rounded-lg py-3 px-4 flex justify-between items-center",
        {
            "w-[335px]": !isMobile,
            "w-full": isMobile,
        }
    );

    const topupBalance = (value: number) => {
        if (value >= 10) dispatch(setWalletCredit(value));
        setIsModalOpen(false);
        setTimeout(() => {
            setShowSuccessModal(true);
        }, 250);
    };

    const backToShop = () => {
        setShowSuccessModal(false);
        navigate("/home");
    };

    return (
        <React.Fragment>
            <div className={containerClasses}>
                <div className="flex justify-start items-center">
                    <BigWaletIcon className="mr-3" />
                    <div className="flex justify-between items-start flex-col">
                        <span className="text-accent-cyan text-[12px] whitespace-nowrap">Digifood Balance</span>
                        <span className="text-large font-semibold text-accent-cyan">${walletCredit}</span>
                    </div>
                </div>
                <Button variant="small-primary" onClick={() => setIsModalOpen(true)}>
                    Topup
                </Button>
            </div>

            <TopupBalanceModal isOpen={isModalOpen} setIsOpen={setIsModalOpen} topupBalance={topupBalance} />

            <AlertModal
                title="Topup Success"
                description="Congratulations, the balance has been successfully added to your account."
                onClose={() => setShowSuccessModal(false)}
                picture={OrderSuccess}
                show={showSuccessModal}
                buttonText="Go Shopping!"
                onButtonClick={backToShop}
            />
        </React.Fragment>
    );
};

export default Balance;

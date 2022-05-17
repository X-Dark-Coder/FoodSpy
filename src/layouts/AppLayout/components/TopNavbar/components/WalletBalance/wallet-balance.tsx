import { ReactComponent as WalletIcon } from "assets/icons/Wallet.svg";
import { useTypedSelector } from "hooks/useTypedSelector";

const WalletBalance: React.FC = () => {
    const walletCredit = useTypedSelector(state => state.user.walletCredit);

    return (
        <div className="rounded-[30px] bg-accent-cyan-tint-40 flex justify-center items-center py-[5px] px-3 h-[32px]">
            <WalletIcon />
            <span className="text-accent-cyan text-medium font-semibold ml-1">${walletCredit}</span>
        </div>
    );
};

export default WalletBalance;

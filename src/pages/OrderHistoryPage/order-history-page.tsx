import { PageContainer } from "layouts";
import { Order } from "components";
import { useTypedSelector } from "hooks/useTypedSelector";

const OrderHistoryPage: React.FC = () => {
    const orders = useTypedSelector(state => state.user.orderHistory);

    const renderOrders = () => {
        return orders.map(order => <Order {...order} />);
    };

    return (
        <PageContainer>
            <main className="w-full px-6">
                <div className="w-full px-4 pt-6 pb-4 sm:py-6 flex justify-center items-center">
                    <h3 className="text-large sm:text-title-3 font-semibold text-mono-ink">Order History</h3>
                </div>
                <div className="grid gap-5 grid-cols-[1fr] bp1070:grid-cols-[repeat(2,1fr)] bp1390:grid-cols-[repeat(3,1fr)] 2xl:grid-cols-[repeat(auto-fill,_335px)]">
                    {renderOrders()}
                </div>
            </main>
        </PageContainer>
    );
};

export default OrderHistoryPage;

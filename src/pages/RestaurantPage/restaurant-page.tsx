import PageContainer from "containers/PageContainer/page-container";
import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { FoodDetail, Header, PopularMenu, RightFromOvensMenu } from "./components";

const RestaurantPage: React.FC = () => {
    const { restaurantId, productId } = useParams<{ restaurantId: string; productId: string }>();
    
    return (
        <PageContainer>
            <main className="w-full">
                <Header />
                <div className="bg-white md:bg-transparent w-full pb-5 pt-6 md:pb-0 rounded-t-2xl -translate-y-5 md:translate-y-0 md:rounded-none">
                    <PopularMenu />
                    <RightFromOvensMenu />
                </div>
            </main>
            <FoodDetail restaurantId={Number(restaurantId)} id={Number(productId)} />
        </PageContainer>
    );
};

export default RestaurantPage;

import { PageContainer } from "layouts"; 
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { toggleBottomNavbar } from "store/actions/app.actions";
import { CheckoutButton, FoodDetail, Header, PopularMenu, RightFromOvensMenu } from "./components";

const RestaurantPage: React.FC = () => {
    const dispatch = useDispatch();
    const { restaurantId, productId } = useParams<{ restaurantId: string; productId: string }>();
    
    useEffect(() => {
        dispatch(toggleBottomNavbar(false));
    }, []);

    return (
        <PageContainer>
            <main className="w-full">
                <Header />
                <div className="bg-white md:bg-transparent w-full pb-[80px] pt-6 rounded-t-2xl -translate-y-5 md:translate-y-0 md:rounded-none">
                    <PopularMenu />
                    <RightFromOvensMenu />
                </div>
            </main>
            <FoodDetail restaurantId={Number(restaurantId)} id={Number(productId)} />
            <CheckoutButton />
        </PageContainer>
    );
};

export default RestaurantPage;

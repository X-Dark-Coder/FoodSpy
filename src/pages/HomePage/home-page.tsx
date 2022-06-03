import {useNavigate} from "react-router-dom"
import PromoSlider from "components/PromoSlider/promo-slider";
import { PageContainer } from "layouts"; 
import MediaQuery from "react-responsive";
import { TopNavbar } from "layouts/AppLayout/components";
import { AllCategories, NearbyRestaurant, PopularFood } from "./components";
import { SearchInput } from "components/shared";
import { useEffect } from "react";
import { toggleBottomNavbar } from "store/actions/app.actions";
import { useDispatch } from "react-redux";

const HomePage: React.FC = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(toggleBottomNavbar(true));
    }, []);

    return (
        <PageContainer>
            <main className="w-full pb-[100px] md:pb-20">
                <MediaQuery maxWidth={1024}>
                    <TopNavbar />
                </MediaQuery>
                <MediaQuery maxWidth={499}>
                    <div className="flex justify-center items-center w-full mt-[18px] px-5">
                        <SearchInput
                            onSearchClicked={(searchText) => navigate("/search/" + searchText)}
                            locationSearchButton
                            variant="white"
                            type="text"
                            placeholder="Search something"
                        />
                    </div>
                </MediaQuery>
                <PromoSlider desktop/>
                <AllCategories />
                <PopularFood />
                <NearbyRestaurant />
            </main>
        </PageContainer>
    );
};

export default HomePage;

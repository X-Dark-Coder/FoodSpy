import {useNavigate} from "react-router-dom"
import PromoSlider from "components/PromoSlider/promo-slider";
import PageContainer from "containers/PageContainer/page-container";
import MediaQuery from "react-responsive";
import { TopNavbar } from "layouts/AppLayout/components";
import { AllCategories, NearbyRestaurant, PopularFood } from "./components";
import { SearchInput } from "components/shared";

const HomePage: React.FC = () => {

    const navigate = useNavigate();

    return (
        <PageContainer>
            <main className="w-full h-full">
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
                <PromoSlider />
                <AllCategories />
                <PopularFood />
                <NearbyRestaurant />
            </main>
        </PageContainer>
    );
};

export default HomePage;

import { FoodCategory } from "components";
import PromoSlider from "components/PromoSlider/promo-slider";
import { SeeAll } from "components/shared";
import PageContainer from "containers/PageContainer/page-container";
import { AnimatePresence } from "framer-motion";
import { NavLink, Outlet } from "react-router-dom";
import { AllCategories } from "./components";

const HomePage: React.FC = () => {
    return (
        <PageContainer>
            <main className="w-full h-full">
                <PromoSlider />
                <AllCategories />
            </main>
        </PageContainer>
    );
};

export default HomePage;

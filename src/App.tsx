import { Routes, Route, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { AppLayout, SplashScreen } from "layouts";
import {
    AccountSettingSubPage,
    AllCategoriesSubPage,
    CheckoutSubPage,
    HomePage,
    NearbyRestaurantSubPage,
    NotFoundPage,
    OnboardingPage,
    PopularFoodSubPage,
    ProfilePage,
    RestaurantPage,
    SearchPage,
    WishlistSubPage
} from "pages";
import { useTypedSelector } from "hooks/useTypedSelector";

const App = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [isAppLoaded, setIsAppLoaded] = useState(false);
    const userAccount = useTypedSelector((state) => state.user.account);

    useEffect(() => {
        setTimeout(() => {
            if (!userAccount) navigate("/welcome");
            else {
                if (location.pathname.split("/")[1].length === 0) {
                    navigate("/home");
                }
            }
            setIsAppLoaded(true);
        }, 3000);
    }, []);

    const routes = (
        <Routes location={location} key={location.pathname.split("/")[1]}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/all-categories" element={<AllCategoriesSubPage />} />
            <Route path="/popular-food" element={<PopularFoodSubPage />} />
            <Route path="/nearby-restaurant" element={<NearbyRestaurantSubPage />} />
            <Route path="/search">
                <Route path=":search" element={<SearchPage />} />
                <Route path="" element={<SearchPage />} />
            </Route>
            <Route path="/restaurant">
                <Route path=":restaurantId/product/:productId" element={<RestaurantPage />} />
                <Route path=":restaurantId" element={<RestaurantPage />} />
            </Route>
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/checkout/:restaurantId" element={<CheckoutSubPage />} />
            <Route path="/wishlist" element={<WishlistSubPage />} />
            <Route path="/account" element={<AccountSettingSubPage />} />
            <Route path="/welcome" element={<OnboardingPage />} />
            <Route path="/*" element={<NotFoundPage />} />
        </Routes>
    );

    return (
        <div className="App">
            <AppLayout>
                <AnimatePresence exitBeforeEnter>{isAppLoaded ? routes : <SplashScreen />}</AnimatePresence>
            </AppLayout>
        </div>
    );
};

export default App;

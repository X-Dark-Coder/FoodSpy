import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { AppLayout, SplashScreen } from "layouts";
import {
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
} from "pages";

const App = () => {
    const location = useLocation();
    const [isAppLoaded, setIsAppLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsAppLoaded(true), 1000);
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

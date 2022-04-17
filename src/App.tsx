import { Routes, Route, useLocation } from "react-router-dom";
import { AppLayout, SplashScreen } from "layouts";
import { AllCategoriesSubPage, HomePage, OnboardingPage } from "pages";
import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const App = () => {
    const location = useLocation();
    const [isAppLoaded, setIsAppLoaded] = useState(false);

    useEffect(() => {
        setTimeout(() => setIsAppLoaded(true), 1000);
    }, []);

    const routes = (
        <Routes location={location} key={location.pathname}>
            <Route path="/home" element={<HomePage />} />
            <Route path="/all-categories" element={<AllCategoriesSubPage />} />
            <Route path="/welcome" element={<OnboardingPage />} />
            <Route path="/*" element={<HomePage />} />
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

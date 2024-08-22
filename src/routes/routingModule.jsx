import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layout";
import { Routes as ROUTES } from "../configs/routes";
import LandingPage from "../pages/landingPage";

const RoutingModule = () => {
    return (
        <BrowserRouter>
            {/* <Suspense fallback={<Loader />}> */}
                <Routes>
                    <Route path={ROUTES.HOME} element={<MainLayout />}>
                       <Route path={ROUTES.HOME} element={<LandingPage />}>
                      
                    </Route>
                    </Route>
                </Routes>
        </BrowserRouter>
    );
};

export default RoutingModule;

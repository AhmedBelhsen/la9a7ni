import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Routes as ROUTES } from "../configs/routes";

import {MainLayout as Vaccination}  from "../layout";
import LandingPage from "../pages/landingPage";

const RoutingModule = () => {
    return (
        <BrowserRouter>
            
                <Routes>
                    <Route path={ROUTES.HOME} element={<LandingPage />} />
                    <Route path={ROUTES.GETVACCINATED} element={<Vaccination />} />
                </Routes>
            
        </BrowserRouter>
    );
};

export default RoutingModule;

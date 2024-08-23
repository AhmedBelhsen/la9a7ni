import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "../layout";
import { Routes as ROUTES } from "../configs/routes";
import LandingPage from "../pages/landingPage";
import FindHospital from "../pages/FindHospital";
import FindVet from "../pages/FindVet";

const RoutingModule = () => {
    return (
        <BrowserRouter>
            {/* <Suspense fallback={<Loader />}> */}
                <Routes>
                    <Route path={ROUTES.HOME} element={<MainLayout />}/>
                       <Route path={ROUTES.HOME} element={<LandingPage />}/>
                       <Route path="/findvet" element={<FindVet/>}/>
                       <Route path="/findhospital" element={<FindHospital/>}/>

                </Routes>
        </BrowserRouter>
    );
};

export default RoutingModule;

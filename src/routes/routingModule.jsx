import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Routes as ROUTES } from "../configs/routes";

import {MainLayout} from "../layout/index";
import LandingPage from '../pages/landingPage'

import  Login  from '../pages/Login';
import Register from '../pages/Register';

const RoutingModule = () => {
    return (
        <BrowserRouter>
            
                <Routes>
                    <Route path={ROUTES.HOME} element={<LandingPage />} />
                    <Route path={ROUTES.GETVACCINATED} element={<MainLayout />} />

                    <Route path={ROUTES.LOGIN} element={<Login />} />
                    <Route path={ROUTES.SIGNUP} element={<Register />} />
                    <Route path={ROUTES.PETVAC} element={<h1>petVac</h1>} />
                    <Route path={ROUTES.HUMANVAC} element={<h1>humanVac</h1>} />
                </Routes>
            
        </BrowserRouter>
    );
};

export default RoutingModule;

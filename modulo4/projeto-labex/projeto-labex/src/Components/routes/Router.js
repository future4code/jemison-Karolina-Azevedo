import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import  HomePage  from '../pages/homepage/HomePage';
import {ListTripsPage} from '../pages/listtrip/ListTripsPage';
import {ApplicationFormPage} from '../pages/applicationform/ApplicationFormPage';
import { LoginPage } from "../pages/login/LoginPage";
import {AdminHomePage} from '../pages/admin/AdminHomePage';
import {CreateTripPage} from '../pages/createtrip/CreateTripPage';
import {TripDetailsPage} from '../pages/tripdetails/TripDetailsPage';
import {Erro} from '../pages/erro/Erro';



const Router = () => {

    return (
        <BrowserRouter>
            <Routes>
                <Route index element= {<HomePage/>}  />
                <Route path="/trips/list" element= {<ListTripsPage/>}/>
                <Route path="/trips/application" element= {<ApplicationFormPage/>}/>
                <Route path="/login" element= {<LoginPage/>}/>
                <Route path="/admin/trips/list" element={<AdminHomePage/>}/>
                <Route path="/admin/trips/create" element= {<CreateTripPage/>}/>
                <Route path="/admin/trips/:id" element= {<TripDetailsPage/>}/>
                <Route path="*" element= {<Erro/>}/>
            </Routes>
        </BrowserRouter>
    )
}

export default Router
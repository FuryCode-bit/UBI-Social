import React, { useEffect, useState } from 'react'
import {
    BrowserRouter,
    Route,
    Routes,
    Navigate,
    Router,
} from "react-router-dom"

import HomePage from './pages/mainpage/main';
import Login from './pages/loginpage/login';
import Register from './components/register/Register';
import Perfil from "./pages/profilepage/profile";

import { useStateValue } from "./stateProvider";
import Admin from './pages/adminpage/admin';

const AppRoutes = () => {
    const [{ user }, dispatch] = useStateValue();

    
    return (
        //Falta meter a rota segura
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomePage id={1}/>} />
                <Route path="/login" element={< Login />} />
                <Route path="/register" element={< Register />} />
                <Route path="/profile" element={< Perfil info={user}/>} />
                <Route path="/admin" element={< Admin info={user}/>} />
            </Routes>
        </BrowserRouter>
    );
};

export default AppRoutes;
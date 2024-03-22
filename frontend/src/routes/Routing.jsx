import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import AboutUs from "../pages/AboutUs";
import Policy from "../pages/Policy";
import Products from '../pages/Products';
import News from '../pages/News';
import Home from '../pages/Home';
import App from '../App.js';
// Import your components for each route

const AppRouting = () => {
    return (
        <BrowserRouter>
            <Routes>
    
              <Route path="/" element={ <App/> } />
              <Route path="products" element={ <Policy/>} />
              <Route path="news" element={ <News/>} />
              <Route path="policy" element={ <Policy/>} />
              <Route path="about_us" element={ <AboutUs/>} />
    
            </Routes>
        </BrowserRouter>
    );
};

export default AppRouting;
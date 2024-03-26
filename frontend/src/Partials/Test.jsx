import React from 'react';
import { BrowserRouter, HashRouter, Route, Routes } from 'react-router-dom';
import Home from '../pages/Home.jsx';
import News from '../pages/News.jsx';
import AboutUs from '../pages/AboutUs.jsx';
import Error404 from '../pages/Error404.jsx';

function Test() {
    return (
        <HashRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="news" element={<News />} />
            <Route path="about_us" element={<AboutUs />} />
            <Route path='*' element={<Error404/>} ></Route>
        </Routes>
</HashRouter>

        
    );

        {/* <HashRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="products" element={<Products />} />
                <Route path="news" element={<News />} />
                <Route path="about_us" element={<AboutUs />} />
            </Routes>
        </HashRouter>  */}

        // <MemoryRouter>
        //     <Routes>
        //         <Route path="/" element={<Home />} />
        //         <Route path="products" element={<Products />} />
        //         <Route path="news" element={<News />} />
        //         <Route path="about_us" element={<AboutUs />} />
        //     </Routes>
        // </MemoryRouter>

        
    
}

export default Test;
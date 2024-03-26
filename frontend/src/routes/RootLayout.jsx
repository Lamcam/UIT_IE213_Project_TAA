import React from 'react';
import Header from '../partials/Header';
import Footer from '../partials/Footer';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
    return (
        <div className='root-layout'>
            <Header />
                
            <main>
                <div className="content" >
                    <Outlet />
                </div>
            </main>

            <Footer />
        </div>
    );
}
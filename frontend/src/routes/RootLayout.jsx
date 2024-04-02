import React from 'react';
import Header from '../partials/Header/Header';
import Footer from '../partials/Footer/Footer';
import { Outlet } from 'react-router-dom';
import 'index.scss';

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
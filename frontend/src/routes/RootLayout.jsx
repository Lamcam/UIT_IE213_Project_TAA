import React from 'react';
import Header from '../Partials/Header';
import Footer from '../Partials/Footer';
import { Outlet } from 'react-router-dom';

export default function RootLayout() {
    return (
        <>
            <Header />
                <main>
                    <div className="content" >
                        <Outlet />
                    </div>
                </main>
            <Footer />
        </>
    );
}
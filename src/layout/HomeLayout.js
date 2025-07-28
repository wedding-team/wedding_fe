import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import {Outlet} from "react-router-dom";

const HomeLayout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Navbar/>
            <main className="bg-slate-100/70">
                <Outlet />
            </main>
            <Footer/>
        </div>
    );
};

export default HomeLayout;
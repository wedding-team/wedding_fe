import React from 'react';
import Navbar from '../Component/common/Navbar';
import Footer from '../Component/common/Footer';
import HeroSection from '../Component/sections/HeroSection';
import FeaturesSection from '../Component/sections/FeaturesSection';
import ProcessSection from '../Component/sections/ProcessSection';
import CallToAction from '../Component/sections/CallToAction';
import StartSection from '../Component/sections/StartSection';

const Home = () => {
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <Navbar/>
            <HeroSection/>

            <main className="max-w-7xl mx-auto w-full px-4 lg:px-8 py-16 flex-1">
                <StartSection/>
                <FeaturesSection/>
                <ProcessSection/>
                <CallToAction/>
            </main>

            <Footer/>
        </div>
    );
};

export default Home;
import React from 'react';
import Navbar from '../components/common/Navbar';
import Footer from '../components/common/Footer';
import HeroSection from '../components/sections/home/HeroSection';
import FeaturesSection from '../components/sections/home/FeaturesSection';
import ProcessSection from '../components/sections/home/ProcessSection';
import CallToAction from '../components/sections/home/CallToAction';
import StartSection from '../components/sections/home/StartSection';

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
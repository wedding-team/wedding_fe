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
        <div className="min-h-screen bg-slate-100/70 flex flex-col">
            <Navbar/>
            <main className="">
                <HeroSection/>
                <div className=" px-4 lg:px-8 py-8 flex-1">
                    <div className="max-w-7xl mx-auto w-full">
                        <FeaturesSection/>
                        <StartSection/>
                    </div>
                </div>
                <div className=" px-4 lg:px-8 py-16 flex-1">
                    <div className="max-w-7xl mx-auto w-full">
                        <ProcessSection/>
                        <CallToAction/>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
};

export default Home;
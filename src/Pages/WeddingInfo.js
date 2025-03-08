import React from 'react';
import WeddingHeader from '../Component/sections/wedding-info/WeddingHeader';
import WeddingForm from '../Component/sections/wedding-info/WeddingForm';

const WeddingInfo = () => {
    return (
        <div className="min-h-screen bg-gradient-to-b from-rose-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-6xl mx-auto">
                <WeddingHeader />
                <WeddingForm />
            </div>
        </div>
    );
};

export default WeddingInfo;
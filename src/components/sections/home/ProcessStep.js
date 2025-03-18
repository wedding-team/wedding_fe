import React from 'react';

const ProcessStep = ({ stepNumber, title, description }) => {
    return (
        <div className="w-full md:w-64 p-6 bg-white rounded-xl shadow-md">
            <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-pink-600">{stepNumber}</span>
            </div>
            <h3 className="text-lg font-semibold mb-2">{title}</h3>
            <p className="text-gray-600 text-sm">{description}</p>
        </div>
    );
};

export default ProcessStep;
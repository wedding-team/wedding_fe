import React from 'react';

const FeatureCard = ({ icon, title, description }) => {
    return (
        <div
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] flex flex-col"
        >
            <div className="bg-gradient-to-br from-primary-100 to-primary-200 p-4 flex items-center justify-center">
                {icon}
            </div>
            <div className="p-6">
                <h3 className="text-center text-xl font-semibold text-gray-800 mb-3">{title}</h3>
                <p className="text-center text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;
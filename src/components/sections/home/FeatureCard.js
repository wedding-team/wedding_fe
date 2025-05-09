import React from 'react';

const FeatureCard = ({image, title, description}) => {
    return (
        <div
            className="bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] flex flex-col"
        >
            <img src={image} alt="" className="w-full h-64 object-cover object-top"/>
            <div className="p-6">
                <h3 className="text-center text-xl font-semibold text-gray-800 mb-3">{title}</h3>
                <p className="text-center text-gray-600">{description}</p>
            </div>
        </div>
    );
};

export default FeatureCard;
import React from 'react';

const StartCard = ({image, title, description}) => {
    return (
        <div
            className="bg-white rounded-xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:translate-y-[-5px] flex flex-col">
            <img src={image} alt="" className="w-80 mx-auto"/>
            <div className="p-4 flex flex-col flex-1">
                <h3 className="text-center font-openSans text-3xl uppercase font-bold text-red-700 mb-3">
                    {title}
                </h3>
                <p className="text-center text-gray-700 mt-auto">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default StartCard;
import React from 'react';
import { LuUpload } from "react-icons/lu";

const FileUpload = ({ label, name, previewUrl, onChange, accept, placeholderIcon, bgColor, textColor, rounded = "circle", size = "w-32 h-32" }) => {
    return (
        <div className="flex flex-col items-center bỏd">
            <div
                className={`${size} bg-gray-200 overflow-hidden mb-3 flex items-center justify-center border-2
                ${rounded === "circle" ? "rounded-full" : "rounded-md"}`}
            >
                {previewUrl ? (
                    <img src={previewUrl} alt={label} className="w-full h-full object-cover rounded-md " />
                ) : (
                    placeholderIcon
                )}
            </div>
            <label className={`cursor-pointer ${bgColor} ${textColor} px-4 py-2 rounded-lg flex items-center gap-2`}>
                <LuUpload className="w-4 h-4" />
                {label}
                <input
                    type="file"
                    name={name}
                    onChange={onChange}
                    accept={accept}
                    className="hidden"
                />
            </label>
        </div>
    );
};

export default FileUpload;

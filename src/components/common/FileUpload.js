import React, { useRef } from 'react';
import { TbCameraPlus } from "react-icons/tb";
const FileUpload = ({
                        name,
                        previewUrl,
                        onChange,
                        accept,
                        placeholderIcon,
                        textColor,
                        rounded = "circle",
                        size = "w-32 h-32",
                        previewImage
                    }) => {
    const fileInputRef = useRef(null);

    const handleIconClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    return (
        <div className="relative flex flex-col items-center">
            <div
                className={`${size} bg-gray-200 overflow-hidden mb-3 flex items-center justify-center 
                ${rounded === "circle" ? "rounded-full" : "rounded-md"}`}
            >
                {previewUrl ? (
                    <img src={previewUrl} alt={'upload'} className={`${previewImage}`} />
                ) : (
                    placeholderIcon
                )}
            </div>
            <div
                onClick={handleIconClick}
                className={`absolute bottom-6 cursor-pointer bg-transparent ${textColor} rounded-lg flex items-center gap-2`}
            >
                <TbCameraPlus className="w-6 h-6"/>
                <input
                    ref={fileInputRef}
                    type="file"
                    name={name}
                    onChange={onChange}
                    accept={accept}
                    className="hidden"
                />
            </div>
        </div>
    );
};

export default FileUpload;
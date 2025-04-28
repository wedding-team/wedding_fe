import React, {useRef} from 'react';
import {TbCameraPlus} from "react-icons/tb";

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
        <div className="relative flex flex-col max-sm:items-center">
            <div
                className={`relative ${size} bg-gray-200 overflow-hidden mb-3 flex items-center justify-center 
                ${rounded === "circle" ? "rounded-full" : "rounded-md"}`}
            >
                {previewUrl ? (
                    <img src={previewUrl} alt={'upload'} className={`${previewImage}`}/>
                ) : (
                    placeholderIcon
                )}

                <div
                    onClick={handleIconClick}
                    className={`absolute bottom-0 left-0 w-full text-center py-1 cursor-pointer bg-black bg-opacity-50 hover:bg-opacity-60 ${textColor}`}
                >
                    <div className="flex items-center justify-center py-1 text-sm text-white">
                        <TbCameraPlus className="inline-block w-5 h-5 mr-1"/>
                        <p>Tải ảnh lên </p>
                    </div>

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
        </div>
    );
};

export default FileUpload;

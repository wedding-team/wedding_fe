import React from 'react';
import { Upload } from 'lucide-react';

const FileUpload = ({ label, name, previewUrl, onChange, accept, placeholderIcon, bgColor, textColor }) => {
    return (
        <div className="flex flex-col items-center">
            <div className="w-32 h-32 rounded-full bg-gray-200 overflow-hidden mb-3 flex items-center justify-center">
                {previewUrl ? (
                    <img src={previewUrl} alt={label} className="w-full h-full object-cover" />
                ) : (
                    placeholderIcon
                )}
            </div>
            <label className={`cursor-pointer ${bgColor} ${textColor} px-4 py-2 rounded-lg flex items-center gap-2`}>
                <Upload className="w-4 h-4" />
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
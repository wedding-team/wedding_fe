import React from 'react';

const InputField = ({ label, icon, name, formik, placeholder, type = 'text' }) => {
    return (
        <div>
            <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                {icon}
                {label}
            </label>
            <input
                type={type}
                name={name}
                value={formik.values[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full px-3 py-2 border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500 ${
                    formik.touched[name] && formik.errors[name] ? 'border-red-500' : ''
                }`}
                placeholder={placeholder}
            />
            {formik.touched[name] && formik.errors[name] && (
                <p className="text-red-500 text-sm mt-1">{formik.errors[name]}</p>
            )}
        </div>
    );
};

export default InputField;
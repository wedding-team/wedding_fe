import React from 'react';

const TextAreaField = ({ color, label, icon, name, formik, placeholder, rows = 3 }) => {
    return (
        <div>
            <label className="text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
                {icon}
                {label}
            </label>
            <textarea
                name={name}
                value={formik.values[name]}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                rows={rows}
                className={`w-full px-3 py-2 border outline-none border-gray-300 rounded-md focus:ring-1
        ${formik.touched[name] && formik.errors[name] ? 'border-red-500' : ''}
        ${color === 'indigo' ? 'focus:ring-indigo-500 focus:border-indigo-500' : 'focus:ring-rose-500 focus:border-rose-500'}`}
                placeholder={placeholder}
            />
            {formik.touched[name] && formik.errors[name] && (
                <p className="text-red-500 text-sm mt-1">{formik.errors[name]}</p>
            )}
        </div>
    );
};

export default TextAreaField;
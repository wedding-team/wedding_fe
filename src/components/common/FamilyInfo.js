import React from 'react';

const FamilyInfo = ({ formik, prefix }) => {
    return (
        <div className="p-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
                {[
                    { label: `Ba ${prefix === 'bride' ? 'cô dâu' : 'chú rể'}`, name: `${prefix}_dad` },
                    { label: `Mẹ ${prefix === 'bride' ? 'cô dâu' : 'chú rể'}`, name: `${prefix}_mom` },
                ].map(({ label, name }) => (
                    <div key={name}>
                        <label className="block text-gray-600">{label}</label>
                        <input
                            type="text"
                            name={name}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            value={formik.values[name]}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched[name] && formik.errors[name] && (
                            <p className="text-red-500 text-sm">{formik.errors[name]}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FamilyInfo;
import React from 'react';
import FileUpload from "./FileUpload";

const BankInfo = ({ formik, prefix }) => {
    return (
        <div className="p-4 space-y-4">
            <div className="grid grid-cols-2 gap-4">
                {[
                    { label: "Tên ngân hàng", name: `${prefix}_bank_name` },
                    { label: "Số tài khoản", name: `${prefix}_bank_account` },
                    { label: "Tên chi nhánh", name: `${prefix}_bank_branch` },
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

            <div>
                <label className="block text-gray-600 mb-2">Mã QR ngân hàng</label>
                <FileUpload
                    previewImage="w-full h-full object-contain"
                    name={`${prefix}_qr`}
                    rounded="square"
                    size="w-52 h-52"
                    previewUrl={formik.values[`${prefix}_qr_url`]}
                    onChange={(event) => {
                        const file = event.currentTarget.files[0];
                        if (file) {
                            formik.setFieldValue(`${prefix}_qr`, file);
                            formik.setFieldValue(`${prefix}_qr_url`, URL.createObjectURL(file));
                        }
                    }}
                    accept="image/*"
                    placeholderIcon={<span className="text-gray-500">Chưa có ảnh</span>}
                    textColor="text-white"
                />
            </div>
        </div>
    );
};

export default BankInfo;
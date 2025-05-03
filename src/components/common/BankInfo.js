import React, { useEffect, useState } from 'react';
import FileUpload from "./FileUpload";
import BankApi from "../../apis/BankApi";
import SelectInput from "./SelectInput";

const BankInfo = ({ formik, prefix }) => {
    const [banks, setBanks] = useState([]);

    useEffect(() => {
        const fetchBanks = async () => {
            try {
                const res = await BankApi.getAllBanks();
                setBanks(res.data.data);
            } catch (error) {
                console.error(error);
            }
        };
        fetchBanks();
    }, []);

    const bankOptions = banks.map(bank => ({
        value: bank.shortName,
        label: bank.shortName
    }));

    return (
        <div className="p-4 space-y-4 bg-white">
            <div className="flex flex-col sm:flex-row justify-between gap-3">
                <div>
                    <label className="block text-gray-600 mb-1">Mã QR ngân hàng</label>
                    <FileUpload
                        previewImage="w-full h-full object-contain"
                        name={`${prefix}_qr`}
                        rounded="square"
                        size="w-52 h-52"
                        previewUrl={formik.values[`${prefix}_qr_url`] }
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
                <div className="flex-1 space-y-2 md:space-y-3">
                    <div>
                        <label className="block text-gray-600 mb-1">Tên ngân hàng</label>
                        <SelectInput
                            name={`${prefix}_bank_name`}
                            value={formik.values[`${prefix}_bank_name`]}
                            onChange={formik.handleChange}
                            options={bankOptions}
                            placeholder="-- Chọn ngân hàng --"
                        />
                        {formik.touched[`${prefix}_bank_name`] && formik.errors[`${prefix}_bank_name`] && (
                            <p className="text-red-500 text-sm">{formik.errors[`${prefix}_bank_name`]}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-1">Số tài khoản</label>
                        <input
                            type="text"
                            name={`${prefix}_account_number`}
                            value={formik.values[`${prefix}_account_number`]}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                        {formik.touched[`${prefix}_account_number`] && formik.errors[`${prefix}_account_number`] && (
                            <p className="text-red-500 text-sm">{formik.errors[`${prefix}_account_number`]}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-gray-600 mb-1">Tên tài khoản</label>
                        <input
                            type="text"
                            name={`${prefix}_account_name`}
                            value={formik.values[`${prefix}_account_name`]}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                        />
                        {formik.touched[`${prefix}_account_name`] && formik.errors[`${prefix}_account_name`] && (
                            <p className="text-red-500 text-sm">{formik.errors[`${prefix}_account_name`]}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BankInfo;

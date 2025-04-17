import React, { useState } from 'react';
import FileUpload from "../../components/common/FileUpload";
import BankInfo from "../../components/common/BankInfo";

function GroomForm({ formik }) {
    const [showFamily, setShowFamily] = useState(false);
    const [showBankInfo, setShowBankInfo] = useState(false);

    return (
        <div className="md:px-4 space-y-4">
            <h2 className="max-md:text-lg md:text-2xl text-center font-semibold text-gray-700">Thông tin chú rể</h2>
            <div>
                <FileUpload
                    previewImage="max-w-[400px] h-[300px] object-contain object-top"
                    name="groom_avatar"
                    rounded="square"
                    size=""
                    previewUrl={formik.values.groom_avatar_url}
                    onChange={(event) => {
                        const file = event.currentTarget.files[0];
                        if (file) {
                            formik.setFieldValue("groom_avatar", file);
                            formik.setFieldValue("groom_avatar_url", URL.createObjectURL(file));
                        }
                    }}
                    accept="image/*"
                    placeholderIcon={<span className="text-gray-500">Chưa có ảnh</span>}
                    textColor="text-white"
                />
            </div>
            <div>
                <label className="block text-gray-600">Tên chú rể</label>
                <input
                    type="text"
                    name="groom_name"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    value={formik.values.groom_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.groom_name && formik.errors.groom_name && (
                    <p className="text-red-500 text-sm">{formik.errors.groom_name}</p>
                )}
            </div>
            <div>
                <label className="block text-gray-600">Địa chỉ</label>
                <input
                    type="text"
                    name="groom_address"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    value={formik.values.groom_address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.groom_address && formik.errors.groom_address && (
                    <p className="text-red-500 text-sm">{formik.errors.groom_address}</p>
                )}
            </div>
            <div>
                <label className="block text-gray-600">Giới thiệu chú rể</label>
                <textarea
                    name="groom_bio"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    rows={4}
                    value={formik.values.groom_bio}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.groom_bio && formik.errors.groom_bio && (
                    <p className="text-red-500 text-sm">{formik.errors.groom_bio}</p>
                )}
            </div>
            <div className="border border-gray-200 rounded-md overflow-hidden">
                <button
                    type="button"
                    className="w-full p-3 bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
                    onClick={() => setShowFamily(!showFamily)}
                >
                    <span className="font-medium">Thông tin gia đình chú rể</span>
                    <span>{showFamily ? '▲' : '▼'}</span>
                </button>
                {showFamily && (
                    <div className="grid grid-cols-2 gap-4 p-4">
                        {[{ label: "Ba chú rể", name: "groom_dad" }, { label: "Mẹ chú rể", name: "groom_mom" }].map(({ label, name }) => (
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
                )}
            </div>
            <div className="border border-gray-200 rounded-md overflow-hidden">
                <button
                    type="button"
                    className="w-full p-3 bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
                    onClick={() => setShowBankInfo(!showBankInfo)}
                >
                    <span className="font-medium">Thông tin ngân hàng</span>
                    <span>{showBankInfo ? '▲' : '▼'}</span>
                </button>

                {showBankInfo && <BankInfo formik={formik} prefix="groom" />}
            </div>
        </div>
    );
}

export default GroomForm;

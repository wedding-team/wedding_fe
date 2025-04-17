import React, {useState} from 'react';
import FileUpload from "../../components/common/FileUpload";
import FamilyInfo from "../../components/common/FamilyInfo";
import BankInfo from "../../components/common/BankInfo";

function BrideForm({formik}) {
    const [showFamily, setShowFamily] = useState(false);
    const [showBankInfo, setShowBankInfo] = useState(false);

    return (
        <div className="md:px-4 space-y-4">
            <h2 className="max-md:text-lg md:text-2xl text-center font-semibold text-gray-700">Thông tin cô dâu</h2>
            <div>
                <FileUpload
                    previewImage="max-w-[400px] h-[300px] object-contain object-top"
                    name="bride_avatar"
                    rounded="square"
                    size=""
                    previewUrl={formik.values.bride_avatar_url}
                    onChange={(event) => {
                        const file = event.currentTarget.files[0];
                        if (file) {
                            formik.setFieldValue("bride_avatar", file);
                            formik.setFieldValue("bride_avatar_url", URL.createObjectURL(file));
                        }
                    }}
                    accept="image/*"
                    placeholderIcon={<span className="text-gray-500">Chưa có ảnh</span>}
                    textColor="text-white"
                />
            </div>
            <div>
                <label className="block text-gray-600">Tên cô dâu</label>
                <input
                    type="text"
                    name="bride_name"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    value={formik.values.bride_name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.bride_name && formik.errors.bride_name && (
                    <p className="text-red-500 text-sm">{formik.errors.bride_name}</p>
                )}
            </div>
            <div>
                <label className="block text-gray-600">Địa chỉ</label>
                <input
                    type="text"
                    name="bride_address"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    value={formik.values.bride_address}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.bride_address && formik.errors.bride_address && (
                    <p className="text-red-500 text-sm">{formik.errors.bride_address}</p>
                )}
            </div>
            <div>
                <label className="block text-gray-600">Giới thiệu cô dâu</label>
                <textarea
                    name="bride_bio"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                    rows={4}
                    value={formik.values.bride_bio}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.bride_bio && formik.errors.bride_bio && (
                    <p className="text-red-500 text-sm">{formik.errors.bride_bio}</p>
                )}
            </div>
            <div className="border border-gray-200 rounded-md overflow-hidden">
                <button
                    type="button"
                    className="w-full p-3 bg-gray-100 hover:bg-gray-200 flex justify-between items-center"
                    onClick={() => setShowFamily(!showFamily)}
                >
                    <span className="font-medium">Thông tin gia đình cô dâu</span>
                    <span>{showFamily ? '▲' : '▼'}</span>
                </button>

                {showFamily && <FamilyInfo formik={formik} prefix="bride"/>}
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

                {showBankInfo && <BankInfo formik={formik} prefix="bride"/>}
            </div>
        </div>
    );
}

export default BrideForm;
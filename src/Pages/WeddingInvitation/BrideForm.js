import React from 'react';
import FileUpload from "../../Component/common/FileUpload";

function BrideForm({ formik }) {
    return (
        <div className="w-1/2 px-4 space-y-4">
            <h2 className="text-3xl text-center font-semibold text-gray-700">Thông tin cô dâu</h2>
            <div>
                <FileUpload
                    label="Tải ảnh cô dâu"
                    name="bride_avatar"
                    size="w-40 h-40"
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
                    bgColor="bg-blue-500"
                    textColor="text-white"
                />
            </div>

            {[
                { label: "Tên cô dâu", name: "bride_name" },
                { label: "Ba cô dâu", name: "bride_dad" },
                { label: "Mẹ cô dâu", name: "bride_mom" },
                { label: "Địa chỉ", name: "bride_address" },
            ].map(({ label, name }) => (
                <div key={name}>
                    <label className="block text-gray-600">{label}</label>
                    <input
                        type="text"
                        name={name}
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                        value={formik.values[name]}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                    />
                    {formik.touched[name] && formik.errors[name] && (
                        <p className="text-red-500 text-sm">{formik.errors[name]}</p>
                    )}
                </div>
            ))}

            <div>
                <label className="block text-gray-600">Giới thiệu cô dâu</label>
                <textarea
                    name="bride_bio"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    value={formik.values.bride_bio}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.bride_bio && formik.errors.bride_bio && (
                    <p className="text-red-500 text-sm">{formik.errors.bride_bio}</p>
                )}
            </div>
            <div>
                <FileUpload
                    label="Tải QR Cô dâu"
                    name="bride_qr"
                    rounded="square"
                    size="w-80 h-80"
                    previewUrl={formik.values.bride_qr_url}
                    onChange={(event) => {
                        const file = event.currentTarget.files[0];
                        if (file) {
                            formik.setFieldValue("bride_qr", file);
                            formik.setFieldValue("bride_qr_url", URL.createObjectURL(file));
                        }
                    }}
                    accept="image/*"
                    placeholderIcon={<span className="text-gray-500">Chưa có ảnh</span>}
                    bgColor="bg-green-500"
                    textColor="text-white"
                />
            </div>
        </div>
    );
}

export default BrideForm;

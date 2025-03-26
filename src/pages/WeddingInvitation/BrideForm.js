import React from 'react';
import FileUpload from "../../components/common/FileUpload";

function BrideForm({ formik }) {
    return (
        <div className="md:px-4 space-y-4">
            <h2 className="max-md:text-lg md:text-2xl text-center font-semibold text-gray-700">Thông tin cô dâu</h2>
            <div>
                <FileUpload
                    previewImage="w-full object-cover"
                    name="bride_avatar"
                    size="w-36 h-36"
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
            <div className="grid grid-cols-2 gap-4">
                {[
                    { label: "Tên cô dâu", name: "bride_name" },
                    { label: "Địa chỉ", name: "bride_address" },
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
            <div className="grid grid-cols-2 gap-4">
                {[
                    { label: "Ba cô dâu", name: "bride_dad" },
                    { label: "Mẹ cô dâu", name: "bride_mom" },
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
            <div>
                <FileUpload
                    previewImage="w-full h-full object-contain"
                    name="bride_qr"
                    rounded="square"
                    size="w-52 h-52"
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
                    textColor="text-white"
                />
            </div>
        </div>
    );
}

export default BrideForm;

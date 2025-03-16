import React from 'react';
import FileUpload from "../../Component/common/FileUpload";

function GroomForm({ formik }) {
    return (
        <div className="w-1/2 px-4 space-y-4">
            <h2 className="text-3xl text-center font-semibold text-gray-700">Thông tin chú rể</h2>
            <div>
                <FileUpload
                    label="Tải ảnh chú rể"
                    name="groom_avatar"
                    size="w-40 h-40"
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
                    bgColor="bg-blue-500"
                    textColor="text-white"
                />
            </div>

            {[
                { label: "Tên chú rể", name: "groom_name" },
                { label: "Ba chú rể", name: "groom_dad" },
                { label: "Mẹ chú rể", name: "groom_mom" },
                { label: "Địa chỉ", name: "groom_address" },
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
                <label className="block text-gray-600">Giới thiệu chú rể</label>
                <textarea
                    name="groom_bio"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
                    rows="4"
                    value={formik.values.groom_bio}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                />
                {formik.touched.groom_bio && formik.errors.groom_bio && (
                    <p className="text-red-500 text-sm">{formik.errors.groom_bio}</p>
                )}
            </div>

            <div>
                <FileUpload
                    label="Tải QR Chú rể"
                    name="groom_qr"
                    rounded="square"
                    size="w-80 h-80"
                    previewUrl={formik.values.groom_qr_url}
                    onChange={(event) => {
                        const file = event.currentTarget.files[0];
                        if (file) {
                            formik.setFieldValue("groom_qr", file);
                            formik.setFieldValue("groom_qr_url", URL.createObjectURL(file));
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

export default GroomForm;

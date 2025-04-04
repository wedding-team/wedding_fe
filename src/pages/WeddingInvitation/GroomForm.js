import React from 'react';
import FileUpload from "../../components/common/FileUpload";

function GroomForm({ formik }) {
    return (
        <div className="md:px-4 space-y-4">
            <h2 className="max-md:text-lg md:text-2xl text-center font-semibold text-gray-700">Thông tin chú rể</h2>
            <div>
                <FileUpload
                    previewImage="w-full object-cover"
                    name="groom_avatar"
                    size="w-36 h-36"
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
            <div className="grid grid-cols-2 gap-4">
                {[
                    {label: "Tên chú rể", name: "groom_name"},
                    {label: "Địa chỉ", name: "groom_address"},
                ].map(({label, name}) => (
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
                    {label: "Ba chú rể", name: "groom_dad"},
                    {label: "Mẹ chú rể", name: "groom_mom"},
                ].map(({label, name}) => (
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
            <div>
                <FileUpload
                    previewImage="w-full h-full object-contain"
                    name="groom_qr"
                    rounded="square"
                    size="w-52 h-52"
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
                    textColor="text-white"
                />
            </div>
        </div>
    );
}

export default GroomForm;

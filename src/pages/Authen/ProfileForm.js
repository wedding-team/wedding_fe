import FileUpload from "../../components/common/FileUpload";
import React from "react";

function ProfileForm({ formik ,onClose}) {
    return (
        <form className="space-y-6 bg-white" onSubmit={formik.handleSubmit}>
            <div className="flex flex-col md:flex-row gap-6 items-center">
                <div className="w-full md:w-1/3 flex flex-col items-center">
                    <FileUpload
                        label="Tải ảnh"
                        name="image"
                        rounded="square"
                        size="w-48 h-48"
                        previewUrl={formik.values?.image_url}
                        onChange={(event) => {
                            const file = event.currentTarget.files[0];
                            if (file) {
                                formik.setFieldValue("image", file);
                                formik.setFieldValue("image_url", URL.createObjectURL(file));
                            }
                        }}
                        accept="image/*"
                        placeholderIcon={<span className="text-gray-500">Chưa có ảnh</span>}
                        bgColor="bg-blue-500"
                        textColor="text-white"
                    />
                </div>
                <div className="w-full md:w-2/3 space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Email</label>
                        <input
                            type="text"
                            name="email"
                            className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm p-3 focus:border-blue-500 focus:ring-blue-300 bg-gray-200 text-gray-600 cursor-not-allowed"
                            placeholder="Nhập email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            disabled
                        />
                    </div>

                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Họ và tên</label>
                        <input
                            type="text"
                            name="name"
                            placeholder="Nhập họ và tên"
                            className="mt-2 block w-full rounded-md border border-gray-300 shadow-sm p-3 focus:border-blue-500 focus:ring-blue-300"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />
                    </div>

                    <div className="flex gap-6 text-sm text-gray-600">
                        <span><strong>Vai trò:</strong> {formik.values.role}</span>
                        <span><strong>Trạng thái:</strong> {formik.values.blocked ? 'Bị khóa' : 'Hoạt động'}</span>
                    </div>
                </div>
            </div>

            <div className="flex justify-end gap-3 mt-4">
                <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400 transition"
                >
                    Hủy
                </button>
                <button
                    type="submit"
                    className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
                >
                    Cập nhật
                </button>
            </div>
        </form>
    );
}

export default ProfileForm;

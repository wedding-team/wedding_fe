import FileUpload from "../../components/common/FileUpload";
import React from "react";

function WeddingEventForm({ formik }) {
    return (
        <div className="space-y-6 bg-white p-6">
            <div className="flex gap-6 items-center">
                <div className="w-1/3 flex flex-col">
                    <FileUpload
                        label="Tải ảnh sự kiện"
                        name="image"
                        rounded="square"
                        size="w-60 h-60"
                        previewUrl={formik.values.image_url}
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
                <div className="w-2/3">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Tên sự kiện</label>
                        <input
                            type="text"
                            name="title"
                            className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-300"
                            placeholder="Nhập tên sự kiện"
                            value={formik.values.title}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.title && formik.errors.title && (
                            <p className="text-red-500 text-sm mt-2">{formik.errors.title}</p>
                        )}
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-semibold text-gray-700">Địa chỉ</label>
                        <input
                            name="address"
                            className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-300"
                            placeholder="Nhập địa chỉ tổ chức"
                            value={formik.values.address}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.address && formik.errors.address && (
                            <p className="text-red-500 text-sm mt-2">{formik.errors.address}</p>
                        )}
                    </div>
                    <div className="mt-4">
                        <div className="flex gap-4 mt-2">
                            <div className="w-1/3">
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Giờ tổ chức</label>
                                <input
                                    type="time"
                                    name="event_time"
                                    className="w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-300"
                                    value={formik.values.event_time}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                />
                                {formik.touched.event_time && formik.errors.event_time && (
                                    <p className="text-red-500 text-sm mt-1">{formik.errors.event_time}</p>
                                )}
                            </div>
                            <div className="w-2/3">
                                <label className="block text-sm font-semibold text-gray-700 mb-1">Ngày tổ chức</label>
                                <input
                                    type="date"
                                    name="event_date"
                                    className="w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-300"
                                    value={formik.values.event_date}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                    min={new Date().toISOString().split("T")[0]}
                                />
                                {formik.touched.event_date && formik.errors.event_date && (
                                    <p className="text-red-500 text-sm mt-1">{formik.errors.event_date}</p>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeddingEventForm;
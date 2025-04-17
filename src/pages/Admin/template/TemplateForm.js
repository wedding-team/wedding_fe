import FileUpload from "../../../components/common/FileUpload";
import { IoIosArrowDown } from "react-icons/io";
import React from "react";

function TemplateForm({ formik, isEdit }) {
    return (
        <div className="space-y-4 bg-white p-2 ">
            <div className="flex gap-8 items-start">
                <div className="w-1/3 flex flex-col items-center">
                    <FileUpload
                        label="Tải ảnh thiệp cưới"
                        name="image"
                        rounded="square"
                        size="w-64 h-64"
                        previewUrl={formik.values.image_url}
                        onChange={(event) => {
                            const file = event.currentTarget.files[0];
                            if (file) {
                                formik.setFieldValue("image", file);
                                formik.setFieldValue("image_url", URL.createObjectURL(file));
                            }
                        }}
                        accept="image/*"
                        placeholderIcon={<span className="text-gray-400 text-lg">Chưa có ảnh</span>}
                        bgColor="bg-blue-600"
                        textColor="text-white"
                        className="shadow-sm"
                    />
                </div>
                <div className="w-2/3 space-y-6">
                    <div className={`grid ${isEdit ? 'grid-cols-3 gap-2' : 'grid-cols-2 gap-6'} `}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Tên thiệp cưới</label>
                            <input
                                type="text"
                                name="title"
                                className="block w-full rounded-md border border-gray-200 shadow-sm p-3 focus:ring-blue-400 focus:border-blue-400 transition duration-200"
                                placeholder="Nhập tên thiệp cưới"
                                value={formik.values.title}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.title && formik.errors.title && (
                                <p className="text-red-500 text-sm mt-1">{formik.errors.title}</p>
                            )}
                        </div>
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Loại thiệp cưới</label>
                            <select
                                name="template_type"
                                className="block w-full appearance-none rounded-md border border-gray-200 shadow-sm p-3 pr-10 focus:ring-blue-400 focus:border-blue-400 transition duration-200"
                                value={formik.values.template_type}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            >
                                <option value="" disabled>Chọn loại thiệp</option>
                                <option value="free">Free</option>
                                <option value="vip">VIP</option>
                            </select>
                            <IoIosArrowDown
                                className="absolute right-3 top-[58%] transform pointer-events-none text-gray-500"/>
                            {formik.touched.template_type && formik.errors.template_type && (
                                <p className="text-red-500 text-sm mt-1">{formik.errors.template_type}</p>
                            )}
                        </div>
                        {isEdit && (
                            <div className="relative">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Kích hoạt</label>
                                <select
                                    name="is_active"
                                    className="block w-full appearance-none rounded-md border border-gray-200 shadow-sm p-3 pr-10 focus:ring-blue-400 focus:border-blue-400 transition duration-200"
                                    value={formik.values.is_active}
                                    onChange={formik.handleChange}
                                    onBlur={formik.handleBlur}
                                >
                                    <option value="true">Hoạt động</option>
                                    <option value="false">Ngưng hoạt động</option>
                                </select>
                                <IoIosArrowDown
                                    className="absolute right-3 top-[58%] transform pointer-events-none text-gray-500"/>
                            </div>
                        )}
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mô tả</label>
                        <textarea
                            name="description"
                            className="block w-full rounded-md border border-gray-200 shadow-sm p-3 focus:ring-blue-400 focus:border-blue-400  transition duration-200"
                            placeholder="Nhập mô tả"
                            rows="5"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.description && formik.errors.description && (
                            <p className="text-red-500 text-sm mt-1">{formik.errors.description}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TemplateForm;
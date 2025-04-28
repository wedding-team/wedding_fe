import FileUpload from "../../../components/common/FileUpload";
import SelectInput from "../../../components/common/SelectInput";  // Import SelectInput
import React from "react";

function TemplateForm({ formik, isEdit, categories }) {
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
                    <div className={`grid grid-cols-2 gap-2`}>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Mã thiệp</label>
                            <input
                                type="text"
                                name="code"
                                className="block w-full rounded-md border border-gray-200 shadow-sm p-3 focus:ring-blue-400 focus:border-blue-400 transition duration-200"
                                placeholder="Nhập mã thiệp cưới"
                                value={formik.values.code}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.code && formik.errors.code && (
                                <p className="text-red-500 text-xs mt-1">{formik.errors.code}</p>
                            )}
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-1">Tên thiệp</label>
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
                                <p className="text-red-500 text-xs mt-1">{formik.errors.title}</p>
                            )}
                        </div>
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Loại thiệp cưới</label>
                            <SelectInput
                                name="template_type"
                                value={formik.values.template_type}
                                onChange={formik.handleChange}
                                options={[
                                    { value: "free", label: "Free" },
                                    { value: "vip", label: "VIP" },
                                ]}
                                placeholder="Chọn loại thiệp"
                            />
                            {formik.touched.template_type && formik.errors.template_type && (
                                <p className="text-red-500 text-xs mt-1">{formik.errors.template_type}</p>
                            )}
                        </div>
                        {isEdit && (
                            <div className="relative">
                                <label className="block text-sm font-medium text-gray-700 mb-1">Kích hoạt</label>
                                <SelectInput
                                    name="is_active"
                                    value={formik.values.is_active}
                                    onChange={formik.handleChange}
                                    options={[
                                        { value: "true", label: "Hoạt động" },
                                        { value: "false", label: "Ngưng hoạt động" },
                                    ]}
                                    placeholder="Chọn trạng thái"
                                />
                            </div>
                        )}
                        {/* Thêm SelectInput cho danh mục */}
                        <div className="relative">
                            <label className="block text-sm font-medium text-gray-700 mb-1">Danh mục</label>
                            <SelectInput
                                name="category_id"
                                value={formik.values.category_id}
                                onChange={formik.handleChange}
                                options={categories.map((category) => ({
                                    value: category.id,
                                    label: category.name,
                                }))}
                                placeholder="Chọn danh mục"
                            />
                            {formik.touched.category_id && formik.errors.category_id && (
                                <p className="text-red-500 text-xs mt-1">{formik.errors.category_id}</p>
                            )}
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Mô tả</label>
                        <textarea
                            name="description"
                            className="block w-full rounded-md border border-gray-200 shadow-sm p-3 focus:ring-blue-400 focus:border-blue-400 transition duration-200"
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

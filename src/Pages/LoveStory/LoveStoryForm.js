import FileUpload from "../../components/common/FileUpload";
import React from "react";

function LoveStoryForm({formik}) {
    return (
        <div className="space-y-6 bg-white p-6">
            <div className="flex gap-6 items-center">
                <div className="w-1/3 flex flex-col">
                    <FileUpload
                        label="Tải ảnh"
                        name="image"
                        rounded="square"
                        size="w-48 h-48"
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
                <div className="w-2/3 ">
                    <div className="flex gap-4 ">
                        <div className="w-2/3">
                            <label className="block text-sm font-semibold text-gray-700">Tiêu đề</label>
                            <input
                                type="text"
                                name="title"
                                className="mt-2 block w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-300"
                                placeholder="Nhập tiêu đề"
                                value={formik.values.title}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.title && formik.errors.title && (
                                <p className="text-red-500 text-sm mt-2">{formik.errors.title}</p>
                            )}
                        </div>
                        <div className="w-1/3">
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Ngày kỷ niệm</label>
                            <input
                                type="date"
                                name="love_story_date"
                                className="w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-300"
                                value={formik.values.love_story_date}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.love_story_date && formik.errors.love_story_date && (
                                <p className="text-red-500 text-sm mt-1">{formik.errors.love_story_date}</p>
                            )}
                        </div>
                    </div>
                    <div className="mt-4">
                        <label className="block text-sm font-semibold text-gray-700">Câu chuyện</label>
                        <textarea
                            name="description"
                            className="mt-2 w-full rounded-lg border border-gray-300 shadow-sm p-3 focus:border-indigo-500 focus:ring-indigo-300"
                            placeholder="Nhập câu chuyện của bạn"
                            value={formik.values.description}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            rows={4}
                        />
                        {formik.touched.description && formik.errors.description && (
                            <p className="text-red-500 text-sm mt-2">{formik.errors.description}</p>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoveStoryForm;
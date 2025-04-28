import FileUpload from "../../components/common/FileUpload";
import React from "react";
import {DateTimeInput} from "../../components/common/DateTimeInput";
import {TextAreaInput} from "../../components/common/TextAreaInput";

function LoveStoryForm({formik}) {
    const getInputClasses = (fieldName) => {
        const baseClasses = "w-full p-3 border rounded-lg focus:outline-none text-sm transition-colors";
        if (formik.touched[fieldName] && formik.errors[fieldName]) {
            return `${baseClasses} border-red-500 focus:ring-2 focus:ring-red-300 bg-red-50 `;
        }
        return `${baseClasses} border-gray-300 focus:ring-2 focus:ring-blue-400`;
    };

    const renderErrorMessage = (fieldName) => {
        if (formik.touched[fieldName] && formik.errors[fieldName]) {
            return (
                <div className="mt-1 flex items-center text-red-600">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20"
                         fill="currentColor">
                        <path fillRule="evenodd"
                              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
                              clipRule="evenodd"/>
                    </svg>
                    <span className="text-sm">{formik.errors[fieldName]}</span>
                </div>
            );
        }
        return null;
    };

    return (
        <div className="bg-white rounded-lg">
            <div className="flex flex-col md:flex-row gap-2 md:gap-6 items-start">
                <div className="w-full md:w-1/3 flex flex-col">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">Hình ảnh</label>
                    <FileUpload previewImage="w-full object-cover rounded-lg" name="image" rounded="square"
                                size="md:w-64 md:h-64 w-full h-[250px]" previewUrl={formik.values.image_url}
                                onChange={(event) => {
                                    const file = event.currentTarget.files[0];
                                    if (file) {
                                        formik.setFieldValue("image", file);
                                        formik.setFieldValue("image_url", URL.createObjectURL(file));
                                    }
                                }}
                                accept="image/*"
                                placeholderIcon={
                                    <span className="text-gray-500 text-sm">Chưa có ảnh</span>
                                }
                                textColor="text-white"
                                className={formik.touched.image && formik.errors.image ? "border-2 border-red-500" : ""}
                    />
                    {renderErrorMessage("image")}
                </div>
                <div className="w-full md:w-2/3 space-y-4">
                    <div className="flex flex-col md:flex-row gap-4">
                        <div className="w-full md:w-2/3">
                            <label htmlFor="title" className="block text-sm font-semibold text-gray-700 mb-1">Tiêu đề
                                <span className="text-red-500 ml-1">*</span>
                            </label>
                            <input type="text" id="title" name="title" className={getInputClasses("title")}
                                   placeholder="Nhập tiêu đề" value={formik.values.title} onChange={formik.handleChange}
                                   onBlur={formik.handleBlur}/>
                            {renderErrorMessage("title")}
                        </div>
                        <div className="w-full md:w-1/3">
                            <label htmlFor="love_story_date" className="block text-sm font-semibold text-gray-700 mb-1">Ngày
                                kỷ niệm
                                <span className="text-red-500 ml-1">*</span>
                            </label>
                            <DateTimeInput id="love_story_date" name="love_story_date"
                                           value={formik.values.love_story_date} onChange={formik.handleChange}
                                           onBlur={formik.handleBlur} className={getInputClasses("love_story_date")}/>
                            {renderErrorMessage("love_story_date")}
                        </div>
                    </div>
                    <div>
                        <label htmlFor="description" className="block text-sm font-semibold text-gray-700 mb-1">Câu
                            chuyện
                            <span className="text-red-500 ml-1">*</span>
                        </label>
                        <TextAreaInput id="description" name="description" value={formik.values.description}
                                       onChange={formik.handleChange} onBlur={formik.handleBlur}
                                       placeholder="Nhập câu chuyện của bạn"
                                       className={getInputClasses("description")}/>
                        {renderErrorMessage("description")}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LoveStoryForm;
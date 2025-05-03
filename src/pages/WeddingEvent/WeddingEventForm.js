import FileUpload from "../../components/common/FileUpload";
import React from "react";
import {DateTimeInput} from "../../components/common/DateTimeInput";

function WeddingEventForm({formik}) {
    const getInputClasses = (fieldName) => {
        const baseClasses = "w-full rounded-lg border shadow-sm p-3 focus:outline-none text-sm transition-colors";
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
        <div className="space-y-6 bg-white rounded-lg ">
            <div className="flex flex-col md:flex-row gap-6">
                <div className="w-full md:w-1/3 flex flex-col">
                    <FileUpload label="Tải ảnh sự kiện" name="image" rounded="square"
                                size="md:w-64 md:h-64 w-full h-[280px]" previewUrl={formik.values.image_url}
                                onChange={(event) => {
                                    const file = event.currentTarget.files[0];
                                    if (file) {
                                        formik.setFieldValue("image", file);
                                        formik.setFieldValue("image_url", URL.createObjectURL(file));
                                    }
                                }}
                                accept="image/*"
                                placeholderIcon={<span className="text-gray-500 text-sm">Chưa có ảnh</span>}
                                bgColor="bg-blue-500"
                                textColor="text-white"
                                className={formik.touched.image && formik.errors.image ? "border-2 border-red-500" : ""}
                    />
                    {renderErrorMessage("image")}
                </div>
                <div className="w-full md:w-2/3 space-y-4">
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Sự kiện
                            <span className="text-red-500 ml-1">*</span>
                        </label>
                        <input type="text" name="title" className={`${getInputClasses("title")} mt-2`}
                               placeholder="Nhập tên sự kiện" value={formik.values.title} onChange={formik.handleChange}
                               onBlur={formik.handleBlur}/>
                        {renderErrorMessage("title")}
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-gray-700">Địa chỉ
                            <span className="text-red-500 ml-1">*</span>
                        </label>
                        <input name="address" className={`${getInputClasses("address")} mt-2`}
                               placeholder="Nhập địa chỉ tổ chức" value={formik.values.address}
                               onChange={formik.handleChange} onBlur={formik.handleBlur}/>
                        {renderErrorMessage("address")}
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <div className="w-full sm:w-1/3">
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Giờ tổ chức
                                <span className="text-red-500 ml-1">*</span>
                            </label>
                            <DateTimeInput type="time" name="event_time" value={formik.values.event_time}
                                           onChange={formik.handleChange} onBlur={formik.handleBlur}
                                           className={getInputClasses("event_time")}/>
                            {renderErrorMessage("event_time")}
                        </div>
                        <div className="w-full sm:w-2/3">
                            <label className="block text-sm font-semibold text-gray-700 mb-1">Ngày tổ chức
                                <span className="text-red-500 ml-1">*</span>
                            </label>
                            <DateTimeInput name="event_date" value={formik.values.event_date}
                                           onChange={formik.handleChange} onBlur={formik.handleBlur}
                                           className={getInputClasses("event_date")}/>
                            {renderErrorMessage("event_date")}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default WeddingEventForm;
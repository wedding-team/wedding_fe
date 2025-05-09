import FileUpload from "../../components/common/FileUpload";
import FamilyInfo from "../../components/common/FamilyInfo";
import BankInfo from "../../components/common/BankInfo";
import {IoMdArrowDropright} from "react-icons/io";
import {IoWarningOutline} from "react-icons/io5";
import {TextAreaInput} from "../../components/common/TextAreaInput";

function BrideForm({formik}) {
    return (
        <div className="md:px-4 space-y-4">
            <h2 className="max-md:text-xl md:text-3xl font-semibold text-center">Thông tin cô dâu</h2>
            <div className="flex gap-3 sm:flex-row flex-col">
                <div>
                    <FileUpload
                        previewImage="max-w-[400px] h-[300px] object-contain object-top"
                        name="bride_avatar"
                        rounded="square"
                        size=""
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
                <div className="flex-1">
                    <div className="">
                        <label htmlFor="bride_name" className="block text-gray-600">
                            Tên cô dâu
                        </label>
                        <div className="relative">
                            <input
                                type="text"
                                name="bride_name"
                                id="bride_name"
                                placeholder="Nhập tên cô dâu"
                                className={`block w-full pr-10 p-2 border text-sm rounded-md focus:outline-none focus:ring-1 ${
                                    formik.touched.bride_name && formik.errors.bride_name
                                        ? 'border-red-500 text-red-900 placeholder-red-300 focus:ring-red-500'
                                        : 'border-gray-300 focus:ring-blue-400'
                                }`}
                                value={formik.values.bride_name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                            />
                            {formik.touched.bride_name && formik.errors.bride_name && (
                                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                                    <IoWarningOutline className="text-red-500"/>
                                </div>
                            )}
                        </div>
                        {formik.touched.bride_name && formik.errors.bride_name && (
                            <p className="mt-1 text-sm text-red-600">{formik.errors.bride_name}</p>
                        )}
                    </div>
                    <div className="my-3">
                        <label className="block text-gray-600">Địa chỉ</label>
                        <input
                            type="text"
                            name="bride_address"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-1 focus:ring-blue-400 focus:outline-none"
                            value={formik.values.bride_address}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.bride_address && formik.errors.bride_address && (
                            <p className="text-red-500 text-sm">{formik.errors.bride_address}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-gray-600">Giới thiệu cô dâu</label>
                        <TextAreaInput rows={4} name="bride_bio" placeholder="Giới thiệu về cô dâu"
                                       value={formik.values.bride_bio} onChange={formik.handleChange}
                                       onBlur={formik.handleBlur}/>
                        {formik.touched.bride_bio && formik.errors.bride_bio && (
                            <p className="text-red-500 text-sm">{formik.errors.bride_bio}</p>
                        )}
                    </div>
                </div>
            </div>
            <details className="border border-gray-200 bg-gray-100 rounded-md overflow-hidden group">
                <summary className="p-2 cursor-pointer list-none flex items-center justify-between">
                    <span>Thông tin gia đình cô dâu</span>
                    <span className="transition-transform group-open:rotate-90"><IoMdArrowDropright/></span>
                </summary>
                <FamilyInfo formik={formik} prefix="bride"/>
            </details>
            <details className="border border-gray-200 bg-gray-100 rounded-md overflow-hidden group">
                <summary className="p-2 cursor-pointer list-none flex items-center justify-between">
                    <span>Thông tin ngân hàng cô dâu</span>
                    <span className="transition-transform group-open:rotate-90"><IoMdArrowDropright/></span>
                </summary>
                <BankInfo formik={formik} prefix="bride"/>
            </details>
        </div>
    );
}

export default BrideForm;
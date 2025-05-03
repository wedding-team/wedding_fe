import FileUpload from "../../components/common/FileUpload";
import BankInfo from "../../components/common/BankInfo";
import FamilyInfo from "../../components/common/FamilyInfo";
import {IoMdArrowDropright} from "react-icons/io";
import {TextAreaInput} from "../../components/common/TextAreaInput";

function GroomForm({formik}) {
    return (
        <div className="md:px-4 space-y-4">
            <h2 className="max-md:text-lg md:text-2xl font-semibold text-center">Thông tin chú rể</h2>
            <div className="flex gap-3 sm:flex-row flex-col">
                <div>
                    <FileUpload
                        previewImage="max-w-[400px] h-[300px] object-contain object-top"
                        name="groom_avatar"
                        rounded="square"
                        size=""
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
                <div className="flex-1">
                    <div>
                        <label className="block text-gray-600">Tên chú rể</label>
                        <input
                            type="text"
                            name="groom_name"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            value={formik.values.groom_name}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.groom_name && formik.errors.groom_name && (
                            <p className="text-red-500 text-sm">{formik.errors.groom_name}</p>
                        )}
                    </div>
                    <div className="my-3">
                        <label className="block text-gray-600">Địa chỉ</label>
                        <input
                            type="text"
                            name="groom_address"
                            className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-400 focus:outline-none"
                            value={formik.values.groom_address}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                        />
                        {formik.touched.groom_address && formik.errors.groom_address && (
                            <p className="text-red-500 text-sm">{formik.errors.groom_address}</p>
                        )}
                    </div>
                    <div>
                        <label className="block text-gray-600">Giới thiệu chú rể</label>
                        <TextAreaInput rows={4} name="groom_bio" placeholder="Giới thiệu về chú rể"
                                       value={formik.values.groom_bio}
                                       onChange={formik.handleChange}
                                       onBlur={formik.handleBlur}/>
                        {formik.touched.bride_bio && formik.errors.bride_bio && (
                            <p className="text-red-500 text-sm">{formik.errors.bride_bio}</p>
                        )}
                        {formik.touched.groom_bio && formik.errors.groom_bio && (
                            <p className="text-red-500 text-sm">{formik.errors.groom_bio}</p>
                        )}
                    </div>
                </div>
            </div>
            <details className="border border-gray-200 bg-gray-100 rounded-md overflow-hidden group">
                <summary className="p-2 cursor-pointer list-none flex items-center justify-between">
                    <span>Thông tin gia đình chú rể</span>
                    <span className="transition-transform group-open:rotate-90"><IoMdArrowDropright/></span>
                </summary>
                <FamilyInfo formik={formik} prefix="groom"/>
            </details>
            <details className="border border-gray-200 bg-gray-100 rounded-md overflow-hidden group">
                <summary className="p-2 cursor-pointer list-none flex items-center justify-between">
                    <span>Thông tin ngân hàng chú rể</span>
                    <span className="transition-transform group-open:rotate-90"><IoMdArrowDropright/></span>
                </summary>
                <BankInfo formik={formik} prefix="groom"/>
            </details>
        </div>
    );
}

export default GroomForm;

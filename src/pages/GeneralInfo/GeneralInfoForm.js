import Music from "./Music";
import {IoCalendarOutline} from "react-icons/io5";
import {FaRegPenToSquare} from "react-icons/fa6";
import {FiDownload} from "react-icons/fi";
import {TextAreaInput} from "../../components/common/TextAreaInput";
import {DateTimeInput} from "../../components/common/DateTimeInput";
import Template from "./Template";
import Effect from "./Effect";

function GeneralInfoForm({formik}) {

    return (
        <form onSubmit={formik.handleSubmit} className="">
            <div className="flex flex-col lg:flex-row gap-2 md:gap-8">
                <div className="flex-1 space-y-4">
                    <Template formik={formik}/>
                    <Effect name="effect" value={formik.values.effect} onChange={formik.handleChange}/>
                </div>
                <div className="flex-1 space-y-4">
                    <Music
                        name="audio_url"
                        value={formik.values.audio_url}
                        onChange={formik.handleChange}
                    />
                    <div>
                        <label className="flex text-lg font-medium text-gray-700 items-center mb-2 gap-2">
                            <IoCalendarOutline/> Ngày cưới
                        </label>
                        <DateTimeInput name="wedding_day" value={formik.values.wedding_day} onChange={formik.handleChange}
                                       onBlur={formik.handleBlur}/>
                    </div>
                    <div>
                        <label className="flex text-lg font-medium text-gray-700 items-center mb-2 gap-2">
                            <FaRegPenToSquare/> Lời ngõ
                        </label>
                        <TextAreaInput name="open_letter" value={formik.values.open_letter}
                                       onChange={formik.handleChange}
                                       onBlur={formik.handleBlur} placeholder="Nhập lời ngõ..."/>
                    </div>
                </div>
            </div>
            <div className="w-full mt-8 flex justify-center">
                <button
                    type="submit"
                    className="flex items-center gap-2 bg-blue-500 text-white py-3 px-8 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-blue-600 transition-all shadow-md"
                >
                    <FiDownload className="text-lg"/>
                    <span>Lưu thông tin</span>
                </button>
            </div>
        </form>
    );
}

export default GeneralInfoForm;

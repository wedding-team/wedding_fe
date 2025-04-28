import { FiDownload } from "react-icons/fi";
import GroomForm from "./GroomForm";
import BrideForm from "./BrideForm";

function CoupleForm({ formik }) {
    return (
        <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 lg:grid-cols-2 gap-4">
            <div className="px-2 py-4 bg-white rounded-xl shadow-md">
                <GroomForm formik={formik}/>
            </div>
            <div className="px-2 py-4 bg-white rounded-xl shadow-md">
                <BrideForm formik={formik}/>
            </div>
            <div className="w-full lg:col-span-2 flex justify-center">
                <button
                    type="submit"
                    className="flex items-center gap-2 bg-blue-500 text-white py-2 px-6 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-blue-600 transition"
                    disabled={formik.isSubmitting}
                >
                    <FiDownload/> Lưu thông tin
                </button>
            </div>
        </form>
    );
}

export default CoupleForm;

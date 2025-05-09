import { FiDownload } from "react-icons/fi";
import GroomForm from "./GroomForm";
import BrideForm from "./BrideForm";

function CoupleForm({ formik }) {
    return (
        <form
            onSubmit={formik.handleSubmit}
            className="bg-white rounded-xl shadow-md p-2 md:p-4 grid grid-cols-1 lg:grid-cols-2 gap-2 md:gap-4"
        >
            <div className="px-2 py-4">
                <GroomForm formik={formik}/>
            </div>
            <div className="px-2 py-4">
                <BrideForm formik={formik}/>
            </div>
            <div className="w-full lg:col-span-2 flex justify-center">
                <button
                    type="submit"
                    className="w-full sm:w-auto flex justify-center items-center gap-2 bg-red-500 text-white py-2 px-6 rounded-md font-medium hover:bg-red-600 transition"
                    disabled={formik.isSubmitting}
                >
                    <FiDownload/> Lưu thông tin
                </button>
            </div>
        </form>

    );
}

export default CoupleForm;

import { FiDownload } from "react-icons/fi";
import GroomForm from "./GroomForm";
import BrideForm from "./BrideForm";

function WeddingInvitationForm({ formik }) {
    return (
        <form onSubmit={formik.handleSubmit} className="bg-white p-6 grid grid-cols-1 md:grid-cols-2 gap-6 md:px-6">
            <div className="p-6 rounded-xl shadow-md">
                <GroomForm formik={formik}/>
            </div>
            <div className="p-6 rounded-xl shadow-md">
                <BrideForm formik={formik}/>
            </div>

            {/* Nút lưu chiếm cả 2 cột */}
            <div className="w-full md:col-span-2 flex justify-center">
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

export default WeddingInvitationForm;

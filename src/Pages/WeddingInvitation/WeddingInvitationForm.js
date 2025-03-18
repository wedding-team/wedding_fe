import GroomForm from "./GroomForm";
import BrideForm from "./BrideForm";

function WeddingInvitationForm({ formik }) {
    return (
        <form className="flex flex-wrap justify-center gap-5 pb-8" onSubmit={formik.handleSubmit}>
            <div className="flex flex-row w-full justify-center gap-6">
                <div className="w-1/2 bg-white p-6 rounded-xl shadow-md ">
                    <GroomForm formik={formik} />
                </div>
                <div className="w-1/2 bg-white p-6 rounded-xl shadow-md">
                    <BrideForm formik={formik} />
                </div>
            </div>
            <div className="w-full mt-2 flex justify-center">
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-6 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:bg-blue-600 transition"
                    disabled={formik.isSubmitting}
                >
                    Cập nhật
                </button>
            </div>
        </form>
    );
}

export default WeddingInvitationForm;

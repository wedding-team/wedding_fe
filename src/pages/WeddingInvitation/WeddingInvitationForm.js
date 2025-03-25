import GroomForm from "./GroomForm";
import BrideForm from "./BrideForm";

function WeddingInvitationForm({ formik }) {
    return (
        <form onSubmit={formik.handleSubmit}>
            <div className="grid max-lg:grid-cols-1 lg:grid-cols-2 gap-8">
                <div className="bg-white p-6 lg:rounded-xl shadow-md ">
                    <GroomForm formik={formik} />
                </div>
                <div className="bg-white p-6 lg:rounded-xl shadow-md">
                    <BrideForm formik={formik} />
                </div>
            </div>
            <div className="w-full mt-4 flex justify-center">
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

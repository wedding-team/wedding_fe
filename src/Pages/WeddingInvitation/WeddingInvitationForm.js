import GroomForm from "./GroomForm";
import BrideForm from "./BrideForm";

function WeddingInvitationForm({ formik }) {
    return (
        <form className="flex flex-wrap justify-between shadow-sm bg-white p-5" onSubmit={formik.handleSubmit}>
            <BrideForm formik={formik}/>
            <GroomForm formik={formik}/>
            <div className="w-full mt-5 flex justify-center">
                <button
                    type="submit"
                    className="bg-blue-500 text-white py-2 px-6 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    disabled={formik.isSubmitting}
                >
                    Cập nhật
                </button>
            </div>
        </form>
    );
}

export default WeddingInvitationForm;

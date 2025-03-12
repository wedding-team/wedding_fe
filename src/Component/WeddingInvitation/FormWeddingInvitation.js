import FormGroom from "./FormGroom";
import FormBride from "./FormBride";

function FormWeddingInvitation({ formik }) {
    return (
        <form className="flex flex-wrap justify-between shadow-sm bg-white p-5" onSubmit={formik.handleSubmit}>
            <FormBride formik={formik}/>
            <FormGroom formik={formik}/>
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

export default FormWeddingInvitation;

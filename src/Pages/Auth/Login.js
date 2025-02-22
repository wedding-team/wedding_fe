import {FcGoogle} from "react-icons/fc";
import {FaFacebook} from "react-icons/fa";
import FormLogin from "../../Component/Auth/FormLogin";
import {useFormik} from "formik";
import AuthApi from "../../Apis/AuthApi";
import "react-toastify/dist/ReactToastify.css";
import Helper from "../../Utils/Helper";


function Login() {

    const formik = useFormik({
        initialValues: {email: "", password: ""},
        enableReinitialize: true,
        onSubmit: async (values, {setSubmitting}) => {
            try {
                const res = await AuthApi.login(values);
                console.log(res.data);
                Helper.toastSuccess("Đăng nhập thành công!")
            } catch (error) {
                console.log(error)
                Helper.toastError("Đăng nhập thành công!")
            } finally {
                setSubmitting(false);
            }
        }
    })
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <div className="flex flex-col items-center">
                    <img
                        src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Logo"
                        className="h-10"
                    />
                    <h2 className="mt-4 text-2xl font-bold text-gray-900">
                        ĐĂNG NHẬP
                    </h2>
                </div>
                <FormLogin formik={formik}/>
                <div className="relative mt-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="bg-white px-2 text-gray-600">Hoặc</span>
                    </div>
                </div>

                <div className="mt-4 flex space-x-4">
                    <button
                        className="flex items-center w-full justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-100"
                    >
                        <FcGoogle className="w-5 h-5 mr-2"/>
                        Google
                    </button>
                    <button
                        className="flex items-center w-full justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-100"
                    >
                        <FaFacebook className="w-5 h-5 mr-2 text-blue-600"/>
                        Facebook
                    </button>
                </div>
                <p className="mt-6 text-center text-sm text-gray-600">
                    Bạn chưa có tài khoản?
                    <a href="/sign-up" className="text-rose-600 hover:underline ms-1">
                        Đăng ký
                    </a>
                </p>
            </div>
        </div>
    )
}

export default Login;
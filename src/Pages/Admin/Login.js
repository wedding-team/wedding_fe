import * as Yup from "yup";
import AdminApi from "../../apis/AdminApi";
import Helper from "../../utils/Helper";
import {useFormik} from "formik";
import {useNavigate} from "react-router-dom";
import FormLogin from "../../components/Admin/FormLogin";

const validationSchema = Yup.object({
    email: Yup.string().email("Email không hợp lệ").required("Vui lòng nhập email"),
    password: Yup.string().min(6, "Mật khẩu ít nhất 6 ký tự").required("Vui lòng nhập mật khẩu"),
});

function Login() {
    const navigate = useNavigate();

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const res = await AdminApi.login(values);
            Helper.toastSuccess("Đăng nhập thành công")
            console.log(res.data);
        } catch (err) {
            Helper.toastError(err.message || "Đã xảy ra lỗi khi đăng nhập");
        } finally {
            setSubmitting(false);
        }
    };

    const formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema,
        onSubmit: handleSubmit,
    });

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-1 md:px-4">
            <div className="w-full max-w-md md:bg-white md:rounded-lg md:shadow-md max-md:p-2 md:p-8">
                <div className="flex flex-col items-center">
                    <img
                        onClick={() => navigate("/")}
                        src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=rose&shade=500"
                        alt="Logo"
                        className="cursor-pointer h-10"
                    />
                    <h2 className="mt-4 text-2xl font-bold text-gray-900">TRANG QUẢN TRỊ</h2>
                </div>
                <FormLogin formik={formik} />
            </div>
        </div>
    );
}

export default Login;

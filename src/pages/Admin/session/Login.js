import * as Yup from "yup";
import { useFormik } from "formik";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Helper from "../../../utils/Helper";
import FormLogin from "./FormLogin";
import {loginAdmin} from "../../../redux/admin/adminSlice";

const validationSchema = Yup.object({
    email: Yup.string().email("Email không hợp lệ").required("Vui lòng nhập email"),
    password: Yup.string().min(6, "Mật khẩu ít nhất 6 ký tự").required("Vui lòng nhập mật khẩu"),
});

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { loading, error } = useSelector((state) => state.auth);

    const handleSubmit = async (values, { setSubmitting }) => {
        const result = await dispatch(loginAdmin(values));

        if (loginAdmin.fulfilled.match(result)) {
            Helper.toastSuccess("Đăng nhập thành công");
            navigate("/admin/dashboard");
        } else {
            Helper.toastError(result.payload || "Đã xảy ra lỗi khi đăng nhập");
        }

        setSubmitting(false);
    };

    const formik = useFormik({
        initialValues: { email: "", password: "" },
        validationSchema,
        onSubmit: handleSubmit,
    });

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-1 md:px-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
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
                {loading && <p className="text-center text-gray-500 mt-2">Đang đăng nhập...</p>}
                {error && <p className="text-center text-red-500 mt-2">{error}</p>}
            </div>
        </div>
    );
}

export default Login;

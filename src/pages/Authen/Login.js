import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Helper from "../../utils/Helper";
import FormLogin from "../../components/Auth/FormLogin";
import { loginUser } from "../../redux/auth/authSlice";

const validationSchema = Yup.object({
    email: Yup.string().email("Email không hợp lệ").required("Vui lòng nhập email"),
    password: Yup.string().min(6, "Mật khẩu ít nhất 6 ký tự").required("Vui lòng nhập mật khẩu"),
});

function Login() {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            const result = await dispatch(loginUser(values));
            if (result.meta.requestStatus === "fulfilled") {
                Helper.toastSuccess("Đăng nhập thành công!");
                navigate("/wedding/couple");
            } else {
                throw new Error(result.payload || "Đăng nhập thất bại");
            }
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
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <div className="flex flex-col items-center">
                    <img
                        onClick={() => navigate("/")}
                        src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=rose&shade=500"
                        alt="Logo"
                        className="cursor-pointer h-10"
                    />
                    <h2 className="mt-4 text-2xl font-bold text-gray-900">ĐĂNG NHẬP</h2>
                </div>
                <FormLogin formik={formik} />
                <div className="relative mt-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="md:bg-white px-2 text-gray-600">Hoặc</span>
                    </div>
                </div>
                <p className="mt-6 text-center text-sm text-gray-600">
                    Bạn chưa có tài khoản?
                    <a href="/sign-up" className="text-rose-600 hover:underline ms-1">Đăng ký</a>
                </p>
            </div>
        </div>
    );
}

export default Login;

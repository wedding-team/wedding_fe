import FormLogin from "../../Component/Auth/FormLogin";
import { useFormik } from "formik";
import AuthApi from "../../Apis/AuthApi";
import Helper from "../../Utils/Helper";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),
  password: Yup.string()
    .min(6, "Mật khẩu ít nhất 6 ký tự")
    .required("Vui lòng nhập mật khẩu"),
});

function Login() {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
      try {
        const res = await AuthApi.login({
          email: values.email,
          password: values.password,
        });
        console.log(res.data.token.Authorization);
        localStorage.setItem("token", res.data.token.Authorization);
        navigate("/wedding-info");
        Helper.toastSuccess("Đăng nhập thành công!");
      } catch (error) {
        console.log(error);
        Helper.toastError("Đăng nhập thất bại!");
      } finally {
        setSubmitting(false);
      }
    },
  });
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <div className="flex flex-col items-center">
          <img
            src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            alt="Logo"
            className="h-10"
          />
          <h2 className="mt-4 text-2xl font-bold text-gray-900">ĐĂNG NHẬP</h2>
        </div>
        <FormLogin formik={formik} />
        <div className="relative mt-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-600">Hoặc</span>
          </div>
        </div>
        <p className="mt-6 text-center text-sm text-gray-600">
          Bạn chưa có tài khoản?
          <a href="/sign-up" className="text-rose-600 hover:underline ms-1">
            Đăng ký
          </a>
        </p>
      </div>
    </div>
  );
}

export default Login;

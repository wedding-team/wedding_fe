import { Toaster } from "sonner";
import { useFormik } from "formik";
import * as Yup from "yup";
import AuthApi from "../../Apis/AuthApi";
import FormSignUp from "../../Component/Auth/FormSignUp";
import Helper from "../../Utils/Helper";

const validationSchema = Yup.object({
  email: Yup.string()
    .email("Email không hợp lệ")
    .required("Vui lòng nhập email"),
  password: Yup.string()
    .min(6, "Mật khẩu ít nhất 6 ký tự")
    .required("Vui lòng nhập mật khẩu"),
  password_confirmation: Yup.string()
    .oneOf(
      [Yup.ref("password"), null],
      "Xác nhận mật khẩu phải khớp với mật khẩu"
    )
    .required("Vui lòng nhập xác nhận mật khẩu"),
});

function SignUp() {
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      password_confirmation: "",
    },
    validationSchema,
    onSubmit: async (values, { setSubmitting }) => {
        try {
            const res = await AuthApi.signUp(values);
            console.log(res);
            Helper.toastSuccess("Đăng ký thành công!");
        } catch (error) {
            Helper.handleApiError(error);
        } finally {
            setSubmitting(false);
        }
    },    
  });

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
      <Toaster position="bottom-right" />
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
        <div className="flex flex-col items-center">
          <img
            src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
            alt="Logo"
            className="h-10"
          />
          <h2 className="mt-4 text-2xl font-bold text-gray-900">ĐĂNG KÝ</h2>
        </div>
        <FormSignUp formik={formik} />
        <div className="relative mt-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="bg-white px-2 text-gray-600">Hoặc</span>
          </div>
        </div>

        <p className="mt-6 text-center text-sm text-gray-600">
          Bạn đã có tài khoản?
          <a href="/login" className="text-rose-600 hover:underline ms-1">
            Đăng nhập
          </a>
        </p>
      </div>
    </div>
  );
}

export default SignUp;

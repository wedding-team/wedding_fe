import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';
import Helper from '../../Utils/Helper';
import FormLogin from '../../Component/Auth/FormLogin';
import { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

const validationSchema = Yup.object({
  email: Yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
  password: Yup.string().min(6, 'Mật khẩu ít nhất 6 ký tự').required('Vui lòng nhập mật khẩu'),
});

function Login() {
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const formik = useFormik({
    initialValues: { email: '', password: '' },
    validationSchema,
    onSubmit: async (values, { setSubmitting, setFieldError }) => {
      try {
        await login(values.email, values.password);
        navigate('/wedding-info');
        Helper.toastSuccess('Đăng nhập thành công!');
      } catch (error) {
        setFieldError('password', error.message);
        Helper.toastError(error.message);
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
      <div className="flex min-h-screen items-center justify-center bg-gray-100 px-1 md:px-4">
        <div className="w-full max-w-md md:bg-white md:rounded-lg md:shadow-md max-md:p-2 md:p-8">
          <div className="flex flex-col items-center">
            <img onClick={() => navigate('/')} src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=rose&shade=500" alt="Logo" className="cursor-pointer h-10" />
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
            Bạn chưa có tài khoản? <a href="/sign-up" className="text-rose-600 hover:underline ms-1">Đăng ký</a>
          </p>
        </div>
      </div>
  );
}

export default Login;
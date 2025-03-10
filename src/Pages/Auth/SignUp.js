import {Toaster} from 'sonner';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import {useNavigate} from 'react-router-dom';
import instance from '../../Apis/instance';
import FormSignUp from '../../Component/Auth/FormSignUp';
import Helper from '../../Utils/Helper';
import {useContext} from 'react';
import {AuthContext} from '../../context/AuthContext';

const validationSchema = Yup.object({
    email: Yup.string().email('Email không hợp lệ').required('Vui lòng nhập email'),
    password: Yup.string().min(6, 'Mật khẩu ít nhất 6 ký tự').required('Vui lòng nhập mật khẩu'),
    password_confirmation: Yup.string()
        .oneOf([Yup.ref('password'), null], 'Mật khẩu không khớp')
        .required('Vui lòng nhập xác nhận mật khẩu'),
    name: Yup.string().required('Vui lòng nhập họ và tên'),
});

function SignUp() {
    const navigate = useNavigate();
    const {login} = useContext(AuthContext);

    const formik = useFormik({
        initialValues: {name: '', email: '', password: '', password_confirmation: ''},
        validationSchema,
        onSubmit: async (values, {setSubmitting, setFieldError}) => {
            try {
                await instance.post('/api/v1/auth', {
                    name: values.name,
                    email: values.email,
                    password: values.password,
                    password_confirmation: values.password_confirmation,
                });
                await login(values.email, values.password); // Tự động đăng nhập
                navigate('/wedding-info');
                Helper.toastSuccess('Đăng ký thành công!');
            } catch (error) {
                const errorMessage = error.response?.data?.errors?.[0] || 'Đăng ký thất bại!';
                setFieldError('email', errorMessage);
                Helper.toastError(errorMessage);
            } finally {
                setSubmitting(false);
            }
        },
    });

    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-1 md:px-4">
            <div className="w-full max-w-md md:bg-white rounded-lg md:shadow-md max-md:p-2 md:p-8">
                <div className="flex flex-col items-center">
                    <img onClick={() => navigate('/')} src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=rose&shade=500" alt="Logo"
                         className="h-10"/>
                    <h2 className="mt-4 text-2xl font-bold text-gray-900">ĐĂNG KÝ</h2>
                </div>
                <FormSignUp formik={formik}/>
                <div className="relative mt-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="md:bg-white px-2 text-gray-600">Hoặc</span>
                    </div>
                </div>
                <p className="mt-6 text-center text-sm text-gray-600">
                    Bạn đã có tài khoản? <a href="/login" className="text-rose-600 hover:underline ms-1">Đăng nhập</a>
                </p>
            </div>
            <Toaster position="bottom-right" richColors/>
        </div>
    );
}

export default SignUp;

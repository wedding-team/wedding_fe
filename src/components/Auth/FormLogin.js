import { Link } from 'react-router-dom';
import PasswordInput from "./PasswordInput";
import React, {useEffect, useRef} from "react";

function FormLogin({ formik, loading }) {
    const emailRef = useRef(null);

    useEffect(() => {
        emailRef.current?.focus();
    }, []);

    return (
        <form className="mt-2 space-y-4" onSubmit={formik.handleSubmit}>
            <div className="space-y-4">
                <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 font-montserrat mb-1">
                        Email
                    </label>
                    <div className="relative">
                        <input
                            ref={emailRef}
                            id="email"
                            type="email"
                            autoComplete="email"
                            className={`w-full px-3 py-2 border rounded-lg shadow-sm focus:outline-none placeholder:text-sm ${
                                formik.touched.email && formik.errors.email
                                    ? 'border-red-500'
                                    : 'border-gray-300'
                            }`}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            disabled={formik.isSubmitting}
                            placeholder="Nhập email của bạn"
                        />
                        {formik.touched.email && formik.errors.email && (
                            <p className="mt-1 text-sm text-red-600 font-montserrat">{formik.errors.email}</p>
                        )}
                    </div>
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium text-gray-700 font-montserrat mb-1">
                        Mật khẩu
                    </label>
                    <PasswordInput
                        id="password"
                        placeholder="Nhập mật khẩu"
                        value={formik.values.password}
                        onChange={formik.handleChange}
                        error={formik.errors.password}
                        touched={formik.touched.password}
                        isDisabled={formik.isSubmitting}
                        autoComplete="current-password"
                    />
                </div>
            </div>
            <div className="flex justify-between items-center text-sm">
                <div className="flex items-center">
                    <input
                        id="remember-me"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-red-600 focus:ring-red-500"
                        disabled={formik.isSubmitting}
                    />
                    <label htmlFor="remember-me" className="ml-2 text-gray-700 font-montserrat">
                        Ghi nhớ đăng nhập
                    </label>
                </div>
                <Link
                    to="/forgot-password"
                    className="text-red-600 hover:text-red-700 font-medium font-montserrat hover:underline transition-colors duration-200"
                >
                    Quên mật khẩu?
                </Link>
            </div>
            <div className="pt-2">
                <button type="submit" className={`w-full bg-red-600 text-white py-2 rounded-lg font-medium font-montserrat shadow-md hover:shadow-lg transition-all duration-200 ${
                        formik.isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-red-700 hover:to-red-600'
                    }`} disabled={formik.isSubmitting || loading}>
                    {loading ? (
                        <span className="flex items-center justify-center">
                            <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                            </svg>
                            Đang đăng nhập...
                        </span>
                    ) : (
                        <span>Đăng nhập</span>
                    )}
                </button>
            </div>
            <div className=" text-center text-sm text-gray-600 font-montserrat mt-8">
                <span className="mr-1">Chưa có tài khoản?</span>
                <Link
                    to="/sign-up"
                    className="text-red-600 hover:text-red-700 font-medium hover:underline transition-colors duration-200"
                >
                    Đăng ký ngay
                </Link>
            </div>
        </form>
    );
}

export default FormLogin;
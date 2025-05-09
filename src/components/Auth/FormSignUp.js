import PasswordInput from "./PasswordInput";
import React, {useEffect, useRef} from "react";

const FormSignUp = ({formik, loading}) => {
    const emailRef = useRef(null);

    useEffect(() => {
        emailRef.current?.focus();
    }, []);

    return (
        <form className="mt-2 space-y-4" onSubmit={formik.handleSubmit}>
            <div>
                <label className="max-md:hidden text-sm font-medium text-gray-700">Email</label>
                <input
                    ref={emailRef}
                    id="email"
                    type="email"
                    className={`max-md:h-12 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none placeholder:text-sm ${
                        formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    placeholder="Nhập email của bạn"
                />
                {formik.errors.email && formik.touched.email && (
                    <p className="text-red-500 text-sm">{formik.errors.email}</p>
                )}
            </div>
            <PasswordInput
                id="password"
                label="Mật khẩu"
                placeholder="Nhập mật khẩu"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={formik.errors.password}
                touched={formik.touched.password}
                isDisabled={formik.isSubmitting}
                autoComplete="new-password"
            />
            <PasswordInput
                id="password_confirmation"
                label="Xác nhận mật khẩu"
                placeholder="Xác nhận mật khẩu"
                value={formik.values.password_confirmation}
                onChange={formik.handleChange}
                error={formik.errors.password_confirmation}
                touched={formik.touched.password_confirmation}
                isDisabled={formik.isSubmitting}
                autoComplete="new-password"
                className="mb-2"
            />
            <button type="submit" className={`w-full bg-red-600 text-white py-2 rounded-lg font-medium font-montserrat shadow-md hover:shadow-lg transition-all duration-200 ${
                        formik.isSubmitting ? 'opacity-70 cursor-not-allowed' : 'hover:from-red-700 hover:to-red-600'
                    }`} disabled={formik.isSubmitting || loading} >
                {loading ? (
                    <span className="flex items-center justify-center">
                        <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Đang đăng ký...
                    </span>
                ) : (
                    <span>Đăng ký</span>
                )}
            </button>
        </form>
    );
};

export default FormSignUp;
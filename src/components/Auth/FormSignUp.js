import PasswordInput from "./PasswordInput";

const FormSignUp = ({ formik, loading }) => {
    return (
        <form className="mt-6 space-y-4" onSubmit={formik.handleSubmit}>
            <div>
                <label className="max-md:hidden text-sm font-medium text-gray-700">Email</label>
                <input
                    id="email"
                    type="email"
                    className={`max-md:h-12 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:border-primary-600 focus:ring-1 focus:ring-primary-600 ${
                        formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
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
                onBlur={formik.handleBlur}
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
                onBlur={formik.handleBlur}
                error={formik.errors.password_confirmation}
                touched={formik.touched.password_confirmation}
                isDisabled={formik.isSubmitting}
                autoComplete="new-password"
            />

            <button
                type="submit"
                className={`max-md:h-12 w-full bg-secondary-600 text-white py-2 rounded-md font-medium hover:opacity-90 transition-colors duration-200 ${
                    formik.isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={formik.isSubmitting || loading}
            >
                {loading ? 'Đang đăng ký...' : 'Đăng ký'}
            </button>
        </form>
    );
};

export default FormSignUp;
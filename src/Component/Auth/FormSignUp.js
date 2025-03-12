const FormSignUp = ({ formik, loading }) => {
    return (
        <form className="mt-6 space-y-4" onSubmit={formik.handleSubmit}>
            <div>
                <label className="max-md:hidden text-sm font-medium text-gray-700">Email</label>
                <input
                    id="email"
                    type="email"
                    className="max-md:h-12 mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Nhập email của bạn"
                />
                {formik.errors.email && formik.touched.email && (
                    <p className="text-red-500 text-sm">{formik.errors.email}</p>
                )}
            </div>
            <div>
                <label className="max-md:hidden text-sm font-medium text-gray-700">Mật khẩu</label>
                <input
                    id="password"
                    type="password"
                    autoComplete="password"
                    className="max-md:h-12 mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Nhập mật khẩu"
                />
                {formik.errors.password && formik.touched.password && (
                    <p className="text-red-500 text-sm">{formik.errors.password}</p>
                )}
            </div>
            <div>
                <label className="max-md:hidden text-sm font-medium text-gray-700">Xác nhận mật khẩu</label>
                <input
                    id="password_confirmation"
                    type="password"
                    autoComplete="password_confirmation"
                    className="max-md:h-12 mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                    value={formik.values.password_confirmation}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Xác nhận mật khẩu"
                />
                {formik.errors.password_confirmation && formik.touched.password_confirmation && (
                    <p className="text-red-500 text-sm">{formik.errors.password_confirmation}</p>
                )}
            </div>
            <button
                type="submit"
                className={`max-md:h-12 w-full bg-rose-500 text-white py-2 rounded-md font-medium hover:bg-rose-600 transition-colors duration-200 ${
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
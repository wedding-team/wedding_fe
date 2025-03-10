import { Link } from 'react-router-dom';

function FormLogin({ formik }) {
    return (
        <form className="mt-6 space-y-4" onSubmit={formik.handleSubmit}>
            <div>
                <label htmlFor="email" className="max-md:hidden text-sm font-medium text-gray-700">
                    Email
                </label>
                <input
                    id="email"
                    type="email"
                    autoComplete="email"
                    className={`max-md:h-12 mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500 ${
                        formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'
                    }`}
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    disabled={formik.isSubmitting}
                    placeholder="Nhập email của bạn"
                />
                {formik.touched.email && formik.errors.email && (
                    <p className="mt-1 text-sm text-red-500">{formik.errors.email}</p>
                )}
            </div>

            <div>
                <label htmlFor="password" className="max-md:hidden text-sm font-medium text-gray-700">
                    Mật khẩu
                </label>
                <input
                    id="password"
                    type="password"
                    autoComplete="current-password"
                    className={`max-md:h-12 mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500 ${
                        formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'
                    }`}
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    disabled={formik.isSubmitting}
                    placeholder="Nhập mật khẩu"
                />
                {formik.touched.password && formik.errors.password && (
                    <p className="mt-1 text-sm text-red-500">{formik.errors.password}</p>
                )}
            </div>

            <div className="flex justify-between items-center text-sm">
                <div className="flex items-center">
                    <input
                        id="remember-me"
                        type="checkbox"
                        className="h-4 w-4 border-gray-300 rounded text-rose-600 focus:ring-rose-500"
                        disabled={formik.isSubmitting}
                    />
                    <label htmlFor="remember-me" className="ml-2 text-gray-900">
                        Lưu mật khẩu
                    </label>
                </div>
                <Link to="/forgot-password" className="text-rose-600 hover:underline">
                    Quên mật khẩu?
                </Link>
            </div>

            <button
                type="submit"
                className={`max-md:h-12 w-full bg-rose-500 text-white py-2 rounded-md font-medium hover:bg-rose-600 transition-colors duration-200 ${
                    formik.isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
                }`}
                disabled={formik.isSubmitting}
            >
                {formik.isSubmitting ? 'Đang đăng nhập...' : 'Đăng nhập'}
            </button>
        </form>
    );
}

export default FormLogin;
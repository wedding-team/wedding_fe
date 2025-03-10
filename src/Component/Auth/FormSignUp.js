import { Link } from "react-router-dom";

const FormSignUp = ({ formik }) => {
    return (
        <form className="mt-6 space-y-4" onSubmit={formik.handleSubmit}>
            <div>
                <label className="max-md:hidden text-sm font-medium text-gray-700">Họ và tên</label>
                <input
                    id="name"
                    name="name"
                    type="text"
                    className="max-md:h-12 mt-1 w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-rose-500"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Nhập họ và tên"
                />
                {formik.touched.name && formik.errors.name && (
                    <p className="text-red-500 text-sm">{formik.errors.name}</p>
                )}
            </div>
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
            <div className="flex items-center text-sm">
                <input
                    id="terms"
                    type="checkbox"
                    className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                />
                <label htmlFor="terms" className="ml-2 text-gray-900">
                    Tôi đồng ý với các{" "}
                    <Link to={"#"} className="text-rose-600 hover:underline">Điều khoản</Link>
                </label>
            </div>
            <button
                type="submit"
                className="max-md:h-12 w-full bg-rose-500 text-white py-2 rounded-md font-medium hover:bg-rose-400"
                disabled={formik.isSubmitting}
            >
                Đăng ký
            </button>
        </form>
    );
};

export default FormSignUp;
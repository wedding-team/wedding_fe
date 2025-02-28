import { Link } from "react-router-dom";
const FormSignUp = ({ formik }) => {
  return (
    <form className="mt-6 space-y-4" onSubmit={formik.handleSubmit}>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Họ và tên
        </label>
        <input
          id="fullname"
          type="text"
          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
        />
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">Email</label>
        <input
          id="email"
          type="email"
          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.email && formik.touched.email && (
          <p className="text-red-500 text-sm">{formik.errors.email}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Mật khẩu
        </label>
        <input
          id="password"
          type="password"
          autoComplete="password"
          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.password && formik.touched.password && (
          <p className="text-red-500 text-sm">{formik.errors.password}</p>
        )}
      </div>
      <div>
        <label className="block text-sm font-medium text-gray-700">
          Xác nhận mật khẩu
        </label>
        <input
          id="password_confirmation"
          type="password"
          autoComplete="password_confirmation"
          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          value={formik.values.password_confirmation}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
        {formik.errors.password_confirmation &&
          formik.touched.password_confirmation && (
            <p className="text-red-500 text-sm">
              {formik.errors.password_confirmation}
            </p>
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
          <Link to={"#"} className="text-rose-600 hover:underline">
            Điều khoản
          </Link>
        </label>
      </div>
      <button
        type="submit"
        className="w-full bg-rose-500 text-white py-2 rounded-md font-medium hover:bg-rose-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        disabled={formik.isSubmitting}
      >
        Đăng ký
      </button>
    </form>
  );
};

export default FormSignUp;

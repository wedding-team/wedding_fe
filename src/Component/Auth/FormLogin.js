import { Link } from "react-router-dom";
function FormLogin({ formik }) {
  return (
    <form className="mt-6 space-y-4" onSubmit={formik.handleSubmit}>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          autoComplete="email"
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
        <label
          htmlFor="password"
          className="block text-sm font-medium text-gray-700"
        >
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

      <div className="flex justify-between items-center text-sm">
        <div className="flex items-center">
          <input
            id="remember-me"
            type="checkbox"
            className="h-4 w-4 border-gray-300 rounded"
          />
          <label htmlFor="remember-me" className="ml-2 text-gray-900">
            Lưu mật khẩu
          </label>
        </div>
        <Link to={"#"} className="text-rose-600 hover:underline">
          Quên mật khẩu?
        </Link>
      </div>

      <button
        type="submit"
        className="w-full bg-rose-500 text-white py-2 rounded-md font-medium hover:bg-rose-400 focus:outline-none focus:ring-2 focus:ring-indigo-500"
        disabled={formik.isSubmitting}
      >
        Đăng nhập
      </button>
    </form>
  );
}

export default FormLogin;

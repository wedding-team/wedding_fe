import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

function FormSignUp() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-gray-100 px-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-8">
                <div className="flex flex-col items-center">
                    <img
                        src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600"
                        alt="Logo"
                        className="h-10"
                    />
                    <h2 className="mt-4 text-2xl font-bold text-gray-900">
                        ĐĂNG KÝ
                    </h2>
                </div>

                <form className="mt-6 space-y-4">
                    <div>
                        <label htmlFor="fullname" className="block text-sm font-medium text-gray-700">
                            Họ và tên
                        </label>
                        <input
                            id="fullname"
                            type="text"
                            required
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                            Số điện thoại
                        </label>
                        <input
                            id="phone"
                            type="tel"
                            required
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email
                        </label>
                        <input
                            id="email"
                            type="email"
                            required
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Mật khẩu
                        </label>
                        <input
                            id="password"
                            type="password"
                            required
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div>
                        <label htmlFor="confirm-password" className="block text-sm font-medium text-gray-700">
                            Xác nhận mật khẩu
                        </label>
                        <input
                            id="confirm-password"
                            type="password"
                            required
                            className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                        />
                    </div>

                    <div className="flex items-center text-sm">
                        <input
                            id="terms"
                            type="checkbox"
                            className="h-4 w-4 text-indigo-600 border-gray-300 rounded"
                        />
                        <label htmlFor="terms" className="ml-2 text-gray-900">
                            Tôi đồng ý với các <a href="#" className="text-indigo-600 hover:underline">Điều khoản</a>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded-md font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                    >
                        Đăng ký
                    </button>
                </form>

                <div className="relative mt-6">
                    <div className="absolute inset-0 flex items-center">
                        <div className="w-full border-t border-gray-300"></div>
                    </div>
                    <div className="relative flex justify-center text-sm">
                        <span className="bg-white px-2 text-gray-600">Hoặc</span>
                    </div>
                </div>

                <div className="mt-4 flex space-x-4">
                    <button
                        className="flex items-center w-full justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-100"
                    >
                        <FcGoogle className="w-5 h-5 mr-2" />
                        Google
                    </button>
                    <button
                        className="flex items-center w-full justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 hover:bg-gray-100"
                    >
                        <FaFacebook className="w-5 h-5 mr-2 text-blue-600" />
                        Facebook
                    </button>
                </div>

                <p className="mt-6 text-center text-sm text-gray-600">
                    Bạn đã có tài khoản?
                    <a href="/login" className="text-indigo-600 hover:underline ms-1">
                        Đăng nhập
                    </a>
                </p>
            </div>
        </div>
    );
}

export default FormSignUp;

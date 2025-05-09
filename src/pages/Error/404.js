import { Link } from "react-router-dom";
import Navbar from "../../components/common/Navbar";
import Footer from "../../components/common/Footer";

function NotFound() {
    return (
        <div>
            <Navbar/>
            <div className="flex flex-col items-center justify-center py-20 bg-gray-100 text-center px-4">
                <img src="/images/logo-removebg-preview.png" alt="logo" className="h-48 w-auto"/>
                <h2 className="text-2xl font-semibold text-gray-800 mt-4">Trang Không Tồn Tại</h2>
                <p className="text-gray-600 mt-2">Đường dẫn bạn vừa truy cập đã hết hạn hoặc không tồn tại.</p>
                <Link
                    to="/"
                    className="mt-6 px-6 py-3 bg-red-800 text-white rounded-full shadow-lg hover:bg-red-900 transition"
                >
                    Về trang chủ
                </Link>
            </div>
            <Footer/>
        </div>
    );
}

export default NotFound;
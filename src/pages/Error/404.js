import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-center px-4">
            <h1 className="text-6xl font-bold text-rose-500">404</h1>
            <h2 className="text-2xl font-semibold text-gray-800 mt-4">Không tìm thấy trang</h2>
            <p className="text-gray-600 mt-2">Có vẻ như bạn đã truy cập vào một trang không tồn tại.</p>
            <Link
                to="/"
                className="mt-6 px-6 py-3 bg-rose-500 text-white rounded-lg shadow-lg hover:bg-rose-600 transition"
            >
                Quay lại trang chủ
            </Link>
        </div>
    );
}

export default NotFound;
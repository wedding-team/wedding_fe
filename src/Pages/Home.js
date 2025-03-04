import React from 'react';
import { useNavigate } from 'react-router-dom'; 

const HomePage = () => {
  const navigate = useNavigate(); 

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center">
      <header className="w-full bg-pink-600 text-white shadow-md">
        <div className="max-w-7xl mx-auto py-4 px-6 flex justify-between items-center">
          <h1 className="text-2xl font-bold">Wedding QR Code</h1>
          <div className="space-x-4">
            <button
              onClick={() => navigate('/login')}
              className="bg-white text-pink-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-200 transition"
            >
              Đăng nhập
            </button>
            <button
              onClick={() => navigate('/sign-up')}
              className="bg-pink-800 text-white px-4 py-2 rounded-md font-semibold hover:bg-pink-700 transition"
            >
              Đăng ký
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto mt-8 px-6 flex-1">
        <section className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Đánh giá dịch vụ Wedding QR Code
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Wedding QR Code giúp bạn tạo mã QR cá nhân hóa cho ngày cưới của mình, 
            giúp khách mời dễ dàng truy cập thông tin, gửi lời chúc và hơn thế nữa!
          </p>
        </section>

        <section className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Dễ sử dụng</h3>
            <p className="text-gray-600 mt-2">
              Chỉ cần vài bước đơn giản, bạn đã có thể tạo mã QR cho ngày cưới của mình.
            </p>
            <div className="mt-4 flex justify-center">
              <span className="text-yellow-400 text-2xl">★★★★★</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Thiết kế đẹp mắt</h3>
            <p className="text-gray-600 mt-2">
              Tùy chỉnh giao diện mã QR dễ dàng để phù hợp với phong cách tiệc cưới.
            </p>
            <div className="mt-4 flex justify-center">
              <span className="text-yellow-400 text-2xl">★★★★☆</span>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800">Tích hợp thông minh</h3>
            <p className="text-gray-600 mt-2">
              Liên kết với RSVP, bản đồ, và album ảnh để khách mời dễ dàng tương tác.
            </p>
            <div className="mt-4 flex justify-center">
              <span className="text-yellow-400 text-2xl">★★★★★</span>
            </div>
          </div>
        </section>

        <section className="mt-12 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">
            Sẵn sàng để tạo mã QR cho ngày cưới của bạn?
          </h3>
          <button
            onClick={() => navigate('/register')}
            className="bg-pink-600 text-white px-6 py-3 rounded-md font-semibold hover:bg-pink-700 transition"
          >
            Đăng ký ngay hôm nay!
          </button>
        </section>
      </main>
      <footer className="w-full bg-gray-800 text-white py-4 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p>&copy; 2023 Wedding QR Code. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
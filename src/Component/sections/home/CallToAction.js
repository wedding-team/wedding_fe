import React from 'react';
import { useNavigate } from 'react-router-dom';

const CallToAction = () => {
    const navigate = useNavigate();

    return (
        <section className="bg-gradient-to-r from-pink-600 to-purple-600 text-white p-12 rounded-2xl shadow-lg text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Bắt Đầu Hành Trình Tình Yêu Của Bạn!
            </h2>
            <p className="text-lg max-w-2xl mx-auto mb-8 opacity-90">
                Đừng để ngày cưới của bạn chỉ là một sự kiện, hãy biến nó thành kỷ niệm đáng nhớ với thiệp cưới số từ Wedding QR Code. Đăng ký ngay hôm nay để nhận ưu đãi đặc biệt và trải nghiệm dịch vụ đỉnh cao!
            </p>
            <button
                onClick={() => navigate('/sign-up')}
                className="bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
            >
                Đăng Ký Miễn Phí
            </button>
        </section>
    );
};

export default CallToAction;
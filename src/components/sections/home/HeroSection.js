import React from 'react';
import { useNavigate } from 'react-router-dom';
import introVideo from '../../../assets/videos/wedding_intro.mp4';

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <section className="relative w-full h-[90vh] md:h-screen">
            <video
                autoPlay
                muted
                loop
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src={introVideo} type="video/mp4" />
                Trình duyệt của bạn không hỗ trợ video.
            </video>

            <div className="absolute inset-0 bg-gradient-to-r from-red-600/30 to-pink-600/30"></div>

            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center text-white px-4 max-w-4xl mx-auto">
                    <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
                        <span className="block">Wedding QR Code</span>
                        <span className="block mt-3 text-2xl md:text-3xl font-light">
              Website tạo thiệp cưới số hàng đầu Việt Nam
            </span>
                    </h1>
                    <p className="text-lg md:text-xl font-light max-w-2xl mx-auto mb-10 opacity-90">
                        Chọn mẫu cưới trọn gói theo cách riêng của bạn!
                    </p>
                    <button
                        onClick={() => navigate('/wedding/info')}
                        className="bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-50 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
                    >
                        Bắt Đầu Tạo Thiệp
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
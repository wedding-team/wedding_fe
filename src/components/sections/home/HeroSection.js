import React from 'react';
import { useNavigate } from 'react-router-dom';
import introVideo from '../../../assets/videos/WeddingVideo.mp4';

const HeroSection = () => {
    const navigate = useNavigate();

    return (
        <section className="relative w-auto h-[70vh] md:h-[90vh]">
            <video
                autoPlay
                muted
                loop
                className="absolute top-0 left-0 w-full h-full object-cover"
            >
                <source src={introVideo} type="video/mp4"/>
                Trình duyệt của bạn không hỗ trợ video.
            </video>

            <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-gray-600/20"></div>

            <div className="absolute inset-0 flex items-center justify-center px-4">
                <div className="text-center text-white w-full max-w-4xl mx-auto">
                    <div className=" mb-4 md:mb-6 leading-tight">
                        <h1 className="text-2xl md:text-4xl font-bold block uppercase">website tạo Thiệp cưới online miễn phí</h1>
                        <span className="block text-base sm:text-lg md:text-2xl mt-2 md:mt-3 font-light">
                            Gửi yêu thương trọn vẹn – Thiết kế thiệp cưới số tinh tế & hiện đại
                        </span>
                    </div>
                    <p className="text-xs md:text-lg font-light max-w-2xl mx-auto mb-4 md:mb-6 opacity-90">
                        Chọn mẫu cưới trọn gói theo cách riêng của bạn!
                    </p>
                    <button
                        onClick={() => navigate('/wedding/general-info')}
                        className="border border-white md:border-2 bg-transparent backdrop-blur-md text-white px-6 py-3 md:px-8 md:py-4 rounded-full text-sm sm:text-base md:text-lg font-semibold transition-all hover:shadow-xl transform hover:scale-105 duration-300"
                    >
                        Bắt Đầu Tạo Thiệp
                    </button>
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProcessStep from '../ui/ProcessStep';

const ProcessSection = () => {
    const navigate = useNavigate();

    const steps = [
        {
            stepNumber: 1,
            title: "Đăng ký tài khoản",
            description: "Đăng ký miễn phí tài khoản Wedding QR Code của bạn",
        },
        {
            stepNumber: 2,
            title: "Tùy chỉnh thiệp",
            description: "Chọn mẫu và tùy chỉnh với ảnh, thông tin của bạn",
        },
        {
            stepNumber: 3,
            title: "Chia sẻ & Quản lý",
            description: "Chia sẻ QR code hoặc link và quản lý khách mời",
        },
    ];

    return (
        <section className="mb-20 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
                Thiệp Cưới Số Hoạt Động Như Thế Nào?
            </h2>
            <div className="w-24 h-1 bg-pink-500 mx-auto mb-8"></div>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-12 leading-relaxed">
                Quá trình tạo thiệp cưới số với Wedding QR Code cực kỳ đơn giản...
            </p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-10">
                {steps.map((step, index) => (
                    <ProcessStep key={index} {...step} />
                ))}
            </div>
            <button
                onClick={() => navigate('/wedding-info')}
                className="mt-12 bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-700 transition-all shadow-lg hover:shadow-xl transform hover:scale-105 duration-300"
            >
                Tạo Thiệp Ngay Hôm Nay
            </button>
        </section>
    );
};

export default ProcessSection;
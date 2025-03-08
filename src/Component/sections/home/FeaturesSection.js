import React from 'react';
import FeatureCard from './FeatureCard';
import { Heart, Gift, MessageCircle, UserRoundCheck, Cloud, PenTool } from 'lucide-react';

const FeaturesSection = () => {
    const features = [
        {
            icon: <Heart className="w-10 h-10 text-pink-500" />,
            title: "Cá Nhân Hóa Không Giới Hạn",
            description: "Tùy chỉnh thiệp cưới với ảnh cưới, video giới thiệu, lời nhắn cá nhân, và giao diện phù hợp với phong cách của bạn. Từ màu sắc, font chữ đến bố cục, mọi thứ đều do bạn quyết định.",
        },
        {
            icon: <Gift className="w-10 h-10 text-pink-500" />,
            title: "Chia Sẻ Dễ Dàng, Tiết Kiệm Chi Phí",
            description: "Gửi thiệp qua QR code, email, WhatsApp, hoặc mạng xã hội mà không cần in ấn. Giảm thiểu chi phí và bảo vệ môi trường với phiên bản số hóa hoàn toàn.",
        },
        {
            icon: <MessageCircle className="w-10 h-10 text-pink-500" />,
            title: "Tương Tác Thông Minh",
            description: "Khách mời có thể RSVP trực tuyến, gửi lời chúc mừng, xem bản đồ địa điểm, và truy cập album ảnh cưới ngay trên thiệp số mà không cần giấy mời phức tạp.",
        },
        {
            icon: <Cloud className="w-10 h-10 text-pink-500" />,
            title: "Lưu Giữ Kỷ Niệm Vĩnh Cửu",
            description: "Thiệp cưới số được lưu trữ trên đám mây, cho phép bạn và gia đình truy cập lại bất cứ lúc nào, kể cả sau nhiều năm, như một kho báu ký ức.",
        },
        {
            icon: <UserRoundCheck className="w-10 h-10 text-pink-500" />,
            title: "Hỗ Trợ Toàn Diện",
            description: "Đội ngũ Wedding QR Code hỗ trợ bạn từ khâu thiết kế, đăng tải nội dung đến quản lý khách mời, đảm bảo mọi thứ hoàn hảo cho ngày trọng đại.",
        },
        {
            icon: <PenTool className="w-10 h-10 text-pink-500" />,
            title: "Thiết Kế Sang Trọng",
            description: "Bộ sưu tập mẫu thiệp và website cưới được thiết kế bởi các chuyên gia, mang phong cách tinh tế, phù hợp với mọi chủ đề cưới từ cổ điển đến hiện đại.",
        },
    ];

    return (
        <section className="mb-20">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold text-pink-600 mb-4">
                    Tại Sao Chọn Thiệp Cưới Số?
                </h2>
                <div className="w-24 h-1 bg-pink-500 mx-auto"></div>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </div>
        </section>
    );
};

export default FeaturesSection;
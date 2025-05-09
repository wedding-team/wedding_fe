import React from 'react';
import FeatureCard from './FeatureCard';

const FeaturesSection = () => {
    const features = [
        {
            title: "Đa dạng mẫu thiệp",
            image: "/images/chosse-template.jpg",
            description:
                "Thư viện thiệp cưới phong phú, từ cổ điển đến hiện đại, dễ dàng tùy chỉnh ảnh, video và màu sắc để thể hiện câu chuyện tình yêu của riêng bạn.",
        },
        {
            title: "Tiết kiệm chi phí & thời gian",
            image: "/images/save-time.jpg",
            description:
                "Không cần in ấn hay gửi tận tay, bạn có thể tạo và chia sẻ thiệp chỉ trong vài phút. Mọi thao tác đều online, nhanh chóng và hoàn toàn miễn phí.",
        },
        {
            title: "Chia sẻ dễ dàng & nhanh chóng",
            image: "/images/share-easy.jpg",
            description:
                "Thiệp cưới được lưu trữ online, giúp bạn gửi đi chỉ với một cú nhấp chuột. Khách mời nhận ngay, xem mọi thông tin và gửi lời chúc bất cứ lúc nào.",
        },
    ];

    return (
        <section className="relative -top-[150px]">
            <div className="grid max-sm:grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => (
                    <FeatureCard key={index} {...feature} />
                ))}
            </div>
        </section>
    );
};

export default FeaturesSection;
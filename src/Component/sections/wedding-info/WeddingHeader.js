import React from 'react';
import { Heart } from 'lucide-react';

const WeddingHeader = () => {
    return (
        <div className="text-center mb-10">
            <div className="flex justify-center mb-4">
                <div className="relative">
                    <Heart className="w-16 h-16 text-rose-500" />
                    <Heart className="w-8 h-8 text-indigo-500 absolute top-4 left-4" />
                </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-900">Thông Tin Đám Cưới</h1>
            <p className="mt-3 text-lg text-gray-600">Vui lòng điền thông tin chi tiết về đám cưới của bạn</p>
        </div>
    );
};

export default WeddingHeader;
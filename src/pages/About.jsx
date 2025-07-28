function About() {
    return (
        <section className="bg-gradient-to-b from-rose-50 to-white py-16 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16">
                    <div className="mx-auto h-24 w-24 bg-pink-100 rounded-full flex items-center justify-center mb-6">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 text-pink-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" />
                        </svg>
                    </div>
                    <h1 className="text-4xl md:text-5xl font-bold text-pink-700 mb-6 font-serif">
                        Câu chuyện của chúng tôi
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Thiệp Cưới Online - Nơi kết nối yêu thương bằng những tấm thiệp kỹ thuật số đầy cảm xúc
                    </p>
                </div>

                <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 mb-16">
                    <div className="grid md:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Sứ mệnh của chúng tôi</h2>
                            <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                                Trong thời đại số hóa, chúng tôi tin rằng những khoảnh khắc quan trọng như ngày cưới xứng đáng được lưu giữ một cách đặc biệt. Thiệp Cưới Online ra đời để mang đến giải pháp hiện đại nhưng vẫn giữ được sự ấm áp, tinh tế của truyền thống.
                            </p>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Mỗi tấm thiệp không chỉ là lời mời, mà còn là câu chuyện tình yêu, là dấu ấn cá nhân của cặp đôi.
                            </p>
                        </div>
                        <div className="rounded-lg overflow-hidden shadow-lg">
                            <img
                                src="https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                                alt="Thiệp cưới online mẫu"
                                className="w-full h-auto object-cover"
                            />
                        </div>
                    </div>
                </div>

                {/* Lợi ích */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-center text-gray-900 mb-12 font-serif">Tại sao chọn chúng tôi?</h2>
                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="text-pink-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Thiết kế độc bản</h3>
                            <p className="text-gray-600">
                                Hàng trăm mẫu thiệp độc đáo, dễ dàng tùy chỉnh với thông tin cá nhân, hình ảnh cặp đôi và màu sắc chủ đề.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="text-pink-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Gửi thiệp thông minh</h3>
                            <p className="text-gray-600">
                                Hệ thống gửi thiệp đa nền tảng: SMS, Email, QR Code, MXH. Theo dõi trạng thái và nhận phản hồi từ khách mời.
                            </p>
                        </div>

                        <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="text-pink-600 mb-4">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" />
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">Tiết kiệm - Hiệu quả</h3>
                            <p className="text-gray-600">
                                Giảm 80% chi phí so với thiệp giấy truyền thống. Thân thiện môi trường và tiết kiệm thời gian chuẩn bị.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="bg-pink-700 rounded-2xl p-8 md:p-12 text-white mb-16">
                    <div className="grid md:grid-cols-4 gap-8 text-center">
                        <div>
                            <div className="text-4xl font-bold mb-2">500+</div>
                            <div className="text-pink-100">Mẫu thiệp độc đáo</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">10K+</div>
                            <div className="text-pink-100">Cặp đôi hạnh phúc</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">98%</div>
                            <div className="text-pink-100">Khách hàng hài lòng</div>
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-2">24/7</div>
                            <div className="text-pink-100">Hỗ trợ khách hàng</div>
                        </div>
                    </div>
                </div>

                <div className="text-center max-w-4xl mx-auto">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6 font-serif">Chúng tôi tin rằng...</h2>
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        Mỗi tấm thiệp cưới là sứ giả của tình yêu, mang theo niềm vui và hạnh phúc đến với những người thân yêu. Hãy để chúng tôi giúp bạn kể câu chuyện tình yêu theo cách đặc biệt nhất!
                    </p>
                    <div className="inline-flex items-center text-pink-700 font-medium">
                        <span className="mr-2">Đội ngũ Thiệp Cưới Online</span>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.707l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd" />
                        </svg>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
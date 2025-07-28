import introVideo from '../../../assets/videos/WeddingVideo.mp4';
import React from "react";
import {Link} from "react-router-dom";
import { HiMiniArrowLongRight } from "react-icons/hi2";

function ImprintSection() {
    return (
        <section className="relative bottom-10">
            <div className="flex flex-col md:flex-row gap-10 items-center justify-center">
                <div className="order-1 md:order-2 text-center max-w-3xl px-4 md:px-0">
                    <div>
                        <h2 className="text-xl font-Sigmar text-red-700/80 max-md:text-base md:text-xl mb-2">Khoảnh khắc
                            đáng nhớ</h2>
                        <h1 className="font-Sigmar text-red-700 text-2xl md:text-3xl mb-4">
                            Tạo dấu ấn riêng cho ngày trọng đại!
                        </h1>
                        <div className="w-24 h-1 bg-red-700 mx-auto mb-4"></div>
                        <p className="text-gray-600 mx-auto text-sm md:text-base leading-relaxed ">
                            Chưa bao giờ việc chia sẻ và lưu giữ kỷ niệm ngày cưới lại trở nên dễ dàng và sáng tạo như
                            vậy! Hãy để chúng tôi đồng hành cùng bạn trong việc tạo dựng một đám cưới thật đáng nhớ.
                        </p>
                    </div>
                    <div className="mt-8">
                        <div className="grid grid-cols-7 grid-rows-6 gap-1 w-[350px] h-[300px] md:w-[500px] md:h-[400px] mx-auto ">
                                {[
                                    {class: "col-start-2 row-start-1", img: 1},
                                    {class: "col-start-3 row-start-1", img: 2},
                                    {class: "col-start-5 row-start-1 row-span-2 col-span-2", img: 3},
                                    {class: "col-start-4 row-start-2", img: 4},
                                    {class: "col-start-2 row-start-2 row-span-2 col-span-2", img: 5},
                                    {class: "col-start-1 row-start-2", img: 6},
                                    {class: "col-start-1 row-start-3", img: 7},
                                    {class: "col-start-7 row-start-2", img: 8},
                                    {class: "col-start-4 row-start-3 row-span-2 col-span-2", img: 9},
                                    {class: "col-start-6 row-start-3", img: 10},
                                    {class: "col-start-6 row-start-4", img: 11},
                                    {class: "col-start-7 row-start-3", img: 12},
                                    {class: "col-start-3 row-start-4", img: 13},
                                    {class: "col-start-2 row-start-4", img: 14},
                                    {class: "col-start-3 row-start-5", img: 15},
                                    {class: "col-start-4 row-start-5", img: 16},
                                    {class: "col-start-5 row-start-5", img: 17},
                                    {class: "col-start-4 row-start-6", img: 18}
                                ].map((item, index) => (
                                    <div key={index} className={`${item.class} overflow-hidden hover:scale-110 transition-all duration-300 border-2 border-red-700 rounded-md`}>
                                        <img
                                            src={`/images/${item.img}.jpg`}
                                            alt={`${item.img}`}
                                            className="w-full h-full object-cover object-top"
                                        />
                                    </div>
                                ))}
                            </div>
                        <Link
                            to="/sites"
                            className="flex justify-center gap-2 items-center mt-6 max-w-[190px] mx-auto bg-red-700 text-white font-semibold px-6 py-2 rounded-full shadow-md transition-all duration-300 transform hover:scale-105"
                        >
                            Tất cả cặp đôi
                            <HiMiniArrowLongRight size={20}/>
                        </Link>
                    </div>
                </div>
                <div className="order-1 md:order-2 relative w-[280px] h-[560px] md:w-[300px] md:h-[600px] mx-auto">
                    <img
                        src="/images/iphone-removebg-preview.png"
                        alt="iPhone"
                        className="w-full h-full object-contain z-10 relative"
                    />
                    <div
                        className="absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 h-[96%] w-[90%] md:h-[96%] overflow-hidden">
                        <video
                            className="w-full h-full object-cover rounded-[25px]"
                            autoPlay
                            loop
                            muted
                            playsInline
                        >
                            <source src={introVideo} type="video/mp4"/>
                        </video>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ImprintSection;
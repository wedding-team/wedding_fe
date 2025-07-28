import React from 'react';
import {Link} from "react-router-dom";
import {MdOutlineEmail, MdLocationOn} from "react-icons/md";
import {FiPhoneCall} from "react-icons/fi";

const Footer = () => {
    return (
        <footer className="w-full bg-white py-12 ">
            <div className="">
                <div className="max-w-7xl mx-auto px-4 lg:px-8 flex items-center">
                    <img src="/images/logo.png" alt="" className="w-20"/>
                    <div>
                        <div className="flex gap-2 items-center mb-2">
                            <img src="/images/logo-2.png" className="w-10 rounded" alt=""/>
                            <h1 className="text-black capitalize text-xl font-extrabold">Lovelyinvites</h1>
                        </div>
                        <p className="text-sm leading-relaxed italic">Tạo thiệp cưới online miễn phí. </p>
                        <p className="text-sm leading-relaxed italic">Lan tỏa yêu thương theo cách hiện đại và tinh tế nhất.</p>
                    </div>
                </div>
                <div className="py-1 bg-red-900 my-6"></div>
                <div
                    className="max-w-7xl mx-auto px-4 lg:px-8 grid grid-cols-2 md:grid-cols-3 md:gap-8 gap-4 md:gap-10">
                    <div>
                        <h4 className="text-base md:text-lg font-bold mb-2">Về chúng tôi</h4>
                        <ul className="space-y-1 md:space-y-2">
                            <li><Link to="/about" className=" transition-colors flex items-center gap-2">Giới thiệu</Link></li>
                            <li><Link to="/wedding/general-info" className=" transition-colors flex items-center gap-2">Điều khoản sử dụng</Link></li>
                            <li><Link to="/templates" className=" transition-colors flex items-center gap-2">Chính sách bảo mật</Link></li>
                            <li><Link to="/faq" className=" transition-colors flex items-center gap-2">Trung tâm trợ giúp</Link></li>
                            <li><Link to="/faq" className=" transition-colors flex items-center gap-2">Liên hệ</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-base md:text-lg font-bold mb-2 pb-2">Liên kết</h4>
                        <ul className="space-y-1 md:space-y-2">
                            <li><Link to="/privacy" className=" transition-colors flex items-center gap-2">Website đám cưới</Link></li>
                            <li><Link to="/terms" className=" transition-colors flex items-center gap-2">Thiệp cưới online</Link></li>
                            <li><Link to="/contact" className=" transition-colors flex items-center gap-2">Thiệp mời online</Link></li>
                            <li><Link to="/contact" className=" transition-colors flex items-center gap-2">Thiệp sinh nhật online</Link></li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-base md:text-lg font-bold mb-2 pb-2">Kết nối với chúng tôi</h4>
                        <div className="flex space-x-3 mb-4">
                            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="transition-colors">
                                <img src="/images/facebook-color-svgrepo-com.svg" alt="" className="w-7"/>
                            </a>
                            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="  transition-colors">
                                <img src="/images/zalo-seeklogo.svg" alt="" className="w-7"/>
                            </a>
                        </div>
                        <h4 className="text-base md:text-lg font-bold mb-2 pb-2">Liên hệ</h4>
                        <ul className="space-y-2 md:space-y-3 ">
                            <li className="flex items-start gap-3">
                                <FiPhoneCall className="w-4 h-4 md:w-5 md:h-5  mt-0.5 flex-shrink-0"/>
                                <p className="font-medium ">Hotline: <span className="font-normal ">+84 969 164 615</span></p>
                            </li>
                            <li className="flex items-start gap-3">
                                <MdOutlineEmail className="w-4 h-4 md:w-5 md:h-5  mt-0.5 flex-shrink-0"/>
                                <div>
                                    <p className="font-medium ">Email: <span className="font-normal ">hello@lovelyinvites.vn</span></p>
                                </div>
                            </li>
                            <li className="flex items-start gap-3">
                                <MdLocationOn className="w-4 h-4 md:w-5 md:h-5  mt-0.5 flex-shrink-0"/>
                                <div>
                                    <p className="font-medium ">Địa chỉ: <span className="font-normal ">Hà Nội, Việt Nam</span></p>
                                </div>
                            </li>
                        </ul>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
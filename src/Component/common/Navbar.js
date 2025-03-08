import React, {useState, useEffect} from 'react';
import {useNavigate} from 'react-router-dom';

const Navbar = ({title = "Wedding QR Code"}) => {
    const navigate = useNavigate();
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 100) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);


    return (
        <header
            className={`w-full top-0 z-10 transition-all duration-300 ease-in ${
                isScrolled ? 'bg-white shadow-md fixed' : 'absolute bg-transparent'
            }`}
        >
            <div className="max-w-7xl mx-auto py-4 px-6 flex justify-between items-center">
                <h1
                    className={`text-xl md:text-2xl font-bold ${
                        isScrolled ? 'text-pink-600' : 'text-white'
                    }`}
                >
                    {title}
                </h1>
                <div className={`flex`}>
                    <div className={`${isScrolled ? 'text-black hover:text-white' : 'text-white'} hover:bg-pink-600 rounded-full p-3 
                font-semibold duration duration-300 ease-in-out cursor-pointer`}>
                        <p>Hướng dẫn</p>
                    </div>
                    <div className={`${isScrolled ? 'text-black hover:text-white' : 'text-white'} hover:bg-pink-600 rounded-full p-3 
                font-semibold duration duration-300 ease-in-out cursor-pointer`}>
                        <p>Danh sách mẫu</p>
                    </div>
                </div>
                <div className="md:flex space-x-4">
                    <button
                        onClick={() => navigate('/login')}
                        className={`px-4 py-2 rounded-full font-semibold transition duration-300 ease-in-out ${
                            isScrolled
                                ? 'bg-pink-600 text-white hover:bg-pink-500'
                                : 'bg-transparent text-white hover:bg-pink-600 border-white border-2 hover:border-pink-600'
                        }`}
                    >
                        Đăng nhập
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Navbar;
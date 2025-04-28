import React, {useState, useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import UserStatusButton from './UserStatusButton';
import Notification from "./Notification";
import {RxHamburgerMenu} from "react-icons/rx";

const Navbar = ({title = "Wedding QR Code"}) => {
    const navigate = useNavigate();
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const isHomePage = location.pathname === "/";

    useEffect(() => {
        if (!isHomePage) return;
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 100);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [isHomePage]);

    const closeMenu = () => {
        setIsMenuOpen(false);
    };

    const navItems = [
        {label: 'Hướng dẫn', path: '/guide'},
        {label: 'Website đã tạo', path: '/sites'},
        {label: 'Danh sách thiệp cưới', path: '/templates'},
        {label: 'Bảng giá', path: '/price'},
        {label: 'Giới thiệu', path: '/about'}
    ];

    const navbarStyle = !isHomePage ? 'bg-white shadow-md' : isScrolled
        ? 'bg-white shadow-md fixed' : 'absolute bg-transparent';

    const textStyle = !isHomePage || isScrolled ? 'text-primary-800' : 'text-white';
    const navItemStyle = !isHomePage || isScrolled ? 'text-gray-800 hover:text-white' : 'text-white';

    return (
        <header className={`w-full top-0 z-10 transition-all duration-300 ease-in-out ${navbarStyle}`}>
            <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 flex justify-between items-center">
                <h1
                    onClick={() => navigate('/')}
                    className={`text-xl md:text-2xl font-bold cursor-pointer ${textStyle}`}
                >
                    {title}
                </h1>
                <nav className="max-lg:hidden lg:flex space-x-2 mr-4 lg:items-center">
                    {navItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => navigate(item.path)}
                            className={`${navItemStyle} px-4 py-2 rounded-full font-medium hover:bg-primary-600 transition-all duration-200`}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
                <div className={`flex items-center`}>
                    <div className="mr-4">
                        <Notification/>
                    </div>
                    <UserStatusButton isMenuOpen={isMenuOpen} closeMenu={closeMenu} isHomePage={isHomePage}/>
                    <button
                        className={`lg:hidden text-black bg-white rounded-full px-3 py-2 ml-4 focus:outline-none menu-toggle max-lg:end ${isScrolled || !isHomePage ? 'text-primary-600' : 'text-white'}`}
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsMenuOpen(!isMenuOpen);
                        }}
                        aria-label="Toggle menu"
                    >
                        <RxHamburgerMenu size={20}/>
                    </button>
                </div>
            </div>
            {isMenuOpen && (
                <div className="lg:hidden mobile-menu-container">
                    <div className="bg-white shadow-lg transition-transform transform origin-top animate-slideDown">
                        <div className="px-4 py-3 space-y-2">
                            {navItems.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => {
                                        navigate(item.path);
                                        setIsMenuOpen(false);
                                    }}
                                    className="w-full text-left block py-3 px-4 text-gray-800 hover:bg-primary-500 hover:text-white rounded-lg transition-colors duration-200"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navbar;
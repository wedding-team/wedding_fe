import React, {useState, useEffect} from 'react';
import {useNavigate, useLocation} from 'react-router-dom';
import UserStatusButton from './UserStatusButton';
import {RxHamburgerMenu} from "react-icons/rx";

const Navbar = () => {
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

    const navbarStyle = !isHomePage ? 'bg-red-900 shadow-md' : isScrolled
        ? 'bg-red-900 shadow-md fixed' : 'absolute bg-transparent';

    return (
        <header className={`w-full top-0 z-10 transition-all duration-300 ease-in-out ${navbarStyle}`}>
            <div className="max-w-8xl mx-auto py-2 px-4 sm:px-6 flex justify-between items-center">
                <img
                    onClick={() => navigate('/')}
                    src="/images/Lovelyinvites.png"
                    alt="Logo"
                    className="cursor-pointer md:h-14 h-10"
                />
                <nav className="max-lg:hidden lg:flex space-x-1 mr-4 lg:items-center">
                    {navItems.map((item, index) => (
                        <button
                            key={index}
                            onClick={() => navigate(item.path)}
                            className={`text-white px-4 py-2 rounded-full font-medium`}
                        >
                            {item.label}
                        </button>
                    ))}
                </nav>
                <div className={`flex items-center`}>
                    <UserStatusButton isMenuOpen={isMenuOpen} closeMenu={closeMenu} isHomePage={isHomePage}/>
                    <button
                        className={`lg:hidden text-black bg-white rounded-full px-3 py-2 ml-2 focus:outline-none menu-toggle max-lg:end`}
                        onClick={(e) => {
                            e.stopPropagation();
                            setIsMenuOpen(!isMenuOpen);
                        }}
                        aria-label="Toggle menu"
                    >
                        <div className="md:text-[18px] text-[14px]">
                            <RxHamburgerMenu/>
                        </div>
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
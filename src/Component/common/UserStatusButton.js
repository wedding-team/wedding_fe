import React, { useState, useEffect, useRef, useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
import { Globe, Edit, LogOut, ChevronDown} from 'lucide-react';

const UserStatusButton = ({ isHomePage, isScrolled }) => {
    const { user, logout } = useContext(AuthContext);
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const navigate = useNavigate();
    const isAuthenticated = !!user;
    const dropdownRef = useRef(null);

    const defaultImage = "/image/default-avatar.jpg";

    const textColor = !isHomePage || isScrolled ? 'text-pink-600' : 'text-white';
    const bgColor = !isHomePage || isScrolled ? 'bg-white' : 'bg-white/10 backdrop-blur-sm';
    const borderColor = !isHomePage || isScrolled ? 'border-gray-100' : 'border-white/30';

    const buttonStyle = !isHomePage || isScrolled
        ? 'bg-gradient-to-r from-pink-500 to-pink-600 text-white border-pink-600 hover:from-pink-400 hover:to-pink-500 shadow-md'
        : 'bg-transparent backdrop-blur-sm text-white hover:bg-white/10 border-white hover:border-pink-200 shadow-sm';

    const menuItems = [
                { label: 'Trang web của tôi', action: () => navigate('/my-website'), icon: <Globe size={18} className="text-pink-500" /> },
                { label: 'Chỉnh sửa hồ sơ', action: () => navigate('/wedding-info'), icon: <Edit size={18} className="text-pink-500" /> },
                { label: 'Đăng xuất', action: () => { logout(); navigate('/login'); }, icon: <LogOut size={18} className="text-pink-500" /> },
    ];

    const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

    const handleMenuClick = (action) => {
        action();
        setIsDropdownOpen(false);
    };

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        if (isDropdownOpen) {
            document.addEventListener('click', handleClickOutside);
        }
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isDropdownOpen]);

    return (
        <div className="relative user-dropdown" ref={dropdownRef}>
            {isAuthenticated ? (
                <>
                    <div
                        className={`flex items-center gap-2 px-3 py-1 rounded-full cursor-pointer transition-all duration-300 ease-in-out border ${bgColor} ${borderColor} hover:shadow-md group`}
                        onClick={toggleDropdown}
                    >
                        <div className="w-8 h-8 rounded-full flex items-center justify-center overflow-hidden border border-gray-200 shadow-sm group-hover:shadow transition-all duration-300">
                            <img
                                src={defaultImage}
                                alt={'avatar'}
                                className="w-full h-full object-cover"
                                onError={(e) => { e.target.src = defaultImage; }}
                            />
                        </div>
                        <ChevronDown size={16} className={`${textColor} transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : 'rotate-0'}`} />
                    </div>

                    <div
                        className={`absolute right-0 mt-2 w-64 bg-white rounded-lg z-20 overflow-hidden transition-all duration-300 ease-in-out origin-top-right shadow-2xl border border-gray-100
                            ${isDropdownOpen
                            ? 'opacity-100 scale-100 translate-y-0'
                            : 'opacity-0 scale-95 -translate-y-2 pointer-events-none'}`}
                    >
                        <div className="px-4 py-3 border-b border-gray-100 flex items-center gap-3 bg-gradient-to-r from-pink-50 to-purple-50">
                            <div className="w-12 h-12 rounded-full overflow-hidden border border-white shadow-md">
                                <img
                                    src={defaultImage}
                                    alt={`avatar`}
                                    className="w-full h-full object-cover"
                                    onError={(e) => { e.target.src = defaultImage; }}
                                />
                            </div>
                            <div>
                                <p className="text-sm font-medium text-gray-800">{user.email}</p>
                            </div>
                        </div>

                        <div className="py-1">
                            {menuItems.map((item, index) => (
                                <div
                                    key={index}
                                    className={`px-4 py-3 hover:bg-pink-50 cursor-pointer text-gray-700 transition-colors duration-200 flex items-center gap-3 group`}
                                    onClick={() => handleMenuClick(item.action)}
                                >
                                    <div className="w-6 h-6 flex items-center justify-center">
                                        {item.icon}
                                    </div>
                                    <span className="relative">
                                        {item.label}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-pink-400 group-hover:w-full transition-all duration-300 ease-in-out"></span>
                                    </span>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            ) : (
                <button
                    onClick={() => navigate('/login')}
                    className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ease-in-out border ${buttonStyle} transform hover:scale-105`}
                >
                    Đăng nhập
                </button>
            )}
        </div>
    );
};

export default UserStatusButton;
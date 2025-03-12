import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { LuGlobe, LuLogOut, LuChevronDown } from 'react-icons/lu';
import { FiEdit2 } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../Redux/auth/authSlice";

const UserStatusButton = () => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const dropdownRef = useRef(null);
    const user = useSelector(state => state.auth.user);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const defaultImage = "/image/default-avatar.jpg";

    const toggleDropdown = () => setIsDropdownOpen(prev => !prev);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    const menuItems = [
        { label: 'Trang web của tôi', action: () => navigate('/my-website'), icon: <LuGlobe size={18} className="text-pink-500" /> },
        { label: 'Chỉnh sửa hồ sơ', action: () => navigate('/wedding-info'), icon: <FiEdit2 size={18} className="text-pink-500" /> },
        { label: 'Đăng xuất', action: handleLogout, icon: <LuLogOut size={18} className="text-pink-500" /> },
    ];

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

    if (!isAuthenticated) {
        return (
            <button
                onClick={() => navigate('/login')}
                className="px-6 py-2 rounded-full font-medium transition-all duration-300 border bg-gradient-to-r from-pink-500 to-pink-600 text-white hover:from-pink-400 hover:to-pink-500 shadow-md"
            >
                Đăng nhập
            </button>
        );
    }

    return (
        <div className="relative" ref={dropdownRef}>
            <div
                className="flex items-center gap-2 px-3 py-1 rounded-full cursor-pointer border bg-white shadow-md hover:shadow-lg transition-all"
                onClick={toggleDropdown}
            >
                <img
                    src={user?.image || defaultImage}
                    alt="avatar"
                    className="w-8 h-8 rounded-full border border-gray-200 object-cover"
                    onError={(e) => { e.target.src = defaultImage; }}
                />
                <LuChevronDown size={16} className={`transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </div>

            {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-xl border overflow-hidden">
                    <div className="px-4 py-3 border-b flex items-center gap-3 bg-pink-50">
                        <img
                            src={user?.image || defaultImage}
                            alt="avatar"
                            className="w-12 h-12 rounded-full border object-cover"
                            onError={(e) => { e.target.src = defaultImage; }}
                        />
                        <p className="text-sm font-medium text-gray-800">{user?.email || 'Người dùng'}</p>
                    </div>
                    <div className="py-1">
                        {menuItems.map(({ label, action, icon }, index) => (
                            <div
                                key={index}
                                className="px-4 py-3 flex items-center gap-3 text-gray-700 cursor-pointer hover:bg-pink-50 transition"
                                onClick={() => { action(); setIsDropdownOpen(false); }}
                            >
                                {icon}
                                <span>{label}</span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default UserStatusButton;
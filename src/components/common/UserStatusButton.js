import React, {useState, useEffect, useRef} from "react";
import {useNavigate} from "react-router-dom";
import {LuGlobe, LuLogOut, LuChevronDown} from "react-icons/lu";
import {FiEdit2} from "react-icons/fi";
import {useDispatch, useSelector} from "react-redux";
import {logout} from "../../redux/auth/authSlice";
import Profile from "../../pages/Authen/Profile";
import ModalForm from "../common/ModalForm";
import { FaRegUser } from "react-icons/fa";

const UserStatusButton = ({isMenuOpen, closeMenu, isHomePage}) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const dropdownRef = useRef(null);
    const user = useSelector(state => state.auth.user);
    const isAuthenticated = useSelector(state => state.auth.isAuthenticated);
    const defaultImage = "/images/default-avatar.jpg";
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);
    useEffect(() => {
        if (isMenuOpen) {
            setIsDropdownOpen(false);
        }
    }, [isMenuOpen]);

    const toggleDropdown = () => {
        if (isHomePage) {closeMenu();}
        setIsDropdownOpen(prev => !prev);
    };

    const handleLogout = () => {
        dispatch(logout());
        navigate('/login');
    };

    const menuItems = [
        {label: 'Trang web của tôi', action: () => navigate('/'), icon: <LuGlobe size={16} className=""/>},
        {label: 'Chỉnh sửa hồ sơ', action: openModal, icon: <FiEdit2 size={16} className=""/>},
    ];

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };
        if (isDropdownOpen) {document.addEventListener('click', handleClickOutside);}
        return () => document.removeEventListener('click', handleClickOutside);
    }, [isDropdownOpen]);

    if (!isAuthenticated) {
        return (
            <button onClick={() => navigate("/login")}
                className="flex items-center gap-1 px-3 py-2 rounded-full md:text-base text-xs font-medium transition-all duration-300 border bg-white text-black hover:bg-gray-100 shadow-md">
                <div className="text-[14px] md:text-[18px]">
                    <FaRegUser/>
                </div>
                Đăng nhập
            </button>
        );
    }

    return (
        <>
            <div className="relative" ref={dropdownRef}>
                <div
                    className="flex items-center gap-1 px-2 py-1 rounded-full cursor-pointer border bg-white transition-all"
                    onClick={toggleDropdown}>
                    <img src={user?.image_url || defaultImage}
                         alt="avatar"
                         className="md:w-8 md:h-8 w-6 h-6 rounded-full border border-gray-200 object-cover"
                         onError={(e) => {
                             e.target.src = defaultImage;
                         }}/>
                    <div className="text-[14px] md:text-[18px]">
                        <LuChevronDown className={`transition-transform ${isDropdownOpen ? "rotate-180" : ""}`}/>
                    </div>
                </div>
                {isDropdownOpen && (
                    <div className="absolute z-[9999] right-0 mt-2 w-52 bg-white rounded-lg shadow-xl border">
                        <div className="px-2 py-2 border-b flex items-center gap-2 bg-gray-100 rounded-tl-lg rounded-tr-lg">
                            <img src={user?.image_url || defaultImage} alt="avatar"
                                 className="w-10 h-10 rounded-full border object-cover"
                                 onError={(e) => {
                                     e.target.src = defaultImage;}}/>
                            <p className="text-sm font-medium text-gray-800">{user?.name || "Người dùng"}</p>
                        </div>
                        <div className="p-2">
                            {menuItems.map(({label, action, icon}, index) => (
                                <div key={index}
                                    className="px-2 py-3 flex items-center gap-2 text-gray-700 cursor-pointer hover:bg-gray-100 rounded-lg transition"
                                    onClick={() => {action();setIsDropdownOpen(false);}}>
                                    {icon}
                                    <span>{label}</span>
                                </div>
                            ))}
                            <div>
                                <hr className="my-2 border-gray-200"/>
                                <button
                                    onClick={handleLogout}
                                    className="w-full text-left px-2 py-3 flex items-center gap-2 text-gray-700 hover:bg-gray-100 rounded-lg transition">
                                    <LuLogOut size={16} className="text-red-500"/>
                                    <span>Đăng xuất</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )}
            </div>
            <ModalForm isOpen={isModalOpen} onClose={closeModal} title="Chỉnh sửa hồ sơ" width="w-[600px]">
                <Profile onClose={closeModal}/>
            </ModalForm>
        </>
    );
};

export default UserStatusButton;

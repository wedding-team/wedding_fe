import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import React from "react";
import UserStatusButton from "../Component/common/UserStatusButton";

function WeddingLayout() {
    const navigate = useNavigate();
    const location = useLocation();

    const isActive = (path) => location.pathname === path;

    return (
        <div className="bg-gradient-to-b from-rose-50">
            <div className="flex justify-between px-4 py-3 bg-white shadow-md">
                <img
                    onClick={() => navigate('/')}
                    src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=rose&shade=500"
                    alt="Logo"
                    className="cursor-pointer h-10"
                />
                <div>
                    <UserStatusButton />
                </div>
            </div>

            <div className="flex justify-center space-x-4 px-10 mt-5">
                <NavItem to="/wedding/info" label="Thông tin thiệp cưới" isActive={isActive("/wedding/info")} />
                <NavItem to="/wedding/event" label="Sự kiện cưới" isActive={isActive("/wedding/event")} />
                <NavItem to="/wedding/image" label="Album ảnh" isActive={isActive("/wedding/image")} />
                <NavItem to="/wedding/love-story" label="Câu chuyện tình yêu" isActive={isActive("/wedding/love-story")} />
            </div>

            <div className="min-h-screen bg-gradient-to-b from-rose-50 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-6xl mx-auto">
                    <Outlet />
                </div>
            </div>
        </div>
    );
}

const NavItem = ({ to, label, isActive }) => {
    return (
        <Link
            to={to}
            className={`py-2 px-4 rounded font-medium transition 
                ${isActive ? "bg-blue-700 text-white shadow-md" : "bg-blue-500 hover:bg-blue-700 text-white"}`}
        >
            {label}
        </Link>
    );
};

export default WeddingLayout;

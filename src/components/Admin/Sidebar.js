import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RxDashboard } from "react-icons/rx";
import { GrTemplate } from "react-icons/gr";
import { FaRegUser, FaRegBell } from "react-icons/fa";
import { IoSettingsOutline, IoLogOutOutline } from "react-icons/io5";
import SidebarItem from "./SidebarItem";
import {logoutAdmin} from "../../redux/admin/adminSlice";
import {useCallback} from "react";
import Helper from "../../utils/Helper";

function Sidebar({ isOpen }) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = useCallback(() => {
        dispatch(logoutAdmin());
        Helper.toastSuccess("Đăng xuất thành công")
        navigate("/admin");
    }, [dispatch, navigate]);

    return (
        <div
            className={`fixed top-0 left-0 bottom-0 bg-white border-r
                transition-all duration-300 z-50 overflow-hidden
                ${isOpen ? "w-64" : "w-30"} md:block hidden flex flex-col`}
        >
            <div className="flex items-center justify-between px-5 py-4 mt-3">
                <a href="/" className="flex items-center space-x-2">
                    <img
                        src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=blue&shade=500"
                        alt="Logo"
                        className="h-8"
                    />
                    {isOpen && <span className="text-lg font-semibold">TailAdmin</span>}
                </a>
            </div>
            <div className="flex flex-col h-full">
                <div className="flex-1">
                    <div className="px-5 text-gray-500 text-xs font-medium uppercase tracking-wide mt-8 mb-4">
                        Menu
                    </div>
                    <nav className="space-y-3">
                        <SidebarItem isOpen={isOpen} icon={<RxDashboard size={20}/>} label="Dashboard" path="/admin/dashboard"/>
                        <SidebarItem isOpen={isOpen} icon={<GrTemplate size={20}/>} label="Quản lý thiệp cưới" path="/admin/cards"/>
                        <SidebarItem isOpen={isOpen} icon={<FaRegUser size={20}/>} label="Quản lý người dùng" path="/admin/users"/>
                        <SidebarItem isOpen={isOpen} icon={<FaRegBell size={20}/>} label="Thông báo" path="/admin/notifications"/>
                    </nav>
                </div>

                <div className="pb-24">
                    <div className="px-5 text-gray-500 text-xs font-medium uppercase tracking-wide mb-4">
                        Other
                    </div>
                    <nav className="space-y-3">
                        <SidebarItem isOpen={isOpen} icon={<IoSettingsOutline size={20}/>} label="Cài đặt" path="/admin/settings"/>
                        <div onClick={handleLogout} className="cursor-pointer">
                            <SidebarItem isOpen={isOpen} icon={<IoLogOutOutline size={20}/>} label="Đăng xuất"
                                         path="#"/>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    );
}

export default Sidebar;

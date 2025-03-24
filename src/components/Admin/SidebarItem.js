import { NavLink, useLocation } from "react-router-dom";

function SidebarItem({ icon, label, path, isOpen }) {
    const location = useLocation();
    const isActive = location.pathname === path;

    return (
        <NavLink
            to={path}
            className={`flex items-center px-4 py-3 rounded-md mx-3 text-gray-700
            hover:bg-gray-100 transition-all duration-200 
            ${isActive ? "bg-indigo-50 font-semibold text-indigo-600 hover:bg-indigo-50" : ""}`}
        >
            <span className={`text-gray-500 ${isActive ? "text-indigo-600" : ""}`}>{icon}</span>
            {isOpen && <span className="ml-3 text-sm font-medium">{label}</span>}
        </NavLink>
    );
}

export default SidebarItem;
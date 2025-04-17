import { Link } from "react-router-dom";

function Header({ navItems, location }) {
    return (
        <>
            <nav className="hidden md:block border-t border-gray-200">
                <div className="flex justify-center gap-8 py-4 text-gray-700 font-medium">
                    {navItems.map((item) => (
                        <NavItem
                            key={item.to}
                            to={item.to}
                            label={item.label}
                            icon={item.icon}
                            isActive={location.pathname === item.to}
                        />
                    ))}
                </div>
            </nav>
            <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10 md:hidden">
                <div className="flex justify-around py-3 text-gray-700 font-medium">
                    {navItems.map((item) => (
                        <NavItem
                            key={item.to}
                            to={item.to}
                            label={item.mobileLabel || item.label}
                            icon={item.icon}
                            isActive={location.pathname === item.to}
                        />
                    ))}
                </div>
            </nav>
        </>
    );
}

const NavItem = ({ to, label, icon, isActive }) => {
    return (
        <Link to={to} className="flex flex-col items-center px-2 py-1 group">
            <div
                className={`mb-1 ${
                    isActive ? "text-rose-600" : "text-gray-600 group-hover:text-rose-500"
                }`}
            >
                {icon}
            </div>
            <span
                className={`text-xs ${
                    isActive ? "text-rose-600" : "text-gray-700 group-hover:text-rose-500"
                }`}
            >
                {label}
            </span>
        </Link>
    );
};

export default Header;
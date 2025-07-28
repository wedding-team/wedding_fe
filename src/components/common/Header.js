import {Link} from "react-router-dom";

function Header({navItems, location}) {
    return (
        <>
            <nav className="hidden md:block border-gray-200">
                <div className="flex justify-center gap-10 py-4 text-white font-medium">
                    {navItems.map((item) => (
                        <NavItem
                            key={item.to}
                            to={item.to}
                            label={item.label}
                            isActive={location.pathname === item.to}
                            isMobile={false}
                        />
                    ))}
                </div>
            </nav>
            <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 z-10 md:hidden">
                <div className="flex justify-around py-2 text-gray-700 font-medium">
                    {navItems.map((item) => (
                        <NavItem
                            key={item.to}
                            to={item.to}
                            label={item.mobileLabel || item.label}
                            icon={item.icon}
                            isActive={location.pathname === item.to}
                            isMobile={true}
                        />
                    ))}
                </div>
            </nav>
        </>
    );
}

const NavItem = ({to, label, icon, isActive, isMobile}) => {
    return (
        <Link to={to} className="flex flex-col items-center group">
            <div
                className={`${
                    isMobile ? "text-[18px]" : "text-[22px] mb-1"
                } ${isActive ? "text-red-600" : "text-gray-600 group-hover:text-red-500"}`}
            >
                {icon}
            </div>
            <span
                className={`${
                    isMobile ? "text-[10px]" : "text-base"
                } ${
                    isMobile
                        ? isActive
                            ? "text-red-600"
                            : "text-gray-600 group-hover:text-red-500"
                        : isActive
                            ? "text-yellow-200"
                            : "text-white group-hover:text-yellow-200"
                }`}
            > {label}
            </span>
        </Link>
    );
};

export default Header;

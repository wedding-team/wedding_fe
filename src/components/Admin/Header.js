import { RiMenu2Fill } from "react-icons/ri";
import { LuSearch } from "react-icons/lu";
import {useSelector} from "react-redux";

function Header({ setIsOpen }) {
    const admin = useSelector((state) => state.admin.admin?.data);

    return (
        <div className="flex px-1 py-3 lg:px-6 lg:py-4 border-b relative items-center">
            <div className="flex-1 flex items-center gap-2 sm:gap-4">
                <button
                    className="p-3 text-gray-500 items-center border-gray-200 lg:border lg:rounded-lg"
                    onClick={() => setIsOpen(prev => !prev)}
                >
                    <RiMenu2Fill size={20} />
                </button>
                <div className="relative flex items-center w-full max-w-md hidden lg:flex">
                    <input
                        type="text"
                        className="border rounded-lg border-gray-200 p-3 pr-10 w-full"
                        placeholder="Tìm kiếm..."
                    />
                    <button className="absolute right-3 text-gray-500">
                        <LuSearch size={20} />
                    </button>
                </div>
            </div>
            <a
                href="/"
                className="absolute left-1/2 -translate-x-1/2 md:hidden flex items-center space-x-2"
            >
                <img
                    src="https://tailwindui.com/plus-assets/img/logos/mark.svg?color=blue&shade=500"
                    alt="Logo"
                    className="h-8"
                />
            </a>
            <div className="flex-1 flex items-center justify-end gap-1">
                <div className="relative">
                    <button className="flex items-center text-gray-700 dropdown-toggle">
                        <span className="mr-1 overflow-hidden rounded-full h-12 w-12">
                            <img
                                src="https://png.pngtree.com/png-vector/20230509/ourmid/pngtree-personal-flat-icon-vector-png-image_7092615.png"
                                alt=""
                            />
                        </span>
                        <span className="mr-1 font-medium text-theme-sm hidden lg:block text-gray-500">
                            {admin?.email}
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Header;

import {useState} from "react";

export default function AdminDropdown() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <button
                className="flex items-center text-gray-700 dropdown-toggle dark:text-gray-400"
            >
        <span className="mr-3 overflow-hidden rounded-full h-11 w-11">
          <img src="https://gimgs2.nohat.cc/thumb/f/640/male-avatar-admin-profile--m2H7G6H7H7Z5G6m2.jpg" alt="Admin" />
        </span>

                <span className="block mr-1 font-medium text-theme-sm">Musharof</span>
                <svg
                    className={`stroke-gray-500 dark:stroke-gray-400 transition-transform duration-200 ${
                        isOpen ? "rotate-180" : ""
                    }`}
                    width="18"
                    height="20"
                    viewBox="0 0 18 20"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        d="M4.3125 8.65625L9 13.3437L13.6875 8.65625"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    />
                </svg>
            </button>
        </div>
    );
}


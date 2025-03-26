import React from 'react';
import { FaTrashAlt, FaEdit  } from "react-icons/fa";
import Helper from "../../utils/Helper";

function LoveStoryItem({loveStory, onDelete, onEdit}) {
    return (
        <li className="flex items-center justify-between py-6 border-b border-gray-300">
            <img
                src={loveStory.image_url}
                alt={loveStory.title}
                className="max-md:w-16 md:w-40 lg:w-64 max-md:h-auto md:h-52 object-cover rounded-lg shadow-lg"
            />
            <div className="flex-1 ml-6 min-w-0">
                <h3 className="max-md:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 truncate">{loveStory.title}</h3>
                <p className="text-lg max-md:text-base md:text-lg lg:text-xl text-gray-600 mt-3 w-full break-words line-clamp-4">{loveStory.description}</p>
                <p className="text-lg max-md:text-base md:text-lg lg:text-xl text-gray-500 mt-2">
                    {Helper.formatDate(loveStory.love_story_date)}
                </p>
            </div>
            <div className="flex space-x-4 md:ms-12">
                <button
                    className="max-lg:p-2 lg:bg-green-500 lg:hover:bg-green-600 text-white lg:py-2 lg:px-5 rounded-sm text-base lg:shadow-md transition focus:outline-none"
                    onClick={() => onEdit(loveStory)}
                >
                    <span className="max-lg:hidden">Chỉnh sửa</span>
                    <FaEdit  className="lg:hidden text-green-500 hover:text-green-600" size={20} />
                </button>

                <button
                    className="max-lg:p-2 lg:bg-red-500 lg:hover:bg-red-600 text-white lg:py-2 lg:px-5 rounded-sm text-base lg:shadow-md transition focus:outline-none"
                    onClick={() => onDelete(loveStory)}
                >
                    <span className="max-lg:hidden">Xoá</span>
                    <FaTrashAlt className="lg:hidden text-red-500 hover:text-red-600" size={20} />
                </button>
            </div>
        </li>
    );
}

export default LoveStoryItem;
import React from 'react';
import Helper from "../../utils/Helper";
import {LiaEdit} from "react-icons/lia";
import {TrashIcon} from "@heroicons/react/24/solid";

function LoveStoryItem({loveStory, onDelete, onEdit}) {
    return (
        <div className="bg-white border shadow-md rounded-lg overflow-hidden">
            <img
                src={loveStory.image_url}
                alt={loveStory.title}
                className="w-full h-64 object-cover"
            />
            <div className="p-4">
                <h3 className="text-lg text-gray-800 text-center uppercase border-gray-400 pb-1 h-16 content-center	">
                    {loveStory.title}
                </h3>
                <p className="text-gray-500 text-sm font-medium text-center">
                    {Helper.formatDate(loveStory.love_story_date)}
                </p>
                <p className="text-gray-600 my-2 line-clamp-5">{loveStory.description}</p>
                <div className="flex justify-center space-x-4 mt-4">
                    <button
                        className="p-2 bg-blue-100 rounded text-blue-500 hover:text-blue-700"
                        onClick={() => onEdit(loveStory)}
                        title="Chỉnh sửa ảnh"
                    >
                        <LiaEdit className="w-6 h-6"/>
                    </button>
                    <button
                        className="p-2 bg-red-100 rounded text-red-500 hover:text-red-700"
                        onClick={() => onDelete(loveStory)}
                        title="Xoá sự kiện"
                    >
                        <TrashIcon className="w-5 h-5"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoveStoryItem;

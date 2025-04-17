import {useSortable} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";
import {TrashIcon} from "@heroicons/react/24/solid";
import {LiaEdit} from "react-icons/lia";
import {IoMdMove} from "react-icons/io";
import { MdOutlineAccessTime } from "react-icons/md";
import { IoCalendarOutline } from "react-icons/io5";
import { FiMinus } from "react-icons/fi";
import Helper from "../../utils/Helper";
import React from "react";

function WeddingEventItem({event, onDelete, onEdit}) {
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id: event.id});
    return (
        <div className="relative w-full max-w-sm bg-white shadow-lg overflow-hidden rounded-lg"
             style={{transform: CSS.Transform.toString(transform), transition}}>
            <div className="relative">
                <h3 className="text-lg font-medium text-gray-800 text-center mt-2 uppercase">{event.title}</h3>
                <div className="w-32 h-[1.3px] bg-red-400 mx-auto mb-5 mt-2"></div>
                <img
                    src={event.image_url}
                    alt="Ảnh sự kiện"
                    className="w-64 h-64 object-cover mx-auto rounded"
                />
            </div>
            <div className="p-4">
                <p className="text-md text-gray-600 text-center flex items-center justify-center gap-2">
                    <span className="font-semibold flex items-center gap-1">
                        <MdOutlineAccessTime/> {event.event_time}
                    </span>
                    <FiMinus />
                    <span className="font-semibold flex items-center gap-1">
                        <IoCalendarOutline/> {Helper.formatDate(event.event_date)}
                    </span>
                </p>
                <p className="text-md text-gray-500 text-center h-16 content-center">
                     {event.address}
                </p>
                <div className="flex justify-center gap-2 mt-3">
                    <button
                        ref={setNodeRef}
                        {...attributes}
                        className="p-2 bg-gray-200 rounded text-gray-500 hover:text-gray-700 "
                        {...listeners}
                    >
                        <IoMdMove className="w-6 h-6"/>
                    </button>
                    <button
                        className="p-2 bg-blue-100 rounded text-blue-500 hover:text-blue-700"
                        onPointerDownCapture={(e) => e.stopPropagation()}
                        onClick={() => onEdit(event)}
                        title="Chỉnh sửa ảnh"
                    >
                        <LiaEdit className="w-6 h-6"/>
                    </button>
                    <button
                        className="p-2 bg-red-100 rounded text-red-500 hover:text-red-700"
                        onPointerDownCapture={(e) => e.stopPropagation()}
                        onClick={() => onDelete(event)}
                        title="Xoá sự kiện"
                    >
                        <TrashIcon className="w-5 h-5"/>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default WeddingEventItem;

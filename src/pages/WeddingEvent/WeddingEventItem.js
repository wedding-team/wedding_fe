import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Helper from "../../utils/Helper";
import {FaEdit, FaTrashAlt} from "react-icons/fa";
import React from "react";

function WeddingEventItem({ event, onDelete, onEdit }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: event.id });

    return (
        <li
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            className="flex items-center justify-between py-6 border-b border-gray-300"
            style={{ transform: CSS.Transform.toString(transform), transition }}
        >
            <img src={event.image_url} alt="Ảnh sự kiện" className="max-md:w-16 md:w-40 lg:w-64 max-md:h-auto md:h-52 object-cover rounded-lg shadow-lg" />
            <div className="flex-1 ml-6 min-w-0">
                <h3 className="max-md:text-lg md:text-xl lg:text-2xl font-bold text-gray-800 truncate">{event.title}</h3>
                <p className="text-lg max-md:text-base md:text-lg lg:text-xl text-gray-600 mt-3 w-full break-words line-clamp-4">{event.address}</p>
                <p className="text-lg max-md:text-base md:text-lg lg:text-xl text-gray-500 mt-2">
                    {Helper.formatDate(event.event_date)} <span className="mx-2">-</span> {event.event_time}
                </p>
            </div>
            <div className="flex space-x-4">
                <button
                    className="max-lg:p-2 lg:bg-green-500 lg:hover:bg-green-600 text-white lg:py-2 lg:px-5 rounded-sm text-base lg:shadow-md transition focus:outline-none"
                    onPointerDownCapture={(e) => e.stopPropagation()}
                    onClick={() => onEdit(event)}
                >
                    <span className="max-lg:hidden">Chỉnh sửa</span>
                    <FaEdit  className="lg:hidden text-green-500 hover:text-green-600" size={20} />
                </button>
                <button
                    className="max-lg:p-2 lg:bg-red-500 lg:hover:bg-red-600 text-white lg:py-2 lg:px-5 rounded-sm text-base lg:shadow-md transition focus:outline-none"
                    onPointerDownCapture={(e) => e.stopPropagation()}
                    onClick={() => onDelete(event)}
                >
                    <span className="max-lg:hidden">Xoá</span>
                    <FaTrashAlt className="lg:hidden text-red-500 hover:text-red-600" size={20} />
                </button>
            </div>
        </li>
    );
}

export default WeddingEventItem;

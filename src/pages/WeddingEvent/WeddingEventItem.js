import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Helper from "../../utils/Helper";

function WeddingEventItem({ event, onDelete, onEdit }) {
    const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id: event.id });

    return (
        <li
            ref={setNodeRef}
            {...attributes}
            {...listeners}
            className="flex items-center justify-between py-6 border-b border-gray-300 cursor-grab active:cursor-grabbing focus:outline-none"
            style={{ transform: CSS.Transform.toString(transform), transition }}
        >
            <img src={event.image_url} alt="Ảnh sự kiện" className="w-64 h-52 object-cover rounded-lg shadow-lg" />
            <div className="flex-1 ml-6">
                <h3 className="text-2xl font-bold text-gray-800">{event.title}</h3>
                <p className="text-lg text-gray-600 mt-3 w-2/3">{event.address}</p>
                <p className="text-lg text-gray-500 mt-2">
                    {Helper.formatDate(event.event_date)} <span className="mx-2">-</span> {event.event_time}
                </p>
            </div>
            <div className="flex space-x-4">
                <button
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-5 rounded-sm text-base shadow-md transition focus:outline-none"
                    onPointerDownCapture={(e) => e.stopPropagation()}
                    onClick={() => onEdit(event)}
                >
                    Chỉnh sửa
                </button>
                <button
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-5 rounded-sm text-base shadow-md transition focus:outline-none"
                    onPointerDownCapture={(e) => e.stopPropagation()}
                    onClick={() => onDelete(event)}
                >
                    Xoá
                </button>
            </div>
        </li>
    );
}

export default WeddingEventItem;

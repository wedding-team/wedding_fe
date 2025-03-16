function WeddingEventItem({ event, onDelete, onEdit }) {
    return (
        <li className="flex items-center justify-between py-4 border-b-2">
            <div className="flex items-center">
                <img src={event.image_url} alt="Ảnh sự kiện" className="w-24 h-24 object-cover rounded-lg shadow-md" />
                <div className="ml-4">
                    <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                    <p className="text-gray-600">{event.address}</p>
                    <p className="text-sm text-gray-500">{event.event_date} - {event.event_time}</p>
                </div>
            </div>
            <div className="flex space-x-2">
                <button className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded-sm text-sm" onClick={() => onEdit(event)}>
                    Cập nhật
                </button>
                <button className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-sm text-sm" onClick={() => onDelete(event)}>
                    Xoá
                </button>
            </div>
        </li>
    );
}

export default WeddingEventItem;

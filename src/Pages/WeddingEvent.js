import { useEffect, useState } from "react";
import WeddingEventApi from "../Apis/WeddingEventApi";
import Helper from "../Utils/Helper";
import ModalDelete from "../Component/common/ModalDelete";

function WeddingEvent() {
    const [weddingEvents, setWeddingEvents] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedEventId, setSelectedEventId] = useState(null);

    useEffect(() => {
        fetchWeddingEvents();
    }, []);

    const fetchWeddingEvents = async () => {
        try {
            const response = await WeddingEventApi.getAllWeddingEvents();
            setWeddingEvents(response.data.body);
        } catch (error) {
            console.error("Lỗi khi lấy danh sách sự kiện cưới:", error);
        }
    };

    const openDeleteModal = (id) => {
        setSelectedEventId(id);
        setIsModalOpen(true);
    };

    const handleDelete = async () => {
        if (!selectedEventId) return;
        try {
            await WeddingEventApi.deleteWeddingEvent(selectedEventId);
            setWeddingEvents(weddingEvents.filter(event => event.id !== selectedEventId));
            Helper.toastSuccess("Xóa sự kiện thành công!");
        } catch (error) {
            console.error("Lỗi khi xoá sự kiện:", error);
            Helper.toastError("Lỗi khi xóa");
        }
        setIsModalOpen(false);
    };

    return (
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Danh sách sự kiện cưới</h2>
                <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg shadow-md">
                    + Thêm mới
                </button>
            </div>
            <div className="mt-4">
                {weddingEvents.length > 0 ? (
                    <ul className="space-y-4">
                        {weddingEvents.map((event) => (
                            <li key={event.id} className="flex items-center justify-between py-4 border-b-2">
                                <div className="flex items-center">
                                    <img src={event.image_url} alt="Ảnh sự kiện" className="w-24 h-24 object-cover rounded-lg shadow-md" />
                                    <div className="ml-4">
                                        <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                                        <p className="text-gray-600">{event.address}</p>
                                        <p className="text-sm text-gray-500">{event.event_date} - {event.event_time}</p>
                                    </div>
                                </div>
                                <div className="flex space-x-2">
                                    <button
                                        className="bg-green-500 hover:bg-green-600 text-white py-1 px-3 rounded-lg text-sm"
                                    >
                                        Cập nhật
                                    </button>
                                    <button
                                        className="bg-red-500 hover:bg-red-600 text-white py-1 px-3 rounded-lg text-sm"
                                        onClick={() => openDeleteModal(event.id)}
                                    >
                                        Xoá
                                    </button>
                                </div>
                            </li>
                        ))}
                    </ul>
                ) : (
                    <p className="text-center text-gray-500">Không có sự kiện nào.</p>
                )}
            </div>

            {isModalOpen && (
                <ModalDelete
                    isOpen={isModalOpen}
                    onClose={() => setIsModalOpen(false)}
                    onConfirm={handleDelete}
                    title="Xóa sự kiện"
                    description="Bạn có chắc chắn muốn xóa sự kiện này? Hành động này không thể hoàn tác."
                />
            )}
        </div>
    );
}

export default WeddingEvent;

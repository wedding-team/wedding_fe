import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import WeddingEventItem from "./WeddingEventItem";
import ModalDelete from "../common/ModalDelete";
import {deleteWeddingEvent} from "../../Redux/weddingEvent/weddingEventSlice";
import Helper from "../../Utils/Helper";

function WeddingEventList({ onEdit }) {
    const dispatch = useDispatch();
    const { events, loading, error } = useSelector((state) => state.weddingEvents);

    const [selectedEvent, setSelectedEvent] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const openDeleteModal = (event) => {
        setSelectedEvent(event);
        setIsDeleteModalOpen(true);
    };

    const handleDelete = async () => {
        if (!selectedEvent) return;
        try {
            await dispatch(deleteWeddingEvent(selectedEvent.id));
            Helper.toastSuccess("Xóa sự kiện thành công!");
        } catch (error) {
            console.error("Lỗi khi xoá sự kiện:", error);
            Helper.toastError("Lỗi khi xóa sự kiện!");
        }
        setIsDeleteModalOpen(false);
    };

    return (
        <div className="mt-4">
            {loading && <p className="text-center text-gray-500">Đang tải...</p>}
            {error && <p className="text-center text-red-500">{error}</p>}
            {events.length > 0 ? (
                <ul className="space-y-4">
                    {events.map(event => (
                        <WeddingEventItem key={event.id} event={event} onDelete={openDeleteModal} onEdit={onEdit} />
                    ))}
                </ul>
            ) : (
                <p className="text-center text-gray-500">Không có sự kiện nào.</p>
            )}

            <ModalDelete
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                onConfirm={handleDelete}
                title="Xóa sự kiện"
                description="Bạn có chắc chắn muốn xóa sự kiện này? Hành động này không thể hoàn tác."
            />
        </div>
    );
}

export default WeddingEventList;

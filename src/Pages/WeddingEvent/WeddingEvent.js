import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import WeddingEventList from "./WeddingEventList";
import ModalForm from "../../Component/common/ModalForm";
import WeddingEventNew from "./WeddingEventNew";
import { fetchWeddingEvents } from "../../Redux/weddingEvent/weddingEventSlice";

function WeddingEvent() {
    const dispatch = useDispatch();
    const { events, loading } = useSelector((state) => state.weddingEvents);

    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    useEffect(() => {
        dispatch(fetchWeddingEvents());
    }, [dispatch]);

    const openFormModal = (event = null) => {
        setSelectedEvent(event);
        setIsFormModalOpen(true);
    };

    const closeFormModal = () => {
        setIsFormModalOpen(false);
        setSelectedEvent(null);
    };

    return (
        <div className="max-w-4xl mx-auto bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Danh sách sự kiện cưới</h2>
                <button
                    onClick={openFormModal}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-sm shadow-md"
                >
                    + Thêm mới
                </button>
            </div>
            {loading ? (
                <p>Đang tải...</p>
            ) : (
                <WeddingEventList events={events} onEdit={openFormModal} />
            )}
            <ModalForm
                isOpen={isFormModalOpen}
                onClose={closeFormModal}
                title={selectedEvent ? "Cập nhật sự kiện" : "Thêm sự kiện mới"}
            >
                <WeddingEventNew event={selectedEvent} onClose={closeFormModal} />
            </ModalForm>
        </div>
    );
}

export default WeddingEvent;

import {useState} from "react";
import WeddingEventList from "./WeddingEventList";
import ModalForm from "../../components/common/ModalForm";
import WeddingEventNew from "./WeddingEventNew";

function WeddingEvent() {
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [selectedEvent, setSelectedEvent] = useState(null);

    const openFormModal = (event = null) => {
        setSelectedEvent(event || null)
        setIsFormModalOpen(true);
    };

    const closeFormModal = () => {
        setIsFormModalOpen(false);
        setSelectedEvent(null);
    };

    return (
        <div className="mx-auto bg-white shadow-md rounded-lg p-6">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Danh sách sự kiện cưới</h2>
                <button
                    onClick={() => openFormModal(null)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-sm shadow-md focus:outline-none"
                >
                    + Thêm mới
                </button>
            </div>
            <WeddingEventList onEdit={openFormModal}/>
            <ModalForm
                isOpen={isFormModalOpen}
                onClose={closeFormModal}
                title={selectedEvent ? "Cập nhật sự kiện" : "Thêm sự kiện mới"}
            >
                <WeddingEventNew event={selectedEvent} onClose={closeFormModal}/>
            </ModalForm>
        </div>
    );
}

export default WeddingEvent;

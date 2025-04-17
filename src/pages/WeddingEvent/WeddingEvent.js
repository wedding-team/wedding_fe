import React, {useState} from "react";
import WeddingEventList from "./WeddingEventList";
import ModalForm from "../../components/common/ModalForm";
import WeddingEventNew from "./WeddingEventNew";
import {FaRegPlusSquare} from "react-icons/fa";
import {IoMdMove} from "react-icons/io";

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
                <div>
                    <h2 className="max-md:text-lg md:text-2xl font-semibold">Sự kiện cưới</h2>
                    <p className="flex gap-2 text-sm text-gray-500">Nhấn giữ nút <IoMdMove className="w-5 h-5"/> và
                        kéo
                        thả để thay đổi vị trí các sự kiện cưới</p>
                </div>
                <button
                    onClick={() => openFormModal(null)}
                    className="bg-blue-600 hover:bg-blue-700  flex items-center gap-2 max-md:text-sm md:text-md text-white font-semibold py-1 px-4 rounded-sm shadow-md focus:outline-none"
                >
                    <FaRegPlusSquare/> Thêm mới
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

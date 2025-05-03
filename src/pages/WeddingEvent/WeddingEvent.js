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
        <div className="mx-auto p-4 md:p-6 bg-white max-w-screen-xl rounded-lg shadow-md">
            <div className="flex justify-between items-start sm:items-center mb-1 gap-2">
                <h2 className="max-md:text-lg md:text-2xl font-semibold">Sự kiện cưới</h2>
                <button
                    onClick={() => openFormModal(null)}
                    className=" bg-blue-600 hover:bg-blue-700 flex items-center justify-center gap-2 text-xs md:text-base text-white font-semibold py-1 px-2 md:px-4 rounded-sm shadow-md focus:outline-none"
                >
                    <FaRegPlusSquare className="text-base md:text-lg"/>
                    <span>Thêm mới</span>
                </button>
            </div>

            <p className="flex gap-1 text-xs sm:text-sm text-gray-500 mb-4">
                <span className="hidden sm:inline">Nhấn giữ nút</span>
                <span className="inline sm:hidden">Nhấn giữ</span>
                <IoMdMove className="w-3 h-3 sm:w-4 sm:h-4 mt-0.5"/>
                <span>và kéo thả để thay đổi vị trí các sự kiện</span>
            </p>

            <div className="overflow-x-auto">
                <WeddingEventList onEdit={openFormModal}/>
            </div>

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

import LoveStoryList from "./LoveStoryList";
import {useState} from "react";
import ModalForm from "../../components/common/ModalForm";
import LoverStoryNew from "./LoveStoryNew";

function LoveStory() {
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [selectLoveStory, setSelectLoveStory] = useState(null);

    const openFormModal = (story = null) => {
        setSelectLoveStory(story || null);
        setIsFormModalOpen(true);
    };

    const closeFormModal = () => {
        setIsFormModalOpen(false);
        setSelectLoveStory(null);
    };

    return (
        <div className="shadow-sm bg-white rounded-lg p-5">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Danh sách câu chuyện tình yêu</h2>
                <button
                    onClick={() => openFormModal(null)}
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-sm shadow-md focus:outline-none"
                >
                    + Thêm mới
                </button>
            </div>
            <LoveStoryList onEdit={openFormModal}/>
            <ModalForm
                isOpen={isFormModalOpen}
                onClose={closeFormModal}
                title={selectLoveStory ? "Cập nhật chuyện tình yêu" : "Thêm mới chuyện tình yêu"}
            >
                <LoverStoryNew loveStory={selectLoveStory} onClose={closeFormModal} />
            </ModalForm>
        </div>
    )
}

export default LoveStory;
import LoveStoryList from "./LoveStoryList";
import {useState} from "react";
import ModalForm from "../../components/common/ModalForm";
import LoverStoryNew from "./LoveStoryNew";
import {FaRegPlusSquare} from "react-icons/fa";

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
                <h2 className="max-md:text-lg md:text-2xl font-semibold">Chuyện tình yêu</h2>

                <button
                    onClick={() => openFormModal(null)}
                    className="bg-blue-600 hover:bg-blue-700 flex items-center gap-2 max-md:text-sm md:text-md text-white font-semibold py-1 px-4 rounded-sm shadow-md focus:outline-none"
                >
                    <FaRegPlusSquare/> Thêm mới
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
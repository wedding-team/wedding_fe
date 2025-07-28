import { useDispatch } from "react-redux";
import ModalConfirm from "../../components/common/ModalConfirm";
import Helper from "../../utils/Helper";
import {deleteLoveStory} from "../../redux/loveStory/loveStorySlice";

function LoveStoryDelete({ isOpen, onClose, loveStory }) {
    const dispatch = useDispatch();

    const handleDelete = async () => {
        if (!loveStory) return;
        try {
            await dispatch(deleteLoveStory(loveStory.id));
            Helper.toastSuccess("Xóa thành công!");
        } catch (error) {
            Helper.toastError("Lỗi khi xóa!");
        }
        onClose();
    };

    return (
        <ModalConfirm
            isOpen={isOpen}
            onClose={onClose}
            onConfirm={handleDelete}
            title="Xóa câu chuyện tình yêu"
            description="Bạn có chắc chắn muốn xóa câu chuyện này? Hành động này không thể hoàn tác."
        />
    );
}

export default LoveStoryDelete;

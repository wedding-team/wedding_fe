import { useDispatch } from "react-redux";
import { deleteWeddingEvent } from "../../redux/weddingEvent/weddingEventSlice";
import ModalDelete from "../../components/common/ModalDelete";
import Helper from "../../utils/Helper";

function WeddingEventDelete({ isOpen, onClose, event }) {
    const dispatch = useDispatch();

    const handleDelete = async () => {
        if (!event) return;
        try {
            await dispatch(deleteWeddingEvent(event.id));
            Helper.toastSuccess("Xóa sự kiện thành công!");
        } catch (error) {
            Helper.toastError("Lỗi khi xóa sự kiện!");
        }
        onClose();
    };

    return (
        <ModalDelete
            isOpen={isOpen}
            onClose={onClose}
            onConfirm={handleDelete}
            title="Xóa sự kiện"
            description="Bạn có chắc chắn muốn xóa sự kiện này? Hành động này không thể hoàn tác."
        />
    );
}

export default WeddingEventDelete;

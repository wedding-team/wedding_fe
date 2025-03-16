import WeddingGalleryApi from "../../Apis/WeddingGalleryApi";
import Helper from "../../Utils/Helper";
import ModalDelete from "../../Component/common/ModalDelete";

function WeddingGalleryDelete({ isOpen, onClose, selectedImageId, onDeleteSuccess }) {
    const handleDeleteConfirm = async () => {
        if (!selectedImageId) return;
        try {
            await WeddingGalleryApi.deleteWeddingEvent(selectedImageId);
            Helper.toastSuccess("Xoá ảnh thành công");
            onDeleteSuccess(selectedImageId);
        } catch (error) {
            Helper.toastError("Xoá ảnh thất bại");
            console.error("Lỗi khi xoá ảnh:", error);
        } finally {
            onClose();
        }
    };

    return (
        <ModalDelete
            isOpen={isOpen}
            onClose={onClose}
            onConfirm={handleDeleteConfirm}
            title="Xác nhận xoá ảnh"
            description="Bạn có chắc muốn xoá ảnh này? Hành động này không thể hoàn tác."
        />
    );
}

export default WeddingGalleryDelete;

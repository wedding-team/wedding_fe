import ModalDelete from "../../components/common/ModalDelete";

function WeddingGalleryDelete({ isOpen, onClose, onConfirm }) {
    return (
        <ModalDelete
            isOpen={isOpen}
            onClose={onClose}
            onConfirm={onConfirm}
            title="Xác nhận xoá ảnh"
            description="Bạn có chắc muốn xoá ảnh này? Hành động này không thể hoàn tác."
        />
    );
}

export default WeddingGalleryDelete;

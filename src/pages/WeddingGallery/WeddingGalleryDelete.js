import ModalConfirm from "../../components/common/ModalConfirm";

function WeddingGalleryDelete({ isOpen, onClose, onConfirm }) {
    return (
        <ModalConfirm
            isOpen={isOpen}
            onClose={onClose}
            onConfirm={onConfirm}
            title="Xác nhận xoá ảnh"
            description="Bạn có chắc muốn xoá ảnh này? Hành động này không thể hoàn tác."
        />
    );
}

export default WeddingGalleryDelete;

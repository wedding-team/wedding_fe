import {useDispatch} from "react-redux";
import Helper from "../../../utils/Helper";
import ModalConfirm from "../../../components/common/ModalConfirm";
import {deleteTemplate} from "../../../redux/template/templateSlice";

function TemplateDelete({ isOpen, onClose, template }) {
    const dispatch = useDispatch();

    const handleDelete = async () => {
        if (!template) return;
        try {
            await dispatch(deleteTemplate(template.id));
            Helper.toastSuccess("Xóa thiệp cưới thành công!");
        } catch (error) {
            Helper.toastError("Lỗi khi xóa thiệp cưới!");
        }
        onClose();
    };

    return (
        <ModalConfirm
            isOpen={isOpen}
            onClose={onClose}
            onConfirm={handleDelete}
            title="Xóa thiệp cưới"
            description="Bạn có chắc chắn muốn xóa thiệp cưới này? Hành động này không thể hoàn tác."
        />
    );
}

export default TemplateDelete;

import TemplateList from "./TemplateList";
import { FaPlus } from "react-icons/fa6";
import {useState} from "react";
import ModalForm from "../../../components/common/ModalForm";
import TemplateNew from "./TemplateNew";

function TemplateManagement() {
    const [isFormModalOpen, setIsFormModalOpen] = useState(false);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [isEdit, setIsEdit] = useState(false);

    const openFormModal = (templateData) => {
        setSelectedTemplate(templateData);
        setIsEdit(!!templateData);
        setIsFormModalOpen(true);
    };

    const closeFormModal = () => {
        setIsFormModalOpen(false);
        setSelectedTemplate(null);
    };
    return (
        <div className="bg-white min-h-screen p-6">
            <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-gray-800">Thiệp cưới</h3>
                <button
                    onClick={() => openFormModal(null)}
                    className="bg-blue-600 text-white text-md px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-200 flex items-center">
                    Thêm mới <FaPlus className="ml-2"/>
                </button>
            </div>
            <TemplateList openFormModal={openFormModal} />
            <ModalForm
                isOpen={isFormModalOpen}
                onClose={closeFormModal}
                title={selectedTemplate ? "Cập nhật thiệp cưới" : "Thêm mới thiệp cưới"}
            >
                <TemplateNew template={selectedTemplate} onClose={closeFormModal} isEdit={isEdit}/>
            </ModalForm>
        </div>
    );
}

export default TemplateManagement;

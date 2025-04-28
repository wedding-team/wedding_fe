import {GrTemplate} from "react-icons/gr";
import {useEffect, useState} from "react";
import TemplateApi from "../../apis/TemplateApi";
import TemplateModal from "./TemplateModal";
import {FiChevronRight} from "react-icons/fi";

function Template({formik}) {
    const [templates, setTemplates] = useState([]);
    const [loading, setLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const selectedTemplate = templates.find(
        (t) => t.code === formik.values.template_code
    );

    const handleSelectTemplate = (code) => {
        formik.setFieldValue("template_code", code);
        setIsModalOpen(false);
    };

    useEffect(() => {
        const fetchTemplates = async () => {
            try {
                const res = await TemplateApi.getAllTemplates();
                setTemplates(res.data.body);
            } catch (error) {
                console.error("Lỗi khi lấy danh sách templates: ", error);
            } finally {
                setLoading(false);
            }
        };
        fetchTemplates();
    }, []);

    if (loading) return (
        <div className="flex justify-center items-center py-8">
            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-blue-500"></div>
        </div>
    );

    return (
        <div>
            <label className="flex text-lg font-semibold text-gray-800 mb-2 gap-2 items-center">
                <GrTemplate className="text-gray-600"/> Mẫu thiệp
            </label>
            <div className="border border-gray-300 h-[425px] md:h-[245px] rounded-xl overflow-hidden flex flex-col">
                <div className="flex flex-col md:flex-row flex-1 overflow-hidden">
                    <div className="relative md:w-1/2 h-48 md:h-auto">
                        <img
                            src={selectedTemplate?.image_url}
                            alt="Ảnh mẫu thiệp"
                            className="w-full h-full object-cover object-top "
                        />
                    </div>
                    <div className="p-4 md:w-1/2 flex flex-col justify-between overflow-hidden h-full">
                        <h3 className="text-lg font-medium text-gray-800 mb-1">{selectedTemplate?.title}</h3>
                        <p className="text-sm text-gray-600 mb-4 overflow-auto">{selectedTemplate?.description}</p>
                        <button
                            type="button"
                            onClick={() => setIsModalOpen(true)}
                            className="mt-auto flex items-center justify-between w-full px-4 py-2 bg-white border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                        >
                            <span>Chọn thiệp khác</span>
                            <FiChevronRight className="text-gray-500"/>
                        </button>
                    </div>
                </div>
            </div>
            {isModalOpen && (
                <TemplateModal
                    templates={templates}
                    selectedCode={formik.values.template_code}
                    onSelect={handleSelectTemplate}
                    onClose={() => setIsModalOpen(false)}
                />
            )}
        </div>
    );
}

export default Template;
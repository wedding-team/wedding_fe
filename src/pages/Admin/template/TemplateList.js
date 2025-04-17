import {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {fetchTemplates} from "../../../redux/template/templateSlice";
import TemplateDelete from "./TemplateDelete";

function TemplateList({openFormModal}) {
    const dispatch = useDispatch();
    const {list, error} = useSelector((state) => state.templates);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    useEffect(() => {
        dispatch(fetchTemplates());
    }, [dispatch]);

    const openDeleteModal = (template) => {
        setSelectedTemplate(template);
        setIsDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setSelectedTemplate(null);
        setIsDeleteModalOpen(false);
    };

    if (error) return <p>Lỗi: {error}</p>;

    return (<div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                <thead>
                <tr className="bg-gray-100">
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Hình ảnh</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Tiêu đề</th>
                    <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700">Loại</th>
                    <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700">Hoạt động</th>
                    <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Mô tả</th>
                    <th className="px-4 py-2 text-center text-sm font-semibold text-gray-700">Hành động</th>
                </tr>
                </thead>
                <tbody>
                {list.map((template) => (
                    <tr key={template.id} className="border-t border-gray-200 hover:bg-gray-50 transition duration-200">
                        <td className="px-4 py-2">
                            <img src={template.image_url} alt={template.title}
                                 className="w-24 h-16 object-cover rounded-md"/>
                        </td>
                        <td className="px-4 py-2 text-gray-800 font-medium">{template.title}</td>
                        <td className='text-center'>
                            <span
                                className={`px-2 py-1 text-xs font-semibold text-white rounded-full ${template.template_type === "vip" ? "bg-yellow-500" : "bg-green-500"}`}>
                                {template.template_type === "vip" ? "Giao diện VIP" : "Giao diện Free"}
                            </span>
                        </td>
                        <td className='text-center'>
                            <span
                                className={`px-2 py-1 text-xs font-semibold text-white rounded-full ${template.is_active ? "bg-green-500" : "bg-red-500"}`}>
                                {template.is_active ? 'Đang hoạt động' : 'Không hoạt động'}
                            </span>
                        </td>
                        <td className="px-4 py-2 text-gray-600 text-sm max-w-xs">{template.description}</td>
                        <td>
                            <div className="flex gap-2 justify-center">
                                <button
                                    onClick={() => openFormModal(template)}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 text-xs rounded-md transition duration-200 flex items-center">
                                    Chỉnh sửa
                                </button>
                                <button
                                    onClick={() => openDeleteModal(template)}
                                    className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-2 rounded-md transition duration-200 flex items-center">
                                    Xoá
                                </button>
                            </div>
                        </td>
                    </tr>))}
                </tbody>
            </table>
            {selectedTemplate && (<TemplateDelete
                    isOpen={isDeleteModalOpen}
                    onClose={closeDeleteModal}
                    template={selectedTemplate}
                />)}
        </div>);
}

export default TemplateList;

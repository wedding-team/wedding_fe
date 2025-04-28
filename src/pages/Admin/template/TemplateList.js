import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchTemplates } from "../../../redux/template/templateSlice";
import TemplateDelete from "./TemplateDelete";

function TemplateList({ openFormModal, categories }) {
    const dispatch = useDispatch();
    const { list, error } = useSelector((state) => state.templates);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    useEffect(() => {
        dispatch(fetchTemplates());
    }, [dispatch]);

    const templatesWithCategory = list.map((template) => {
        const category = categories.find((cat) => cat.id === template.category_id);
        return {
            ...template,
            categoryName: category ? category.name : 'Không xác định',
        };
    });

    const openDeleteModal = (template) => {
        setSelectedTemplate(template);
        setIsDeleteModalOpen(true);
    };

    const closeDeleteModal = () => {
        setSelectedTemplate(null);
        setIsDeleteModalOpen(false);
    };

    if (error) return <p>Lỗi: {error}</p>;

    return (
        <div className="overflow-x-auto">
            <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-lg">
                <thead>
                <tr className="bg-gray-100">
                    <th className="text-center text-sm font-semibold text-gray-700 py-3 px-4">Hình ảnh</th>
                    <th className="text-left text-sm font-semibold text-gray-700 py-3 px-4">Tiêu đề</th>
                    <th className="text-left text-sm font-semibold text-gray-700 py-3 px-4">Danh mục</th>
                    <th className="text-center text-sm font-semibold text-gray-700 py-3 px-4">Loại</th>
                    <th className="text-center text-sm font-semibold text-gray-700 py-3 px-4">Hoạt động</th>
                    <th className="text-left text-sm font-semibold text-gray-700 py-3 px-4">Mô tả</th>
                    <th className="text-center text-sm font-semibold text-gray-700 py-3 px-4">Hành động</th>
                </tr>
                </thead>
                <tbody>
                {templatesWithCategory.map((template) => (
                    <tr key={template.id} className="border-t border-gray-200 hover:bg-gray-50 transition duration-200">
                        <td className="py-3 text-center px-4">
                            <img
                                src={template.image_url}
                                alt={template.title}
                                className="w-20 h-12 mx-auto object-cover object-top rounded-md"
                            />
                        </td>
                        <td className="text-gray-800 text-sm font-medium py-3 px-4">{template.title}</td>
                        <td className="text-gray-800 text-xs py-3 px-4">{template.categoryName}</td>
                        <td className="text-center py-3 px-4">
                                <span className={`px-2 py-1 text-xs font-semibold rounded-full`}>
                                    {template.template_type === "vip" ? "VIP" : "FREE"}
                                </span>
                        </td>
                        <td className="text-center py-3 px-4">
                                <span
                                    className={`px-2 py-1 text-xs font-semibold rounded-full ${template.is_active ? "bg-green-200 text-green-700" : "bg-red-200 text-red-700"}`}>
                                    {template.is_active ? 'Hoạt động' : 'Không hoạt động'}
                                </span>
                        </td>
                        <td className="text-gray-600 text-xs my-2 px-4 w-80 line-clamp-4">{template.description}</td>
                        <td className="text-center py-3 px-4">
                            <div className="flex gap-2 justify-center">
                                <button
                                    onClick={() => openFormModal(template)}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 text-xs rounded-md transition duration-200">
                                    Chỉnh sửa
                                </button>
                                <button
                                    onClick={() => openDeleteModal(template)}
                                    className="bg-red-500 hover:bg-red-600 text-white text-xs px-3 py-2 rounded-md transition duration-200">
                                    Xoá
                                </button>
                            </div>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            {selectedTemplate && (
                <TemplateDelete
                    isOpen={isDeleteModalOpen}
                    onClose={closeDeleteModal}
                    template={selectedTemplate}
                />
            )}
        </div>
    );
}

export default TemplateList;

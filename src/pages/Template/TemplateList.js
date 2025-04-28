import Navbar from "../../components/common/Navbar";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import TemplateApi from "../../apis/TemplateApi";
import {useDispatch} from "react-redux";
import {updateGeneralInfo} from "../../redux/generalInfo/generalInfoSlice";

function TemplateList() {
    const [templates, setTemplates] = useState([]);
    const navigate = useNavigate();
    const dispatch = useDispatch();


    useEffect(() => {
        const fetchTemplates = async () => {
            try {
                const res = await TemplateApi.getAllTemplates();
                setTemplates(res.data.body);
            } catch (error) {
                console.error("Lỗi khi lấy danh sách templates: ", error);
            }
        };
        fetchTemplates();
    }, []);

    const activeTemplates = templates.filter(template => template.is_active);

    const handlePreview = (templateCode) => {
        window.open(`http://localhost:3000/theme?template=${templateCode}`, "_blank");
    };

    const handleUseTemplate = async (templateCode) => {
        const token = localStorage.getItem("Authorization");

        if (!token) {
            localStorage.setItem("pendingTemplateCode", templateCode);
            navigate("/login");
            return;
        }

        try {
            await dispatch(updateGeneralInfo({ template_code: templateCode })).unwrap();
            navigate("/wedding/general-info", { replace: true });
        } catch (error) {
            console.error("Lỗi khi lưu template:", error);
            alert("Có lỗi xảy ra khi lưu mẫu. Vui lòng thử lại.");
        }
    };


    return (
        <div className="bg-gray-100 min-h-screen">
            <Navbar />
            <div className="max-w-7xl mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Chọn Giao Diện Thiệp Cưới</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {activeTemplates.map((template) => (
                        <div key={template.id}
                             className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col">
                            <img
                                src={template.image_url}
                                alt={template.title}
                                className="w-full h-96 object-cover object-top transition-all duration-[5000ms] ease-in-out hover:object-bottom"
                            />
                            <div className="p-4 flex flex-col flex-grow">
                                <h3 className="text-xl font-semibold text-gray-800 mb-2">{template.title}</h3>
                                <p className="text-gray-600 text-sm mb-4 line-clamp-3 flex-grow">{template.description}</p>
                                <div className="flex gap-2 mt-auto">
                                    <button
                                        onClick={() => handlePreview(template.code)}
                                        className="flex-1 bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition-colors duration-200"
                                    >
                                        Xem trước
                                    </button>
                                    <button
                                        onClick={() => handleUseTemplate(template.code)}
                                        className="flex-1 bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition-colors duration-200"
                                    >
                                        Sử dụng mẫu này
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default TemplateList;

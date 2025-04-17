import Music from "./Music";
import {useEffect, useState} from "react";
import TemplateApi from "../../apis/TemplateApi";
import {FiDownload} from "react-icons/fi";
import {IoCalendarOutline} from "react-icons/io5";
import {FaRegPenToSquare} from "react-icons/fa6";
import {GrTemplate} from "react-icons/gr";
import SnowFall from "./SnowFall";

function GeneralInfo() {
    const [templates, setTemplates] = useState([]);
    const [selectedTemplate, setSelectedTemplate] = useState(null);
    const [loading, setLoading] = useState(true);

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

    const handleTemplateChange = (e) => {
        const selectedId = e.target.value;
        if (!selectedId) {
            setSelectedTemplate(null);
            return;
        }
        const template = activeTemplates.find(t => t.id.toString() === selectedId.toString());
        setSelectedTemplate(template || null);
    };

    if (loading) {
        return <div>Đang tải...</div>;
    }
    const activeTemplates = templates.filter(template => template.is_active);

    return (
        <div className="bg-white p-6 rounded-xl shadow-lg max-w-7xl mx-auto">
            <h2 className="text-2xl font-semibold mb-6 text-gray-800">Thông tin chung</h2>
            <form className="flex flex-col md:flex-row gap-8">
                <div className="flex-1 space-y-4">
                    <div>
                        <label className="flex text-lg font-medium text-gray-700 mb-2 gap-2 items-center">
                            <GrTemplate/> Mẫu thiệp
                        </label>
                        <select
                            onChange={handleTemplateChange}
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm hover:border-gray-400 transition-colors"
                        >
                            <option value="">-- Chọn template --</option>
                            {activeTemplates.map(template => (
                                <option key={template.id} value={template.id}>{template.title}</option>
                            ))}
                        </select>
                        {selectedTemplate && (
                            <div className="mt-4">
                                <img
                                    src={ selectedTemplate.image_url}
                                    alt={`Preview ${selectedTemplate.title}`}
                                    className="w-64 h-auto rounded-lg border border-gray-200 mx-auto"
                                />
                            </div>
                        )}
                    </div>
                    <SnowFall/>
                </div>
                <div className="flex-1 space-y-4">
                    <Music/>
                    <div>
                        <label className="flex text-lg font-medium text-gray-700 items-center mb-2 gap-2">
                            <IoCalendarOutline/> Ngày cưới
                        </label>
                        <input
                            type="date"
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm hover:border-gray-400 transition-colors"
                        />
                    </div>

                    <div>
                        <label className="flex text-lg font-medium text-gray-700 items-center mb-2 gap-2">
                            <FaRegPenToSquare/> Lời ngõ
                        </label>
                        <textarea
                            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm min-h-[120px] hover:border-gray-400 transition-colors"
                            placeholder="Nhập lời ngõ..."
                        />
                    </div>
                </div>
            </form>
            <div className="w-full mt-8 flex justify-center">
                <button
                    type="submit"
                    className="flex items-center gap-2 bg-blue-500 text-white py-3 px-8 rounded-lg font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 hover:bg-blue-600 transition-all shadow-md"
                >
                    <FiDownload className="text-lg"/>
                    <span>Lưu thông tin</span>
                </button>
            </div>
        </div>
    );
}

export default GeneralInfo;
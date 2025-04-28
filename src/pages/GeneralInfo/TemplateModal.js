import { IoMdClose } from "react-icons/io";

function TemplateModal({ templates, selectedCode, onSelect, onClose }) {
    return (
        <div className="fixed inset-0 z-50 bg-black/50 flex items-center justify-center p-4">
            <div className="bg-white rounded-xl shadow-2xl w-full max-w-8xl max-h-[70vh] md:max-h-[95vh] flex flex-col">
                <div className="flex items-center justify-between py-2 px-4 border-b border-gray-100">
                    <h2 className="text-xl font-bold text-gray-800">Chọn mẫu thiệp</h2>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-500 hover:text-gray-700"
                        aria-label="Đóng"
                    >
                        <IoMdClose />
                    </button>
                </div>
                <div className="overflow-y-auto md:p-6 p-3">
                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-2">
                        {templates.map((template) => {
                            const isSelected = template.code === selectedCode;
                            return (
                                <div
                                    key={template.code}
                                    className={`relative group rounded-xl overflow-hidden border transition-all ${
                                        isSelected ? 'border-green-500' : 'border-gray-200'
                                    }`}
                                >
                                    <div className="relative aspect-[4/3]">
                                        <img
                                            src={template.image_url}
                                            alt={template.name}
                                            className="w-full h-full object-cover object-top transition-all duration-300"
                                        />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="font-medium text-gray-900 truncate md:text-base text-xs">{template.title}</h3>
                                        {template.description && (
                                            <p className="text-sm text-gray-500 mt-1 line-clamp-4">
                                                {template.description}
                                            </p>
                                        )}
                                    </div>
                                    <div
                                        className={`absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent flex items-end p-4 transition-opacity `}
                                    >
                                        <div className="flex flex-col md:flex-row w-full gap-2">
                                            <button
                                                onClick={() => onSelect(template.code)}
                                                disabled={isSelected}
                                                className={`w-full py-2 md:text-base text-xs px-4 rounded-lg font-medium transition-colors ${
                                                    isSelected
                                                        ? "bg-gray-100 text-gray-600 cursor-default"
                                                        : "bg-blue-600 text-white hover:bg-blue-700"
                                                }`}
                                            >
                                                {isSelected ? "Đang sử dụng" : "Chọn mẫu này"}
                                            </button>
                                            <button
                                                type="button"
                                                onClick={(e) => {
                                                    e.stopPropagation();
                                                    window.open("http://localhost:3000/theme?template=" + template.code, "_blank");
                                                }}
                                                className="w-full py-2 px-4 md:text-base text-xs bg-white/90 text-gray-800 rounded-lg font-medium hover:bg-white transition-colors"
                                            >
                                                Xem trước
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TemplateModal;

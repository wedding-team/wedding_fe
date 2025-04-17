import { MdAnimation } from "react-icons/md";

function SnowFall() {
    return (
        <div>
            <label className="flex text-lg font-medium text-gray-700 mb-2 gap-2 items-center">
                <MdAnimation /> Hiệu ứng
            </label>
            <select
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 text-sm hover:border-gray-400 transition-colors"
            >
                <option value="">-- Chọn hiệu ứng --</option>
                <option value="">Hiệu ứng 1</option>
                <option value="">Hiệu ứng 2</option>
            </select>
        </div>
    )
}

export default SnowFall;
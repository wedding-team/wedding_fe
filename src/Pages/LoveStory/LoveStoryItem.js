import Helper from "../../utils/Helper";

function LoveStoryItem({loveStory, onDelete, onEdit}) {
    return (
        <li className="flex items-center justify-between py-6 border-b border-gray-300">
            <img
                src={loveStory.image_url}
                alt={loveStory.title}
                className="w-64 h-52 object-cover rounded-lg shadow-lg"
            />
            <div className="flex-1 ml-6">
                <h3 className="text-2xl font-bold text-gray-800">{loveStory.title}</h3>
                <p className="text-lg text-gray-600 mt-3 w-2/3 line-clamp-2">{loveStory.description}</p>
                <p className="text-lg text-gray-500 mt-2">
                    {Helper.formatDate(loveStory.love_story_date)}
                </p>
            </div>
            <div className="flex space-x-4">
                <button
                    className="bg-green-500 hover:bg-green-600 text-white py-2 px-5 rounded-sm text-base shadow-md transition focus:outline-none"
                    onClick={() => onEdit(loveStory)}
                >
                    Chỉnh sửa
                </button>
                <button
                    className="bg-red-500 hover:bg-red-600 text-white py-2 px-5 rounded-sm text-base shadow-md transition focus:outline-none"
                    onClick={() => onDelete(loveStory)}
                >
                    Xoá
                </button>
            </div>
        </li>
    )
        ;
}

export default LoveStoryItem;

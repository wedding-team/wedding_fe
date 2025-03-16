function LoveStoryCard({ loveStory }) {
    return (
        <div className="bg-white rounded-xl shadow-md overflow-hidden w-80 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <img
                src={loveStory.image_url}
                alt={loveStory.title}
                className="w-full h-48 object-cover rounded-t-lg"
            />
            <div className="p-4 space-y-2">
                <h3 className="text-lg font-semibold text-gray-800">{loveStory.title}</h3>
                <p className="text-gray-600 text-sm line-clamp-2">{loveStory.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                    <span>{new Date(loveStory.love_story_date).toLocaleDateString("vi-VN")}</span>
                    <button className="px-3 py-1 bg-pink-500 text-white rounded-md text-xs font-medium transition hover:bg-pink-600">
                        Xem thêm
                    </button>
                </div>
            </div>
        </div>
    );
}

export default LoveStoryCard;

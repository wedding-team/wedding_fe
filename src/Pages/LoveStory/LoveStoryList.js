import {useEffect, useState} from "react";
import LoveStoryApi from "../../Apis/LoveStoryApi";
import LoveStoryItem from "./LoveStoryItem";

function LoveStoryList() {
    const [loveStories, setLoveStories] = useState([])

    useEffect(() => {
        const fetchLoveStories = async () => {
            try {
                const res = await LoveStoryApi.getAllLoveStory();
                setLoveStories(res.data.body || []);
            } catch (e) {
                console.error("Lỗi khi fetch ảnh:", e);
            }
        }
        fetchLoveStories();
    }, [])


    return (
        <div>
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold text-gray-800">Danh sách câu chuyện tình yêu</h2>
                <button
                    className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-sm shadow-md"
                >
                    + Thêm mới
                </button>
            </div>
            {loveStories.length > 0 ? (
                <ul className="space-y-4">
                    {loveStories.map((loveStory) => (
                        <LoveStoryItem key={loveStory.id} loveStory={loveStory}/>
                    ))}
                </ul>
            ) : (
                <p className="text-center text-gray-600">Không có câu chuyện tình yêu nào nào.</p>
            )}
        </div>
    )
}

export default LoveStoryList;
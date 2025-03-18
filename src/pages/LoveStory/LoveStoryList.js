import {useEffect, useState} from "react";
import LoveStoryItem from "./LoveStoryItem";
import {useDispatch, useSelector} from "react-redux";
import {fetchLoveStories} from "../../redux/loveStory/loveStorySlice";
import LoveStoryDelete from "./LoveStoryDelete";

function LoveStoryList({onEdit}) {
    const dispatch = useDispatch();
    const { stories } = useSelector((state) => state.loveStories);

    useEffect(() => {
        dispatch(fetchLoveStories());
    },[dispatch])

    const [selectLoveStory, setSelectLoveStory] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const openDeleteModal = (loveStory) => {
        setSelectLoveStory(loveStory);
        setIsDeleteModalOpen(true);
    };

    return (
        <div>
            {stories?.length > 0 ? (
                <ul className="space-y-4">
                    {stories.map((loveStory) => (
                        <LoveStoryItem key={loveStory.id} loveStory={loveStory} onDelete={openDeleteModal} onEdit={onEdit}/>
                    ))}
                </ul>
            ) : (
                <p className="text-center text-gray-600">Không có câu chuyện tình yêu nào nào.</p>
            )}
            <LoveStoryDelete isOpen={isDeleteModalOpen} onClose={() => setIsDeleteModalOpen(false)}
                                loveStory={selectLoveStory}/>
        </div>
    )
}

export default LoveStoryList;
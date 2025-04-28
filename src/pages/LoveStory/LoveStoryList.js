import { useEffect, useState } from "react";
import LoveStoryItem from "./LoveStoryItem";
import { useDispatch, useSelector } from "react-redux";
import { fetchLoveStories } from "../../redux/loveStory/loveStorySlice";
import LoveStoryDelete from "./LoveStoryDelete";

function LoveStoryList({ onEdit }) {
    const dispatch = useDispatch();
    const { stories } = useSelector((state) => state.loveStories);

    useEffect(() => {
        dispatch(fetchLoveStories());
    }, [dispatch]);

    const [selectLoveStory, setSelectLoveStory] = useState(null);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);

    const openDeleteModal = (loveStory) => {
        setSelectLoveStory(loveStory);
        setIsDeleteModalOpen(true);
    };

    return (
        <div className="container mx-auto">
            {stories?.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {stories.map((loveStory) => (
                        <LoveStoryItem
                            key={loveStory.id}
                            loveStory={loveStory}
                            onDelete={openDeleteModal}
                            onEdit={onEdit}
                        />
                    ))}
                </div>
            ) : (
                <p className="text-center text-gray-600">Không có câu chuyện tình yêu nào.</p>
            )}
            <LoveStoryDelete
                isOpen={isDeleteModalOpen}
                onClose={() => setIsDeleteModalOpen(false)}
                loveStory={selectLoveStory}
            />
        </div>
    );
}

export default LoveStoryList;

import { TrashIcon, PencilIcon } from "@heroicons/react/24/solid";

function WeddingGalleryItem({ image, onDelete }) {
    return (
        <div className="relative overflow-hidden rounded-md w-[300px] h-[300px] group">
            <img
                src={image.image_url}
                alt="Wedding"
                className="w-full h-full object-cover rounded-md transition-transform duration-300"
            />
            <div className="absolute top-2 right-2 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                    className="bg-blue-600 text-white p-1 rounded-full hover:bg-blue-800"
                    title="Chỉnh sửa"
                >
                    <PencilIcon className="w-5 h-5" />
                </button>
                <button
                    onClick={() => onDelete(image.id)}
                    className="bg-red-600 text-white p-1 rounded-full hover:bg-red-800"
                    title="Xoá"
                >
                    <TrashIcon className="w-5 h-5" />
                </button>
            </div>
        </div>
    );
}

export default WeddingGalleryItem;

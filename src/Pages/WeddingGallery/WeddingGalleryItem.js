import {useState, useEffect} from "react";
import {TrashIcon} from "@heroicons/react/24/solid";

function WeddingGalleryItem({image, onDelete}) {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleKeyDown = (e) => {
            if (e.key === "Escape") {
                setIsOpen(false);
            }
        };
        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
        }
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    return (<>
        <div
            className="relative overflow-hidden w-full h-full group cursor-pointer"
            onClick={() => setIsOpen(true)}
        >
            <img src={image.image_url} alt="Wedding" className="w-full h-full object-cover"/>
            <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        onDelete(image.id);
                    }}
                    className="bg-red-600 text-white p-1 rounded-full hover:bg-red-800 shadow"
                    title="Xoá"
                >
                    <TrashIcon className="w-4 h-4"/>
                </button>
            </div>
        </div>
        {isOpen && (<div
            className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50 animate-fadeIn"
            onClick={() => setIsOpen(false)}>
            <div
                className="relative p-4 animate-zoomIn"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    className="absolute top-2 right-2 bg-white text-black px-2 py-1 rounded-full shadow-lg"
                    onClick={() => setIsOpen(false)}
                >
                    ✕
                </button>
                <img
                    src={image.image_url}
                    alt="Wedding"
                    className="max-w-[90vw] max-h-[90vh] object-contain rounded-lg shadow-lg"
                />
            </div>
        </div>)}
    </>);
}

export default WeddingGalleryItem;

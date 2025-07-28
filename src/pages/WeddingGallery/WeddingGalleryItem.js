import React from 'react';
import {useSortable} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";
import { IoMdMove } from "react-icons/io";
import {TrashIcon, PhotoIcon} from "@heroicons/react/24/solid";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

function WeddingGalleryItem({image, index, onDelete, galleryImages, isSelected}) {
    const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);
    const {attributes, listeners, setNodeRef, transform, transition, isDragging} = useSortable({
        id: image.id,
        data: {type: 'sortable-item'}
    });

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
        zIndex: isDragging ? 1000 : 1,
    };

    const handleImageClick = () => {
        setIsLightboxOpen(true);
    };

    const handleDeleteClick = (e) => {
        e.stopPropagation();
        onDelete(image.id);
    };

    const slides = galleryImages.map(img => ({
        src: img.image_url
    }));

    return (
        <>
            <div ref={setNodeRef} style={style}{...attributes}
                 className={`relative focus:outline-none rounded-lg overflow-hidden ${isDragging ? "shadow-xl border-2 border-dashed border-blue-500" : "shadow-md"}`}>
                <div onClick={handleImageClick} className={`w-full aspect-square cursor-pointer ${isSelected ? "ring-2 ring-blue-500" : ""}`}>
                    {image.image_url ? (
                        <img src={image.image_url} alt={`Wedding gallery ${index + 1}`}
                            className="w-full h-full object-top object-contain bg-gray-50"
                            draggable="false"/>
                    ) : (
                        <div className="flex items-center justify-center w-full h-full bg-gray-200">
                            <PhotoIcon className="w-16 h-16 text-gray-500" />
                        </div>
                    )}
                    <div className="absolute bottom-0 left-0 right-0 bg-black/30 px-2 py-1 flex items-center justify-center gap-2 z-50">
                        <button{...listeners} className="p-1 bg-white/80 hover:bg-white text-gray-700 rounded-md" title="Di chuyển">
                            <IoMdMove className="w-3 h-3 sm:w-5 sm:h-5" />
                        </button>
                        <button onClick={handleDeleteClick} className="p-1 bg-red-100/80 hover:bg-red-100 text-red-600 rounded-md" title="Xoá">
                            <TrashIcon className="w-3 h-3 sm:w-5 sm:h-5" />
                        </button>
                    </div>
                </div>
            </div>
            {image.image_url && (
                <Lightbox open={isLightboxOpen} close={() => setIsLightboxOpen(false)} slides={slides}
                    index={index} plugins={[Thumbnails]}/>
            )}
        </>
    );
}

export default WeddingGalleryItem;
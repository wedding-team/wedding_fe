import React from 'react';
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import { TrashIcon, PhotoIcon } from "@heroicons/react/24/solid";
import Lightbox from "yet-another-react-lightbox";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

function WeddingGalleryItem({ image, index, onDelete }) {
    const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);
    const {
        attributes,
        listeners,
        setNodeRef,
        transform,
        transition,
        isDragging,
    } = useSortable({
        id: image.id,
        data: {
            type: 'sortable-item',
        }
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

    return (
        <>
            <div
                ref={setNodeRef}
                style={style}
                {...attributes}
                {...listeners}
                onClick={handleImageClick}
                className={`
                    relative 
                    w-full 
                    aspect-square 
                    group 
                    cursor-grab 
                    active:cursor-grabbing 
                    focus:outline-none 
                    rounded 
                    ${isDragging
                    ? "shadow-xl border-2 border-dashed border-blue-500"
                    : "shadow-md hover:shadow-lg"
                }
                `}
            >
                {image.image_url ? (
                    <img
                        src={image.image_url}
                        alt={`Wedding gallery image ${index + 1}`}
                        className="w-full h-full object-cover"
                        draggable="false"
                    />
                ) : (
                    <div className="flex items-center justify-center w-full h-full bg-gray-200">
                        <PhotoIcon className="w-16 h-16 text-gray-500" />
                    </div>
                )}

                <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                        onClick={handleDeleteClick}
                        className="
                            bg-red-600
                            text-white
                            p-1.5
                            rounded-full
                            hover:bg-red-800
                            shadow
                            z-50
                        "
                        title="Xoá"
                    >
                        <TrashIcon className="w-5 h-5" />
                    </button>
                </div>
            </div>

            {image.image_url && (
                <Lightbox
                    open={isLightboxOpen}
                    close={() => setIsLightboxOpen(false)}
                    slides={[{ src: image.image_url }]}
                    plugins={[Thumbnails]}
                />
            )}
        </>
    );
}

export default WeddingGalleryItem;
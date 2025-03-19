import {useSortable} from "@dnd-kit/sortable";
import {CSS} from "@dnd-kit/utilities";
import {TrashIcon} from "@heroicons/react/24/solid";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

function WeddingGalleryItem({image, index, onDelete}) {
    const {attributes, listeners, setNodeRef, transform, transition} = useSortable({id: image.id});

    const style = {
        transform: CSS.Transform.toString(transform),
        transition,
    };


    return (
        <>
            <div
                ref={setNodeRef}
                style={style}
                {...attributes}
                {...listeners}
                className="relative overflow-hidden w-[300px] h-[300px] group cursor-grab active:cursor-grabbing focus:outline-none rounded"
            >
                <img src={image.image_url} alt="Wedding" className="w-full h-full object-cover "/>
                <div className="absolute top-2 right-2 flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    <button
                        onPointerDown={(e) => e.stopPropagation()}
                        onClick={(e) => {
                            e.stopPropagation();
                            onDelete(image.id);
                        }}
                        className="bg-red-600 text-white p-1.5 rounded-full hover:bg-red-800 shadow"
                        title="Xoá"
                    >
                        <TrashIcon className="w-5 h-5"/>
                    </button>
                </div>
            </div>
        </>
    );
}

export default WeddingGalleryItem;

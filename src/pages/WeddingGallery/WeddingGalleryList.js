import { useEffect, useState } from "react";
import { DndContext, closestCenter } from "@dnd-kit/core";
import { SortableContext, arrayMove, verticalListSortingStrategy } from "@dnd-kit/sortable";
import WeddingGalleryItem from "./WeddingGalleryItem";
import WeddingGalleryNew from "./WeddingGalleryNew";
import WeddingGalleryApi from "../../apis/WeddingGalleryApi";
import WeddingGalleryDelete from "./WeddingGalleryDelete";
import Helper from "../../utils/Helper";

function WeddingGalleryList() {
    const [images, setImages] = useState([]);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedImageId, setSelectedImageId] = useState(null);

    useEffect(() => {
        fetchData().catch((error) => console.error("Lỗi không mong muốn:", error));
    }, []);

    const fetchData = async () => {
        try {
            const res = await WeddingGalleryApi.getAllWeddingGallery();
            setImages(res.data?.body || []);
        } catch (error) {
            console.log(error);
        }
    };

    const handleUploadFile = async (files) => {
        try {
            for (let file of files) {
                const formData = new FormData();
                formData.append("wedding_gallery[image]", file);
                await WeddingGalleryApi.createWeddingGallery(formData);
            }
            await fetchData();
            Helper.toastSuccess("Thêm ảnh thành công");
        } catch (error) {
            console.error("Lỗi khi tải ảnh lên:", error);
        }
    };

    const handleDeleteClick = (imageId) => {
        setSelectedImageId(imageId);
        setDeleteModalOpen(true);
    };

    const handleConfirmDelete = async () => {
        if (!selectedImageId) return;
        try {
            await WeddingGalleryApi.deleteWeddingEvent(selectedImageId);
            setDeleteModalOpen(false);
            setSelectedImageId(null);
            Helper.toastSuccess("Xoá ảnh thành công");
            await fetchData();
        } catch (error) {
            console.error("Lỗi khi xóa ảnh:", error);
        }
    };

    const handleDragEnd = async (event) => {
        const { active, over } = event;
        if (!over || active.id === over.id) return;
        const oldIndex = images.findIndex((img) => img.id === active.id);
        const newIndex = images.findIndex((img) => img.id === over.id);
        const newImages = arrayMove(images, oldIndex, newIndex);
        setImages(newImages);
        try {
            await WeddingGalleryApi.updateWeddingGallery(active.id, { position: newIndex + 1 });
            console.log("Cập nhật position thành công:", active.id, "=>", newIndex + 1);
        } catch (error) {
            console.error("Lỗi cập nhật position:", error);
        }
    };

    return (
        <div>
            <DndContext collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
                <SortableContext items={images.map((img) => img.id)} strategy={verticalListSortingStrategy}>
                    <div className="grid grid-cols-4 gap-4">
                        {images.map((image) => (
                            <WeddingGalleryItem key={image.id} image={image} onDelete={handleDeleteClick} />
                        ))}
                        <WeddingGalleryNew onUpload={handleUploadFile} />
                    </div>
                </SortableContext>
            </DndContext>

            <WeddingGalleryDelete
                isOpen={isDeleteModalOpen}
                onClose={() => setDeleteModalOpen(false)}
                onConfirm={handleConfirmDelete}
            />
        </div>
    );
}

export default WeddingGalleryList;

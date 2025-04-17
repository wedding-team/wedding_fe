import {useEffect, useState} from "react";
import {DndContext, closestCenter, useSensors, useSensor, PointerSensor,} from "@dnd-kit/core";
import {SortableContext, arrayMove, verticalListSortingStrategy,} from "@dnd-kit/sortable";
import WeddingGalleryItem from "./WeddingGalleryItem";
import WeddingGalleryNew from "./WeddingGalleryNew";
import WeddingGalleryApi from "../../apis/WeddingGalleryApi";
import WeddingGalleryDelete from "./WeddingGalleryDelete";
import Helper from "../../utils/Helper";
import {useSelector} from "react-redux";

function WeddingGalleryList() {
    const [images, setImages] = useState([]);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedImageId, setSelectedImageId] = useState(null);
    const user = useSelector((state) => state.auth.user);

    const sensors = useSensors(
        useSensor(PointerSensor, {activationConstraint: {distance: 8}})
    );

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
            const isFreeUser = user?.role === "free";
            let fileArray = Array.from(files);
            if (isFreeUser) {
                if (images.length >= 5) {
                    return Helper.toastError("Bạn chỉ có thể upload tối đa 5 ảnh!");
                }
                const maxUploads = Math.min(fileArray.length, 5 - images.length);
                fileArray = fileArray.slice(0, maxUploads);
                if (maxUploads < files.length) {
                    Helper.toastWarning("Chỉ có thể thêm tối đa 5 ảnh, các ảnh vượt quá không được tải lên.");
                }
            }
            if (fileArray.length === 0) return;
            for (let file of fileArray) {
                const formData = new FormData();
                formData.append("wedding_gallery[image]", file);
                if (!file.type.startsWith("image/")) {
                    Helper.toastError("Chỉ hỗ trợ upload file hình ảnh!");
                    continue;
                }
                await WeddingGalleryApi.createWeddingGallery(formData);
            }
            await fetchData();
            Helper.toastSuccess("Thêm ảnh thành công");
        } catch (error) {
            console.error("Lỗi khi tải ảnh lên:", error);
            if (error.response?.status === 422) {
                Helper.toastError("Lỗi dữ liệu không hợp lệ, vui lòng kiểm tra lại file!");
            }
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

    const handleDragOver = async (event) => {
        const {active, over} = event;
        if (!over || active.id === over.id) return;
        const oldIndex = images.findIndex((img) => img.id === active.id);
        const newIndex = images.findIndex((img) => img.id === over.id);
        if (oldIndex !== newIndex) {
            const newImages = arrayMove(images, oldIndex, newIndex);
            setImages(newImages);
            try {
                await WeddingGalleryApi.updateWeddingGallery(active.id, {
                    position: newIndex + 1,
                });
            } catch (error) {
                console.error("Lỗi cập nhật position khi kéo:", error);
                fetchData();
            }
        }
    };

    const handleDragEnd = async (event) => {
        const {active, over} = event;
        if (!over || active.id === over.id) return;
        const oldIndex = images.findIndex((img) => img.id === active.id);
        const newIndex = images.findIndex((img) => img.id === over.id);
        if (oldIndex !== newIndex) {
            Helper.toastSuccess("Cập nhật vị trí thành công");
        }
    };

    return (
        <div>
            <DndContext sensors={sensors} collisionDetection={closestCenter} onDragOver={handleDragOver}
                        onDragEnd={handleDragEnd}>
                <SortableContext items={images.map((img) => img.id)} strategy={verticalListSortingStrategy}>
                    <div
                        className="grid max-md:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 transition-all duration-200 ease-in-out">
                        {images.map((image, index) => (
                            <WeddingGalleryItem
                                key={image.id}
                                image={image}
                                galleryImages={images}
                                index={index}
                                onDelete={handleDeleteClick}
                            />
                        ))}
                        <WeddingGalleryNew onUpload={handleUploadFile}/>
                    </div>
                </SortableContext>
            </DndContext>
            <WeddingGalleryDelete isOpen={isDeleteModalOpen} onClose={() => setDeleteModalOpen(false)}
                                  onConfirm={handleConfirmDelete}/>
        </div>
    );
}

export default WeddingGalleryList;
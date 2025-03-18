import WeddingGalleryItem from "./WeddingGalleryItem";
import WeddingGalleryNew from "./WeddingGalleryNew";
import WeddingGalleryApi from "../../apis/WeddingGalleryApi";
import {useEffect, useState} from "react";
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
            Helper.toastSuccess("Thêm ảnh thành công")
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
            Helper.toastSuccess("Xoá ảnh thành công")
            await fetchData();
        } catch (error) {
            console.error("Lỗi khi xóa ảnh:", error);
        }
    };

    return (
        <div>
            <div className="grid grid-cols-3 gap-6">

                {images.map((image) => (
                    <WeddingGalleryItem key={image.id} image={image} onDelete={handleDeleteClick}/>
                ))}
                <WeddingGalleryNew onUpload={handleUploadFile}/>
            </div>
            <div>
                <WeddingGalleryDelete
                    isOpen={isDeleteModalOpen}
                    onClose={() => setDeleteModalOpen(false)}
                    onConfirm={handleConfirmDelete}
                />
            </div>
        </div>

    );
}

export default WeddingGalleryList;

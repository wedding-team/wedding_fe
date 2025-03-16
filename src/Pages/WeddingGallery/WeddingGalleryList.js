import { useState, useEffect } from "react";
import WeddingGalleryApi from "../../apis/WeddingGalleryApi";
import Helper from "../../utils/Helper";
import WeddingGalleryItem from "./WeddingGalleryItem";
import WeddingGalleryDelete from "./WeddingGalleryDelete";

function WeddingGalleryList() {
    const [images, setImages] = useState([]);
    const [isDeleteModalOpen, setDeleteModalOpen] = useState(false);
    const [selectedImageId, setSelectedImageId] = useState(null);

    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await WeddingGalleryApi.getAllWeddingGallery();
                setImages(response.data.body || []);
            } catch (error) {
                Helper.toastError("Lỗi khi lấy danh sách ảnh");
                console.error("Lỗi khi fetch ảnh:", error);
            }
        };
        fetchImages();
    }, []);

    const handleDeleteClick = (id) => {
        setSelectedImageId(id);
        setDeleteModalOpen(true);
    };

    const handleDeleteSuccess = (id) => {
        setImages((prevImages) => prevImages.filter((img) => img.id !== id));
    };

    return (
        <>
            {images.map((image) => (
                <WeddingGalleryItem key={image.id} image={image} onDelete={handleDeleteClick} />
            ))}
            <WeddingGalleryDelete
                isOpen={isDeleteModalOpen}
                onClose={() => setDeleteModalOpen(false)}
                selectedImageId={selectedImageId}
                onDeleteSuccess={handleDeleteSuccess} 
            />
        </>
    );
}

export default WeddingGalleryList;

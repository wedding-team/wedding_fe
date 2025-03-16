import { useEffect, useState } from "react";
import WeddingGalleryApi from "../Apis/WeddingGalleryApi";
import WeddingGalleryForm from "../Component/WeddingGallery/WeddingGalleryForm";

function WeddingGallery() {
    const [images, setImages] = useState([]);

    useEffect(() => {
        fetchImages();
    }, []);

    const fetchImages = async () => {
        try {
            const response = await WeddingGalleryApi.getAllWeddingGallery();
            setImages(response.data.body || []);
        } catch (error) {
            console.error("Lỗi khi tải ảnh:", error);
        }
    };

    return (
        <div className="container mx-auto p-6 bg-white max-w-screen-xl rounded-sm shadow">
            <h2 className="text-xl font-semibold mb-4">Thư viện ảnh cưới</h2>
            <div className="overflow-y-auto p-4 rounded-md">
                <div className="grid grid-cols-3 gap-4">
                    <WeddingGalleryForm />
                    {images.map((image) => (
                        <div key={image.id} className="relative overflow-hidden rounded-md w-[300px] h-[300px]">
                            <img
                                src={image.image_url}
                                alt="Wedding"
                                className="w-full h-full object-cover rounded-md transition-transform duration-300 "
                            />
                        </div>
                    ))}

                </div>
            </div>
        </div>
    );
}

export default WeddingGallery;

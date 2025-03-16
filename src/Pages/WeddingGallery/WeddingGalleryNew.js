import { useState } from "react";
import { PhotoIcon } from "@heroicons/react/16/solid";
import WeddingGalleryApi from "../../Apis/WeddingGalleryApi";
import Helper from "../../Utils/Helper";

function WeddingGalleryNew({ onUploadSuccess }) {
    const [isDragging, setIsDragging] = useState(false);

    const handleFileUpload = async (files) => {
        if (!files.length) return;

        const uploadedImages = await Promise.all(
            [...files].map(async (file) => {
                try {
                    const formData = new FormData();
                    formData.append("wedding_gallery[image]", file);
                    const response = await WeddingGalleryApi.createWeddingGallery(formData);
                    if (response.data?.body) {
                        Helper.toastSuccess("Thêm ảnh thành công");
                        return response.data.body;
                    }
                } catch (error) {
                    Helper.toastError("Thêm ảnh thất bại");
                    console.error("Lỗi khi tải ảnh lên:", error);
                }
                return null;
            })
        );

        onUploadSuccess(uploadedImages.filter(Boolean));
    };

    return (
        <label
            htmlFor="file-upload"
            className={`flex justify-center items-center w-[300px] h-[300px] rounded-md border border-dashed 
                ${isDragging ? "border-blue-500 bg-blue-50" : "border-gray-900/25"}
                cursor-pointer hover:bg-gray-50 transition group`}
            onDragOver={(e) => {
                e.preventDefault();
                setIsDragging(true);
            }}
            onDragLeave={() => setIsDragging(false)}
            onDrop={(e) => {
                e.preventDefault();
                setIsDragging(false);
                handleFileUpload(e.dataTransfer.files);
            }}
        >
            <div className="text-center">
                <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />
                <div className="mt-2 text-sm text-gray-600 flex">
                    <span className="font-semibold text-blue-600 group-hover:text-blue-800">
                        Kéo ảnh vào đây
                    </span>
                    <p className="pl-1 mb-1">hoặc nhấn để tải lên</p>
                </div>
                <p className="text-xs text-gray-600">Hỗ trợ PNG, JPG (chọn nhiều ảnh)</p>
            </div>
            <input
                id="file-upload"
                type="file"
                className="sr-only"
                accept="image/png, image/jpeg"
                multiple
                onChange={(e) => handleFileUpload(e.target.files)}
            />
        </label>
    );
}

export default WeddingGalleryNew;

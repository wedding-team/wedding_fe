import { useState } from "react";
import { PhotoIcon } from "@heroicons/react/16/solid";

function WeddingGalleryNew({onUpload }) {
    const [, setLoading] = useState(false);

    const handleChange = async (event) => {
        const files = event.target.files;
        if (!files.length) return;

        setLoading(true);
        await onUpload(files);
        setLoading(false);
    };

    return (
        <label
            className="flex flex-col justify-center items-center w-full aspect-square rounded-md border border-dashed cursor-pointer hover:bg-gray-50 transition group bg-white p-3">
            <PhotoIcon className="size-8 sm:size-10 md:size-12 text-gray-300 mb-2"/>
            <div className="text-center text-gray-600 text-xs sm:text-sm px-2 sm:px-0">
                <p className="font-semibold text-blue-600 group-hover:text-blue-800 mb-1 leading-tight">
                    Kéo ảnh hoặc nhấn để tải lên
                </p>
                <p className="text-[10px] sm:text-xs text-gray-500">Hỗ trợ PNG, JPG (nhiều ảnh)</p>
            </div>
            <input
                type="file"
                className="sr-only"
                accept="image/png, image/jpeg"
                multiple
                onChange={handleChange}
            />
        </label>
    );
}

export default WeddingGalleryNew;

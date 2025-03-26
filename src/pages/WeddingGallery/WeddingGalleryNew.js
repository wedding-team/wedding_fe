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
        <label className="flex justify-center items-center w-full h-full object-cover rounded-md border cursor-pointer hover:bg-gray-50 transition group">
            <div className="text-center">
                <PhotoIcon className="mx-auto size-12 text-gray-300" />
                <div className="mt-2 text-gray-600 max-sm:text-xs sm:text-sm">
                    <p className="font-semibold text-blue-600 group-hover:text-blue-800 mb-1 ">Kéo ảnh hoặc nhấn vào đây để tải lên</p>

                <p className="text-xs text-gray-600">Hỗ trợ PNG, JPG (chọn nhiều ảnh)</p>
                </div>
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

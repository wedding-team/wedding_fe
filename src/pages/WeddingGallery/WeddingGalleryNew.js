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
        <label className="flex justify-center items-center w-[300px] h-[300px] rounded-md border cursor-pointer hover:bg-gray-50 transition group">
            <div className="text-center">
                <PhotoIcon className="mx-auto size-12 text-gray-300" />
                <div className="mt-2 text-sm text-gray-600 flex">
                    <span className="font-semibold text-blue-600 group-hover:text-blue-800">
                        Kéo ảnh vào đây
                    </span>
                    <p className="pl-1 mb-1">hoặc nhấn để tải lên</p>
                </div>
                <p className="text-xs text-gray-600">Hỗ trợ PNG, JPG (chọn nhiều ảnh)</p>
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

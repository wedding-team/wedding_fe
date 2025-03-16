import React from "react";
import { PhotoIcon } from "@heroicons/react/16/solid";

function WeddingGalleryForm() {
    return (
        <form className="w-full">
            <label
                htmlFor="file-upload"
                className="flex justify-center items-center w-[300px] h-[300px] rounded-md border border-dashed border-gray-900/25 cursor-pointer hover:bg-gray-50 transition group"
            >
                <div className="text-center">
                    <PhotoIcon aria-hidden="true" className="mx-auto size-12 text-gray-300" />
                    <div className="mt-2 text-sm text-gray-600 flex">
                        <span className="font-semibold text-blue-600 group-hover:text-blue-800">
                            Tải ảnh lên
                        </span>
                        <p className="pl-1 mb-1">hoặc kéo & thả</p>
                    </div>
                    <p className="text-xs text-gray-600">Hỗ trợ PNG, JPG</p>
                </div>
                <input id="file-upload" name="file-upload" type="file" className="sr-only" multiple />
            </label>
        </form>
    );
}

export default WeddingGalleryForm;

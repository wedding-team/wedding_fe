import WeddingGalleryList from "./WeddingGalleryList";
import {IoMdMove} from "react-icons/io";
import React from "react";

function WeddingGallery() {

    return (
        <div className="mx-auto p-2 md:p-6 bg-white max-w-screen-xl rounded-lg shadow-md">
            <h2 className="max-md:text-lg md:text-2xl font-semibold sm:mb-2">Hình cưới</h2>
            <p className="flex flex-wrap items-center gap-1 text-[11px] sm:text-xs text-gray-500 mb-4">
                Nhấn giữ nút
                <IoMdMove className="w-4 h-4"/>
                và kéo thả để thay đổi vị trí các sự kiện
            </p>
            <div className="overflow-y-auto ">
                <WeddingGalleryList/>
            </div>
        </div>
    );
}

export default WeddingGallery;

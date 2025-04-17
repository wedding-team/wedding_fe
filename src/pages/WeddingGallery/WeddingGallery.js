import WeddingGalleryList from "./WeddingGalleryList";
import {IoMdMove} from "react-icons/io";
import React from "react";

function WeddingGallery() {

    return (
        <div className="container mx-auto p-6 bg-white max-w-screen-xl rounded-lg  shadow-md">
            <h2 className="max-md:text-lg md:text-2xl font-semibold mb-2">Hình cưới</h2>
            <p className="flex gap-2 text-sm mb-4 text-gray-500">Nhấn giữ nút <IoMdMove className="w-5 h-5"/> và kéo thả để thay đổi vị trí các ảnh</p>
            <div className="overflow-y-auto ">
                    <WeddingGalleryList/>
            </div>
        </div>
    );
}

export default WeddingGallery;

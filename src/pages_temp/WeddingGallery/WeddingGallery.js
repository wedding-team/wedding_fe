import WeddingGalleryList from "./WeddingGalleryList";

function WeddingGallery() {

    return (
        <div className="container mx-auto p-6 bg-white max-w-screen-xl rounded-lg  shadow-md">
            <h2 className="text-xl font-semibold mb-4">Thư viện ảnh cưới</h2>
            <div className="overflow-y-auto p-4 rounded-md">
                    <WeddingGalleryList/>
            </div>
        </div>
    );
}

export default WeddingGallery;

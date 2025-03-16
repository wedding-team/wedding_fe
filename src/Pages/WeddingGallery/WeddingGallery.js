import WeddingGalleryNew from "./WeddingGalleryNew";
import WeddingGalleryList from "./WeddingGalleryList";

function WeddingGallery() {
    return (
        <div className="container mx-auto p-6 bg-white max-w-screen-xl rounded-sm shadow">
            <h2 className="text-xl font-semibold mb-4">Thư viện ảnh cưới</h2>
            <div className="overflow-y-auto p-4 rounded-md">
                <div className="grid grid-cols-3 gap-4">
                    <WeddingGalleryNew />
                    <WeddingGalleryList  />
                </div>
            </div>
        </div>
    );
}

export default WeddingGallery;

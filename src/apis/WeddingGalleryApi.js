import apiClient from "./apiClient";

class WeddingGalleryApi {
    static getAllWeddingGallery() {
        return apiClient.get('/api/v1/wedding_gallery');
    }

    static createWeddingGallery(data) {
        return apiClient.post("/api/v1/wedding_gallery", data, {
            headers: { "Content-Type": "multipart/form-data" },
        });
    }

    static async updateWeddingGallery(id,data) {
        return apiClient.post(`/api/v1/wedding_gallery?id=${id}`, data);
    }

    static deleteWeddingEvent(id) {
        return apiClient.delete(`/api/v1/wedding_gallery?id=${id}`);
    }
}

export default WeddingGalleryApi;

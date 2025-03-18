import apiClient from "./apiClient";

class WeddingGalleryApi {
    static getAllWeddingGallery() {
        return apiClient.get('/api/v1/wedding_galleries');
    }

    static createWeddingGallery(data) {
        return apiClient.post('/api/v1/wedding_galleries', data, {
            headers: { "Content-Type": "multipart/form-data" },
        });
    }

    static async updateWeddingGallery(id,data) {
        return apiClient.put(`/api/v1/wedding_galleries/${id}`, data);
    }

    static deleteWeddingEvent(id) {
        return apiClient.delete(`/api/v1/wedding_galleries/${id}`);
    }
}

export default WeddingGalleryApi;

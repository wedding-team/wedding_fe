import apiClient from "./apiClient";

class WeddingGalleryApi {
    static getAllWeddingGallery() {
        return apiClient.get('/api/v1/wedding_gallery');
    }

    static createWeddingGallery(data) {
        return apiClient.post('/api/v1/wedding_gallery', data);
    }

    static async updateWeddingGallery(id,data) {
        return apiClient.post(`/api/v1/wedding_gallery?id=${id}`, data);
    }

    static deleteWeddingEvent(id) {
        return apiClient.post(`/api/v1/wedding_gallery?id=${id}`);
    }

    static toFormData(data) {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            if (value instanceof File || value) {
                formData.append(`wedding_event[${key}]`, value);
            }
        });
        return formData;
    }
}

export default WeddingGalleryApi;

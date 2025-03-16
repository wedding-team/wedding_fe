import apiClient from "./apiClient";

class WeddingEventApi {
    static getAllWeddingEvents() {
        return apiClient.get('/api/v1/wedding_events');
    }

    static getWeddingEvent(id) {
        return apiClient.get(`/api/v1/wedding_events/${id}`);
    }

    static saveWeddingEvent(id, data) {
        const formData = this.toFormData(data);
        const url = id ? `/api/v1/wedding_events/${id}` : '/api/v1/wedding_events';
        const method = id ? 'put' : 'post';
        return apiClient[method](url, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
    }

    static deleteWeddingEvent(id) {
        return apiClient.delete(`/api/v1/wedding_events/${id}`);
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

export default WeddingEventApi;

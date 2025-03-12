import apiClient from "./apiClient";

class WeddingEventApi {
    static getAllWeddingEvents() {
        return apiClient.get('/api/v1/wedding_events')
    }
    static getWeddingEvent(id) {
        return apiClient.get(`/api/v1/wedding_events/${id}`);
    }
    static createWeddingEvent(data) {
        return apiClient.post('/api/v1/wedding_events', data)
    }
    static updateWeddingEvent(id, data) {
        return apiClient.put(`/api/v1/wedding_events/${id}`, data);
    }
    static deleteWeddingEvent(id) {
        return apiClient.delete(`/api/v1/wedding_events/${id}`);
    }
}

export default WeddingEventApi;


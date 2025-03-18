import apiClient from "./apiClient";

class LoveStoryApi {
    static getAllLoveStory() {
        return apiClient.get('/api/v1/love_stories');
    }

    static saveLoveStory(id, data) {
        const formData = this.toFormData(data);
        const url = id ? `/api/v1/love_stories/${id}` : '/api/v1/love_stories';
        const method = id ? 'put' : 'post';
        return apiClient[method](url, formData, {
            headers: { "Content-Type": "multipart/form-data" },
        });
    }

    static deleteLoveStory(id) {
        return apiClient.delete(`/api/v1/love_stories/${id}`);
    }

    static toFormData(data) {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            if (value instanceof File || value) {
                formData.append(`love_story[${key}]`, value);
            }
        });
        return formData;
    }
}

export default LoveStoryApi;

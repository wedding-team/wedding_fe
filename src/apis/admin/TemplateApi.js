import apiClient from "../apiClient";

const getAuthHeaders = () => ({
    "access-token": localStorage.getItem("access-token"),
    client: localStorage.getItem("client"),
    expiry: localStorage.getItem("expiry"),
    uid: localStorage.getItem("uid"),
});

class TemplateApi {
    static getAllTemplates() {
        return apiClient.get('/api/v1/admin/templates', { headers: getAuthHeaders() });
    }

    static getTemplate(id) {
        return apiClient.get(`/api/v1/admin/templates/${id}`, { headers: getAuthHeaders() });
    }

    static saveTemplate(id, data) {
        const formData = this.toFormData(data);
        const url = id ? `/api/v1/admin/templates/${id}` : '/api/v1/admin/templates';
        const method = id ? 'put' : 'post';
        return apiClient[method](url, formData, {
            headers: {
                "Content-Type": "multipart/form-data",
                ...getAuthHeaders()
            },
        });
    }

    static deleteTemplate(id) {
        return apiClient.delete(`/api/v1/admin/templates/${id}`, { headers: getAuthHeaders() });
    }

    static toFormData(data) {
        const formData = new FormData();
        Object.entries(data).forEach(([key, value]) => {
            if (value instanceof File || value) {
                formData.append(`template[${key}]`, value);
            }
        });
        return formData;
    }
}

export default TemplateApi;

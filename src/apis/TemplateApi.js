import apiClient from "./apiClient";

class TemplateApi {
    static getAllTemplates() {
        return apiClient.get('/api/v1/templates')
    }

    static getTemplate(id) {
        return apiClient.get('/api/v1/templates/' + id);
    }
}

export default TemplateApi;
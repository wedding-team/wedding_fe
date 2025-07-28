import apiClient from "./apiClient";

class TemplateApi {
    static getAllTemplates() {
        return apiClient.get('/api/v1/templates')
    }
}

export default TemplateApi;
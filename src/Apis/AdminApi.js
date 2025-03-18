import apiClient from "./apiClient";

class AdminApi {
    static login(data) {
        return apiClient.post('/api/v1/admin', data)
    }
}

export default AdminApi;
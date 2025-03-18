import apiClient from "./apiClient";

class AuthApi {
    static login(data) {
        return apiClient.post('/api/v1/login', data)
    }
    static signUp(data) {
        return apiClient.post('/api/v1/signup', data)
    }
}

export default AuthApi;
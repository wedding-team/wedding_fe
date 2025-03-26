import apiClient from "./apiClient";

class AuthApi {
    static login(data) {
        return apiClient.post('/api/v1/login', data)
    }
    static signUp(data) {
        return apiClient.post('/api/v1/signup', data)
    }
    static updateProfile(data) {
        return apiClient.put('/api/v1/profile', data, {
            headers: {
                "Content-Type": "application/json",
                Authorization: localStorage.getItem("Authorization"),
            },
        });
    }
}

export default AuthApi;
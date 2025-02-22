import instance from "./instance";

class AuthApi {
    static login(data) {
        return instance.post('/api/v1/login', data)
    }
}

export default AuthApi;
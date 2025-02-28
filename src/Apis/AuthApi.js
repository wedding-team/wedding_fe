import instance from "./instance";

class AuthApi {
    static login(data) {
        return instance.post('/api/v1/login', data)
    }
    static signUp(data) {
        return instance.post('/api/v1/signup', data)
    }
}

export default AuthApi;
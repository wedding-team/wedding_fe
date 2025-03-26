import apiClient from "./apiClient";

const getAuthHeaders = () => ({
    "access-token": localStorage.getItem("access-token"),
    client: localStorage.getItem("client"),
    expiry: localStorage.getItem("expiry"),
    uid: localStorage.getItem("uid"),
});

class AdminApi {
    static loginAdmin(data) {
        return apiClient.post(`/api/v1/admin/sign_in`, data, {
            headers: {"Content-Type": "application/json"},
        });
    }
    static getAllUsers(page = 1, search = "") {
        const encodedSearch = encodeURIComponent(search);
        return apiClient.get(`/api/v1/admin/admins?q[email_cont]=${encodedSearch}&page=${page}`, {
            headers: getAuthHeaders(),
        });
    }
    static updateUser(userId,data) {
        return apiClient.put(`/api/v1/admin/admins/${userId}`, data, {
            headers: getAuthHeaders(),
        });
    }
}

export default AdminApi;

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

    static getAllUsers() {
        return apiClient.get(`/api/v1/get_all_users`, {
            headers: getAuthHeaders(),
        });
    }

    static updateRole(userId,role) {
        return apiClient.put(`/api/v1/update_role_user/${userId}`, {role}, {
            headers: getAuthHeaders(),
        });
    }

    static toggleBlockUser(userId) {
        return apiClient.put(`/api/v1/toggle_block_user/${userId}`, {}, {
            headers: getAuthHeaders(),
        });
    }
}

export default AdminApi;

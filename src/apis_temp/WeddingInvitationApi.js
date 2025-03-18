import apiClient from "./apiClient";

class WeddingInvitationApi {
    static getWeddingInvitation() {
        return apiClient.get('/api/v1/wedding_invitation');
    }

    static async updateWeddingInvitation(data) {
        const formData = new FormData();

        Object.entries(data).forEach(([key, value]) => {
            if (value instanceof File) {
                formData.append(`wedding_invitation[${key}]`, value);
            } else if (value) {
                formData.append(`wedding_invitation[${key}]`, value);
            }
        });

        return apiClient.put('/api/v1/wedding_invitation', formData, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
    }
}

export default WeddingInvitationApi;

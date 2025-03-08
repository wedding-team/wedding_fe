import instance from "./instance";

class WeddingInvitationApi {
    static getWeddingInfo() {
        return instance.get('/api/v1/wedding_invitation');
    }

    static updateWeddingInfo(data) {
        return instance.put('/api/v1/wedding_invitation', data);
    }
}

export default WeddingInvitationApi;
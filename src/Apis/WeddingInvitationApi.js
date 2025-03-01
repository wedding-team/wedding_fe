import instance from "./instance";

class WeddingInvitationApi  {
    static update(data) {
        return instance.put('/api/v1/login', data)
    }
   
}

export default WeddingInvitationApi;
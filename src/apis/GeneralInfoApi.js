import apiClient from "./apiClient";

class GeneralInfoApi{
    static getGeneralInfo() {
        return apiClient.get('/api/v1/general_infos');
    }

    static updateGeneralInfo(data) {
        return apiClient.put('/api/v1/general_infos', data);
    }
}

export default GeneralInfoApi;
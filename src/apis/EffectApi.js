import apiClient from "./apiClient";

class EffectApi{
    static getAllEffects() {
        return apiClient.get('/api/v1/effects');
    }
}

export default EffectApi;
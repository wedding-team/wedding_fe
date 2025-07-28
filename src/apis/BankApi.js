import apiClient from "./apiClient";

class BankApi {
    static getAllBanks() {
        return apiClient.get('https://api.vietqr.io/v2/banks')
    }
}

export default BankApi;
import apiClient from "./apiClient";

class AudioApi{
    static getAllAudio() {
        return apiClient.get('/api/v1/audios');
    }
}

export default AudioApi;
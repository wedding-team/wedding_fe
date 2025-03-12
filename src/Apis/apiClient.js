import axios from 'axios';

const apiClient = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    },
});

apiClient.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");
    const client = localStorage.getItem("client");
    const uid = localStorage.getItem("uid");

    if (token) {
        config.headers['Authorization'] = `Bearer ${token}`;
        config.headers['access-token'] = token;
        config.headers['client'] = client;
        config.headers['uid'] = uid;
    }
    return config;
}, (error) => {
    return Promise.reject(error);
});

export default apiClient;
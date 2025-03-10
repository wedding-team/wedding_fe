import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.REACT_APP_API_URL || 'http://localhost:3000',
    headers: {
        'Content-Type': 'application/json',
    },
});

instance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('token');
        const client = localStorage.getItem('client');
        const uid = localStorage.getItem('uid');

        if (token) {
            config.headers['Authorization'] = `Bearer ${token}`;

            config.headers['access-token'] = token;
            config.headers['client'] = client;
            config.headers['uid'] = uid;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

instance.interceptors.response.use(
    (response) => {
        if (response.headers['access-token']) {
            localStorage.setItem('token', response.headers['access-token']);
            localStorage.setItem('client', response.headers['client']);
            localStorage.setItem('uid', response.headers['uid']);
        }
        return response;
    },
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
            localStorage.removeItem('client');
            localStorage.removeItem('uid');
            window.location.href = '/login';
        } else if (error.response?.status === 403) {
            console.error('Forbidden:', error.response.data);
        }
        return Promise.reject(error);
    }
);

export default instance;
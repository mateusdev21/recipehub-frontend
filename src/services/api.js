import axios from "axios";

if (!process.env.API_URL) {
    throw new Error('API_URL is missing')
}

const api = axios.create({
    baseURL: process.env.API_URL,
    timeout: 10000,
})

api.interceptors.request.use((config) => {
    const token = localStorage.getItem("access_token");
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

export default api;

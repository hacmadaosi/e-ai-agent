import axios from "axios";

const api = axios.create(
    {
        baseURL: process.env.NEXT_PUBLIC_MODE === "development" ? "http://localhost:5000/api" : "/api",
        timeout: 240000,
        headers: {
            "Content-Type": "application/json"
        }
    }
)

api.interceptors.request.use(
    (config) => {
        // 
        return config
    },
    (error) => Promise.reject(error)
)

api.interceptors.response.use(
    (response) => response,
    (error) => {
        console.log(process.env.NEXT_PUBLIC_MODE)
        console.error("API Error:", error.response || error);
        return Promise.reject(error);
    }
)

export default api;
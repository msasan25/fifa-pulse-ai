import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    timeout: 30000,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
});

api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.code === "ECONNABORTED") {
            console.error("Request timed out.");
        } else if (error.response) {
            console.error(
                `API Error ${error.response.status}:`,
                error.response.data
            );
        } else if (error.request) {
            console.error("Network error. Unable to reach the backend.");
        } else {
            console.error("Unexpected error:", error.message);
        }

        return Promise.reject(error);
    }
);

export default api;
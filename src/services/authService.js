import api from "./api";

export const loginUser = (data) => api.post("/users/login", data);
export const registerUser = (data) => api.post("/auth/register", data);
export const loginAdmin = (data) => api.post("/auth/admin/login", data);

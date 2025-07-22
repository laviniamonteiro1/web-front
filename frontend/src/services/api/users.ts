// src/services/api/user.ts

import { api } from "../http/axios";
import type { UserProps as UserType } from "../../types/UserType"

const apiUser = {
    login: async (email: string, password: string) => {
        const response = await api.post("/auth/login", { email, password });
        return response.data; 
    },

    register: async (userData: Omit<UserType, "id">) => {
        const response = await api.post("/auth/register", userData);
        return response.data; 
    },

    getCurrentUser: async () => {
        const response = await api.get("/auth/me"); 
        return response.data; 
    },

    getProfile: async () => {
        const response = await api.get("/users/profile");
        return response.data;
    },

    updateProfile: async (userData: Partial<UserType>) => {
        const response = await api.put("/users/profile", userData);
        return response.data;
    },


    logout: async () => {
        const response = await api.post("/auth/logout"); 
        return response.data; 
    }
};

export default apiUser;
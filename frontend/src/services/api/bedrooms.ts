import { api } from "../http/axios";
import type { BedroomProps as BedroomType } from "../../types/BedroomType";

const apiBedroom = {
    getAll: async () => {
        const response = await api.get("/bedrooms/");
        return response.data;
    },

    getById: async (id: string) => {
        const response = await api.get(`/bedrooms/${id}`);
        return response.data;
    },

    create: async (bedroomData: Omit<BedroomType, "id">) => {
        const response = await api.post("/bedrooms", bedroomData);
        return response.data;
    },

    update: async (id: string, bedroomData: Partial<BedroomType>) => {
        const response = await api.put(`/bedrooms/${id}`, bedroomData);
        return response.data;
    },

    delete: async (id: string) => {
        const response = await api.delete(`/bedrooms/${id}`);
        return response.data;
    }
};

export default apiBedroom;


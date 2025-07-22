import { api } from "../http/axios";
import type { Reservation as ReservationType } from "../../types/ReservationType";

const apiReservation = {
    getAll: async () => {
        const response = await api.get("/reservations");
        return response.data;
    },

    getById: async (id: string) => {
        const response = await api.get(`/reservations/${id}`);
        return response.data;
    },

    getByUser: async (userId: string) => {
        const response = await api.get(`/reservations/user/${userId}`);
        return response.data;
    },

    create: async (reservationData: Omit<ReservationType, "id">) => {
        const response = await api.post("/reservations", reservationData);
        return response.data;
    },

    update: async (id: string, reservationData: Partial<ReservationType>) => {
        const response = await api.put(`/reservations/${id}`, reservationData);
        return response.data;
    },

    delete: async (id: string) => {
        const response = await api.delete(`/reservations/${id}`);
        return response.data;
    },

    approve: async (id: string) => {
        const response = await api.patch(`/reservations/${id}/approve`);
        return response.data;
    },

    reject: async (id: string) => {
        const response = await api.patch(`/reservations/${id}/reject`);
        return response.data;
    }
};

export default apiReservation;


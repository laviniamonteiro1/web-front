import { api } from "../http/axios";


type ReservationStatusBackendInput = 'confirmed' | 'cancelled' | 'completed';

interface ReservationCreateBackendPayload {
    user_id: string;
    title: string;
    address: string;
    check_in: string;
    check_out: string;
    status: ReservationStatusBackendInput;
    bedroom_id: string;
}

interface ReservationUpdateBackendPayload {
    title?: string;
    address?: string;
    check_in?: string;
    check_out?: string;
    status?: ReservationStatusBackendInput;
}


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

    getMyReservations: async () => {
        const response = await api.get('/reservations/me');
        return response.data;
    },

    create: async (reservationData: ReservationCreateBackendPayload) => {
        const response = await api.post("/reservations", reservationData);
        return response.data;
    },

    update: async (id: string, reservationData: Partial<ReservationUpdateBackendPayload>) => {
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
    },

    cancel: async (id: string) => {
        const response = await api.post(`/reservations/${id}/cancel`);
        return response.data;
    },
};

export default apiReservation;
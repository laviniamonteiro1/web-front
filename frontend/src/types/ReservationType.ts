export type ReservationStatusDisplay = "Confirmado" | "Cancelada" | "Finalizado";
export type ReservationStatusBackend = "confirmed" | "cancelled" | "completed";

export interface Reservation {
  id: string;
  title: string;
  address: string;
  check_in: string; 
  check_out: string; 
  status: ReservationStatusBackend;
  user_id?: string;
  bedroom_id?: string;
}


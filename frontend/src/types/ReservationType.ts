export interface Reservation {
  id: string;
  title: string;
  address: string;
  checkIn: string;
  checkOut: string;
  status: "Confirmado" | "Cancelada" | "Finalizado";
  };

import { type Reservation } from '@/types/ReservationType';

export const reservationMock: Reservation[] = [
  {
    id: "1",
    title: "Suíte Garden View - Villa Serenità",
    address: "Rua Principal da Cidade, nº 1000, Rio de Janeiro - RJ, Brasil",
    checkIn: "10/08/2025 às 14h00",
    checkOut: "17/08/2025 às 12h00",
    status: "Confirmado",
    },
  {
    id: "2",
    title: "Suíte Garden View - Villa Serenità",
    address: "Rua Principal da Cidade, nº 1000, Rio de Janeiro - RJ, Brasil",
    checkIn: "20/08/2025 às 14h00",
    checkOut: "27/08/2025 às 12h00",
    status: "Cancelada",
  },
  {
    id: "3",
    title: "Suíte Garden View - Villa Serenità",
    address: "Rua Principal da Cidade, nº 1000, Rio de Janeiro - RJ, Brasil",
    checkIn: "05/09/2025 às 14h00",
    checkOut: "12/09/2025 às 12h00",
    status: "Finalizado",
  },
  {
    id: "4",
    title: "Suíte Garden View - Villa Serenità",
    address: "Rua Principal da Cidade, nº 1000, Rio de Janeiro - RJ, Brasil",
    checkIn: "15/11/2025 às 14h00",
    checkOut: "22/11/2025 às 12h00",
    status: "Confirmado",
  }
];

export default reservationMock;

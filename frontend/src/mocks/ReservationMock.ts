import type { Reservation } from '@/types/ReservationType';

const reservationsMock: Reservation[] = [
    {
        id: "1",
        title: "Suíte Garden View - Villa Serenità",
        address: "Rua Principal da Cidade, nº 1000, Rio de Janeiro - RJ, Brasil",
        check_in: "10/08/2025 às 14h00",
        check_out: "17/08/2025 às 12h00",
        status: "confirmed",
    },
    {
        id: "2",
        title: "Suíte Garden View - Villa Serenità",
        address: "Rua Principal da Cidade, nº 1000, Rio de Janeiro - RJ, Brasil",
        check_in: "20/08/2025 às 14h00",
        check_out: "27/08/2025 às 12h00",
        status: "cancelled",
    },
    {
        id: "3",
        title: "Suíte Garden View - Villa Serenità",
        address: "Rua Principal da Cidade, nº 1000, Rio de Janeiro - RJ, Brasil",
        check_in: "05/09/2025 às 14h00",
        check_out: "12/09/2025 às 12h00",
        status: "completed",
    },
    {
        id: "4",
        title: "Suíte Garden View - Villa Serenità",
        address: "Rua Principal da Cidade, nº 1000, Rio de Janeiro - RJ, Brasil",
        check_in: "15/11/2025 às 14h00",
        check_out: "22/11/2025 às 12h00",
        status: "confirmed",
    }
];

export default reservationsMock;
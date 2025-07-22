import { render, screen, within } from "@testing-library/react";
import ReservationComponent from "../../components/Reservation";
import { reservationMock } from "@/mocks/ReservationMock";

describe("ReservationComponent", () => {
  it("deve renderizar todas as reservas mockadas corretamente", () => {
    render(<ReservationComponent />);

    expect(screen.getByText("Minhas Reservas")).toBeInTheDocument();

    const titulos = screen.getAllByText("Suíte Garden View - Villa Serenità");
    expect(titulos).toHaveLength(reservationMock.length);

    titulos.forEach((titleElement, index) => {
      const container = titleElement.closest("div");
      expect(container).toBeInTheDocument();

      const utils = within(container!);
      const reserva = reservationMock[index];

      expect(
        utils.getByText((_, node) =>
          node?.textContent === `Endereço: ${reserva.address}`
        )
      ).toBeInTheDocument();

      expect(
        utils.getByText((_, node) =>
          node?.textContent === `Check-in: ${reserva.checkIn}`
        )
      ).toBeInTheDocument();

      expect(
        utils.getByText((_, node) =>
          node?.textContent === `Check-out: ${reserva.checkOut}`
        )
      ).toBeInTheDocument();

      expect(utils.getByText(reserva.status)).toBeInTheDocument();
    });
  });
});

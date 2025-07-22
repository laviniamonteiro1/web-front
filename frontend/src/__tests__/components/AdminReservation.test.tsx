import { vi } from 'vitest';
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AdminReservationCrud from "../../components/AdminReservationCrud/AdminReservationCrud";


vi.mock("@/mocks/ReservationMock", () => ({
  reservationMock: [
    {
      id: "1",
      title: "Reserva 1",
      address: "Rua A, 123",
      checkIn: "2025-06-01",
      checkOut: "2025-06-05",
      status: "Confirmado",
      hotel: "Hotel 1",
      tipoQuarto: "Standard",
      contatoHotel: {
        telefone: "123456789",
        email: "hotel1@email.com",
      },
    },
  ],
}));

describe("AdminReservationCrud", () => {
  it("deve adicionar uma nova reserva", async () => {
    const user = userEvent.setup();
    render(<AdminReservationCrud />);

    await user.type(screen.getByPlaceholderText("Título"), "Nova Reserva");
    await user.type(screen.getByPlaceholderText("Endereço"), "Rua B, 456");
    await user.type(screen.getByPlaceholderText("Check-in"), "2025-07-01");
    await user.type(screen.getByPlaceholderText("Check-out"), "2025-07-05");

    await user.selectOptions(screen.getByRole("combobox"), "Confirmado");

    await user.click(screen.getByText("Adicionar"));

    expect(screen.getByText("Nova Reserva")).toBeInTheDocument();
    expect(screen.getByText("Rua B, 456")).toBeInTheDocument();
  });

  it("deve excluir uma reserva", async () => {
    const user = userEvent.setup();
    render(<AdminReservationCrud />);

    expect(screen.getByText("Reserva 1")).toBeInTheDocument();

    await user.click(screen.getByText("Apagar"));

    expect(screen.queryByText("Reserva 1")).toBeNull();
  });

  it("deve editar uma reserva existente", async () => {
    const user = userEvent.setup();
    render(<AdminReservationCrud />);

    await user.click(screen.getByText("Editar"));

    await user.clear(screen.getByPlaceholderText("Título"));
    await user.type(screen.getByPlaceholderText("Título"), "Reserva Editada");
    await user.click(screen.getByText("Atualizar"));

    expect(screen.getByText("Reserva Editada")).toBeInTheDocument();
  });
});

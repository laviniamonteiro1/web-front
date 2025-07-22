import { render, screen, fireEvent } from "@testing-library/react";
import ReservationsPage from "../../pages/Reservations";
import { BrowserRouter } from "react-router-dom";
import * as originalReactRouterDom from "react-router-dom";
import { vi } from "vitest";

const navigate = vi.fn();
vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal<typeof originalReactRouterDom>();
  return {
    ...actual,
    useNavigate: () => navigate,
  };
});

describe("ReservationsPage", () => {
  it("deve renderizar todos os componentes da página", async () => {
    render(
      <BrowserRouter>
        <ReservationsPage />
      </BrowserRouter>
    );

    expect(screen.getByAltText("Logo")).toBeInTheDocument();
    expect(screen.getByText("Minhas Reservas")).toBeInTheDocument();
    expect(screen.getByText("RoyalStay")).toBeInTheDocument();
    expect(screen.getByText("Ir para a Administração")).toBeInTheDocument();
  });

  it("deve redirecionar para a página de administração quando o botão for clicado", () => {
    render(
      <BrowserRouter>
        <ReservationsPage />
      </BrowserRouter>
    );

    fireEvent.click(screen.getByText("Ir para a Administração"));

    expect(navigate).toHaveBeenCalledWith("/admin");
  });
});
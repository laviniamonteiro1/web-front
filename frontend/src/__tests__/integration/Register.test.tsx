import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { Register } from "../../pages/Register";
import { BrowserRouter as Router } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { vi, type Mock } from "vitest";
import { mockRegisterData } from "../../mocks/RegisterMock";

const mockRegister = vi.fn();

vi.mock("../../hooks/useAuth", () => ({
  useAuth: vi.fn(),
}));

vi.mock("../../components/NavbarWithoutAvatar", () => ({
  NavbarSemAvatar: () => <div>NavbarSemAvatar</div>,
}));

vi.mock("../../components/Footer", () => ({
  Footer: () => <div>Footer</div>,
}));

describe("Register", () => {
  beforeEach(() => {
    (useAuth as Mock).mockReturnValue({ register: mockRegister });
    vi.clearAllMocks();
  });

  const renderRegisterPage = () => {
    render(
      <Router>
        <Register />
      </Router>
    );
  };

  it("deve renderizar todos os componentes da página", () => {
    renderRegisterPage();

    expect(screen.getByText("NavbarSemAvatar")).toBeInTheDocument();
    expect(screen.getByText("Footer")).toBeInTheDocument();
    expect(screen.getByText("Já possui cadastro?")).toBeInTheDocument();
    expect(screen.getByText("Entrar")).toBeInTheDocument();
    expect(screen.getByLabelText("Nome completo")).toBeInTheDocument();
    expect(screen.getByLabelText("E-mail")).toBeInTheDocument();
    expect(screen.getByLabelText("Senha")).toBeInTheDocument();
    expect(screen.getByLabelText("Confirmar senha")).toBeInTheDocument();
  });

  it("deve chamar o método de registro quando o formulário for preenchido corretamente", async () => {
    mockRegister.mockResolvedValue(undefined);

    renderRegisterPage();

    fireEvent.change(screen.getByLabelText("Nome completo"), { target: { value: mockRegisterData.name } });
    fireEvent.change(screen.getByLabelText("E-mail"), { target: { value: mockRegisterData.email } });
    fireEvent.change(screen.getByLabelText("Senha"), { target: { value: mockRegisterData.password } });
    fireEvent.change(screen.getByLabelText("Confirmar senha"), { target: { value: mockRegisterData.confirmPassword } });

    fireEvent.submit(screen.getByText("Registrar"));

    await waitFor(() => {
      expect(mockRegister).toHaveBeenCalledWith(
        mockRegisterData.name,
        mockRegisterData.email,
        mockRegisterData.password
      );
    });
  });

  it("deve redirecionar para o login quando o link de login for clicado", () => {
    renderRegisterPage();

    fireEvent.click(screen.getByText("Entrar"));

    expect(window.location.pathname).toBe("/login");
  });
});

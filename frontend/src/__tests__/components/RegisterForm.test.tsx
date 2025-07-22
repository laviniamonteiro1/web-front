import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { RegisterForm } from "../../components/RegisterForm";
import { BrowserRouter as Router } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import { vi, type Mock } from "vitest";
import { mockRegisterData } from "../../mocks/RegisterMock";

const mockRegister = vi.fn();
const navigate = vi.fn();

vi.mock("../../hooks/useAuth", () => ({
  useAuth: vi.fn(),
}));

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof import("react-router-dom")>("react-router-dom");
  return {
    ...actual,
    useNavigate: () => navigate,
  };
});

describe("RegisterForm", () => {
  beforeEach(() => {
    (useAuth as Mock).mockReturnValue({ register: mockRegister });
    vi.clearAllMocks();
  });

  const renderRegisterForm = () => {
    render(
      <Router>
        <RegisterForm />
      </Router>
    );
  };

  it("deve renderizar todos os campos do formulário", () => {
    renderRegisterForm();

    fireEvent.change(screen.getByLabelText("Nome completo"), { target: { value: mockRegisterData.name } });
    fireEvent.change(screen.getByLabelText("E-mail"), { target: { value: mockRegisterData.email } });
    fireEvent.change(screen.getByLabelText("Senha"), { target: { value: mockRegisterData.password } });
    fireEvent.change(screen.getByLabelText("Confirmar senha"), { target: { value: mockRegisterData.confirmPassword } });

    expect(screen.getByText("CADASTRO")).toBeInTheDocument();
    expect(screen.getByLabelText("Nome completo")).toHaveValue(mockRegisterData.name);
    expect(screen.getByLabelText("E-mail")).toHaveValue(mockRegisterData.email);
    expect(screen.getByLabelText("Senha")).toHaveValue(mockRegisterData.password);
    expect(screen.getByLabelText("Confirmar senha")).toHaveValue(mockRegisterData.confirmPassword);
  });

  it("deve mostrar erro se campos obrigatórios estiverem vazios", async () => {
    renderRegisterForm();

    fireEvent.change(screen.getByLabelText("Nome completo"), { target: { value: "" } });
    fireEvent.change(screen.getByLabelText("E-mail"), { target: { value: "" } });
    fireEvent.change(screen.getByLabelText("Senha"), { target: { value: "" } });
    fireEvent.change(screen.getByLabelText("Confirmar senha"), { target: { value: "" } });

    const form = screen.getByText("CADASTRO").closest("form");
    fireEvent.submit(form!);

    expect(await screen.findByText("Preencha todos os campos obrigatórios.")).toBeInTheDocument();
    expect(mockRegister).not.toHaveBeenCalled();
  });

  it("deve mostrar erro se as senhas forem diferentes", async () => {
    renderRegisterForm();

    fireEvent.change(screen.getByLabelText("Nome completo"), { target: { value: "Fulano Teste" } });
    fireEvent.change(screen.getByLabelText("E-mail"), { target: { value: "fulano.teste@example.com" } });
    fireEvent.change(screen.getByLabelText("Senha"), { target: { value: "123456" } });
    fireEvent.change(screen.getByLabelText("Confirmar senha"), { target: { value: "654321" } });

    fireEvent.submit(screen.getByText("CADASTRO").closest("form")!);

    expect(await screen.findByText("As senhas não coincidem.")).toBeInTheDocument();
    expect(mockRegister).not.toHaveBeenCalled();
  });

  it("deve registrar e redirecionar para /panel se tudo estiver correto", async () => {
    mockRegister.mockResolvedValue(undefined);

    renderRegisterForm();

    fireEvent.change(screen.getByLabelText("Nome completo"), { target: { value: mockRegisterData.name } });
    fireEvent.change(screen.getByLabelText("E-mail"), { target: { value: mockRegisterData.email } });
    fireEvent.change(screen.getByLabelText("Senha"), { target: { value: mockRegisterData.password } });
    fireEvent.change(screen.getByLabelText("Confirmar senha"), { target: { value: mockRegisterData.confirmPassword } });

    fireEvent.submit(screen.getByText("CADASTRO").closest("form")!);

    await waitFor(() => {
      expect(mockRegister).toHaveBeenCalledWith(
        mockRegisterData.name,
        mockRegisterData.email,
        mockRegisterData.password
      );
      expect(navigate).toHaveBeenCalledWith("/panel");
    });
  });

  it("deve exibir erro se o registro falhar", async () => {
    mockRegister.mockRejectedValue(new Error("Erro no servidor"));

    renderRegisterForm();

    fireEvent.change(screen.getByLabelText("Nome completo"), { target: { value: mockRegisterData.name } });
    fireEvent.change(screen.getByLabelText("E-mail"), { target: { value: mockRegisterData.email } });
    fireEvent.change(screen.getByLabelText("Senha"), { target: { value: mockRegisterData.password } });
    fireEvent.change(screen.getByLabelText("Confirmar senha"), { target: { value: mockRegisterData.confirmPassword } });

    fireEvent.submit(screen.getByText("CADASTRO").closest("form")!);

    expect(await screen.findByText("Erro no servidor")).toBeInTheDocument();
    expect(navigate).not.toHaveBeenCalled();
  });
});

import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { LoginForm } from "../../components/LoginForm";
import { BrowserRouter as Router } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import { vi, type Mock } from 'vitest';
import type * as ReactRouterDom from "react-router-dom";

const navigate = vi.fn();

vi.mock("@/hooks/useAuth", () => ({
  useAuth: vi.fn()
}));

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof ReactRouterDom>("react-router-dom");
  return {
    ...actual,
    useNavigate: () => navigate,
  };
});

describe("LoginForm", () => {
  it("deve redirecionar para o painel após login bem-sucedido", async () => {
    const mockLogin = vi.fn().mockResolvedValue(undefined);
    (useAuth as Mock).mockReturnValue({ login: mockLogin });

    render(
      <Router>
        <LoginForm />
      </Router>
    );

    fireEvent.change(screen.getByLabelText("E-mail"), { target: { value: "test@example.com" } });
    fireEvent.change(screen.getByLabelText("Senha"), { target: { value: "password123" } });
    fireEvent.click(screen.getByText("Entrar"));

    await waitFor(() => expect(navigate).toHaveBeenCalledWith("/panel"));
  });
});

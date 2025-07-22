import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { App } from "../App";

vi.mock("../styles/GlobalStyles", () => ({
  GlobalStyle: () => <div data-testid="global-style">Global Styles Mock</div>,
}));

vi.mock("../contexts/AuthContext", () => ({
  AuthProvider: ({ children }: { children: React.ReactNode }) => <div data-testid="auth-provider">{children}</div>,
}));

vi.mock("../contexts/BedroomContext", () => ({
  BedroomProvider: ({ children }: { children: React.ReactNode }) => <div data-testid="bedroom-provider">{children}</div>,
}));

describe("App", () => {
  it("deve renderizar todos os componentes principais e provedores corretamente aninhados", () => {
    render(<App />);  // Remover o BrowserRouter aqui, pois o App já o contém

    // Verifica se o estilo global foi aplicado
    expect(screen.getByTestId("global-style")).toBeInTheDocument();

    // Verifica se o AuthProvider foi renderizado
    const authProvider = screen.getByTestId("auth-provider");
    expect(authProvider).toBeInTheDocument();

    // Verifica se o BedroomProvider foi renderizado
    const bedroomProvider = screen.getByTestId("bedroom-provider");
    expect(bedroomProvider).toBeInTheDocument();

    // Verifica se o RouteWeb foi renderizado dentro dos provedores
    const routeWeb = screen.getByTestId("route-web");
    expect(routeWeb).toBeInTheDocument();

    // Verifica a hierarquia de componentes
    expect(bedroomProvider).toContainElement(routeWeb);
    expect(authProvider).toContainElement(bedroomProvider);
  });
});

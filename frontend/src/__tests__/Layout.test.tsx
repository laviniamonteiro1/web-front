import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import { Layout } from "../pages/Layout";

import * as originalReactRouterDom from "react-router-dom";

vi.mock("../components/NavbarWithoutAvatar", () => ({
  NavbarSemAvatar: () => <div data-testid="navbar-sem-avatar"></div>,
}));

vi.mock("../components/Footer", () => ({
  Footer: () => <div data-testid="footer"></div>,
}));

vi.mock("react-router-dom", async (importOriginal) => {
  const actual = await importOriginal<typeof originalReactRouterDom>();
  return {
    ...actual,
    Outlet: () => <div data-testid="outlet-mock"></div>,
  };
});

describe("Layout", () => {
  it("deve renderizar NavbarSemAvatar, Outlet e Footer", () => {
    render(<Layout />);

    expect(screen.getByTestId("navbar-sem-avatar")).toBeInTheDocument();
    expect(screen.getByTestId("outlet-mock")).toBeInTheDocument();
    expect(screen.getByTestId("footer")).toBeInTheDocument();
  });
});
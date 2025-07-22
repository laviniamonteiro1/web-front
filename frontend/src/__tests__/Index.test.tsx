import { render, screen } from "@testing-library/react";
import { vi } from "vitest";
import Index from "../pages/Index";

vi.mock("../components/BedroomCard", () => ({
  BedroomCard: () => <div data-testid="bedroom-card-mock">BedroomCard Mock</div>,
}));

describe("Index Page", () => {
  it("deve renderizar o título principal e o BedroomCard", () => {
    render(<Index />);

    expect(screen.getByRole("heading", { name: /Reservas Famosas/i })).toBeInTheDocument();
    expect(screen.getByTestId("bedroom-card-mock")).toBeInTheDocument();
  });
});
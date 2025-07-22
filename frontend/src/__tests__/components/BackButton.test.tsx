import { render, screen, fireEvent } from "@testing-library/react";
import { vi } from "vitest";
import { BackButton } from "../../components/BackButton";
import * as useGoBackHook from "../../hooks/useGoBack";
import { MemoryRouter } from "react-router-dom";

describe("BackButton", () => {
  it("deve renderizar o botão com o texto '← Voltar'", () => {
    render(
      <MemoryRouter>
        <BackButton />
      </MemoryRouter>
    );
    const button = screen.getByRole("button", { name: /← Voltar/i });
    expect(button).toBeInTheDocument();
  });

  it("deve chamar a função goBack quando o botão for clicado", () => {
    const mockGoBack = vi.fn();
    vi.spyOn(useGoBackHook, "useGoBack").mockReturnValue(mockGoBack);

    render(
      <MemoryRouter>
        <BackButton />
      </MemoryRouter>
    );

    const button = screen.getByRole("button", { name: /← Voltar/i });
    fireEvent.click(button);

    expect(mockGoBack).toHaveBeenCalledTimes(1);
  });
});

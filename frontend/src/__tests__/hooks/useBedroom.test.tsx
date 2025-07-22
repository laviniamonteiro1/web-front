import { renderHook, act } from "@testing-library/react";
import { useBedroom } from "@/hooks/useBedroom";
import { BedroomProvider } from "@/contexts/BedroomContext";
import { vi } from "vitest";

vi.useFakeTimers();

describe("useBedroom hook", () => {
  it("retorna os dados do contexto com base no índice do array", () => {
    const { result } = renderHook(() => useBedroom(), {
      wrapper: BedroomProvider,
    });

    act(() => {
      vi.advanceTimersByTime(500);
    });

    expect(result.current.quartos.length).toBe(6);

    const quarto = result.current.getQuartoById("0");

    expect(quarto).toBeDefined();
    expect(quarto?.title).toBe("Suíte Refúgio Tropical");
  });
});

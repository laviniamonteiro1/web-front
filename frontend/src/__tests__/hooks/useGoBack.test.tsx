import { renderHook } from "@testing-library/react";
import { useGoBack } from "@/hooks/useGoBack";
import { MemoryRouter } from "react-router-dom";
import { vi, type Mock } from "vitest";
import * as router from "react-router-dom";

vi.mock("react-router-dom", async () => {
  const actual = await vi.importActual<typeof router>("react-router-dom");
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

describe("useGoBack", () => {
  it("chama navigate(-1) quando executado", () => {
    const navigateMock = vi.fn();
    (router.useNavigate as unknown as Mock).mockReturnValue(navigateMock);

    const { result } = renderHook(() => useGoBack(), {
      wrapper: MemoryRouter,
    });

    result.current();

    expect(navigateMock).toHaveBeenCalledWith(-1);
    expect(navigateMock).toHaveBeenCalledTimes(1);
  });
});
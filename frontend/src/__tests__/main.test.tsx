import { vi } from "vitest";
import React from "react";
import { App } from "../App";

const mockRender = vi.fn();
const mockCreateRoot = vi.fn(() => ({
  render: mockRender,
}));

vi.mock("react-dom/client", () => ({
  default: {
    createRoot: mockCreateRoot,
  },
}));

vi.mock("../App", () => ({
  App: () => <div data-testid="mock-app-component"></div>,
}));

describe("main.tsx", () => {
  let rootElement: HTMLElement | null;

  beforeEach(() => {
    rootElement = document.createElement("div");
    rootElement.id = "root";
    document.body.appendChild(rootElement);

    vi.clearAllMocks();
  });

  afterEach(() => {
    if (rootElement) {
      document.body.removeChild(rootElement);
    }
  });

  it("deve renderizar o componente App dentro de um React.StrictMode", async () => {
    await import("../main");

    expect(mockCreateRoot).toHaveBeenCalledWith(rootElement);

    expect(mockRender).toHaveBeenCalledTimes(1);

    const renderCallArgument = mockRender.mock.calls[0][0];
    expect(renderCallArgument.type).toBe(React.StrictMode);
    expect(renderCallArgument.props.children.type).toBe(App);
  });
});
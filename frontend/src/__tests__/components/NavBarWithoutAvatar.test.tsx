import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { NavbarSemAvatar } from "../../components/NavbarWithoutAvatar";

describe("NavbarSemAvatar", () => {
  it("deve renderizar o logo e o avatar genérico", () => {
    render(
      <Router>
        <NavbarSemAvatar />
      </Router>
    );

    const logoImg = screen.getByAltText("Logo");
    const avatarImg = screen.getByAltText("Menu");

    expect(logoImg).toBeInTheDocument();
    expect(avatarImg).toBeInTheDocument();
  });

  it("deve conter o menu dropdown com opções ENTRAR e CADASTRAR", () => {
    render(
      <Router>
        <NavbarSemAvatar />
      </Router>
    );

    const entrarLink = screen.getByText("ENTRAR");
    const cadastrarLink = screen.getByText("CADASTRAR");

    expect(entrarLink).toBeInTheDocument();
    expect(cadastrarLink).toBeInTheDocument();
  });

  it("deve alternar o checkbox quando clicado", () => {
    render(
      <Router>
        <NavbarSemAvatar />
      </Router>
    );

    const checkbox = screen.getByRole("checkbox", { hidden: true });
    const avatarImg = screen.getByAltText("Menu");

    expect(checkbox).not.toBeChecked();
    fireEvent.click(avatarImg);
    expect(checkbox).toBeChecked();
  });
});

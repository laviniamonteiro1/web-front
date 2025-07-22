import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";
import { NavbarComAvatar } from "../../components/NavbarWithAvatar";

describe("NavbarComAvatar", () => {
  it("deve renderizar o logo e o avatar", () => {
    render(
      <Router>
        <NavbarComAvatar />
      </Router>
    );

    const logoImg = screen.getByAltText("Logo");
    const avatarImg = screen.getByAltText("Menu");

    expect(logoImg).toBeInTheDocument();
    expect(avatarImg).toBeInTheDocument();
  });

  it("deve conter o menu dropdown com opções PERFIL e SAIR", () => {
    render(
      <Router>
        <NavbarComAvatar />
      </Router>
    );

    const perfilLink = screen.getByText("PERFIL");
    const sairLink = screen.getByText("SAIR");

    expect(perfilLink).toBeInTheDocument();
    expect(sairLink).toBeInTheDocument();
  });

  it("deve alternar o checkbox quando clicado", () => {
    render(
      <Router>
        <NavbarComAvatar />
      </Router>
    );

    const checkbox = screen.getByRole("checkbox", { hidden: true });
    const avatarImg = screen.getByAltText("Menu");

    expect(checkbox).not.toBeChecked();
    fireEvent.click(avatarImg);
    expect(checkbox).toBeChecked();
  });
});

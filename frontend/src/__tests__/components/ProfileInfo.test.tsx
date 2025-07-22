import { render, screen } from "@testing-library/react";
import ProfileInfo from "../../components/ProfileInfo";
import { ProfileInfoMock } from "@/mocks/ProfileInfoMock";

describe("ProfileInfo", () => {
  it("deve renderizar todas as informações do perfil", () => {
    render(<ProfileInfo />);

    expect(screen.getByText(`Nome Completo:`)).toBeInTheDocument();
    expect(screen.getByText(ProfileInfoMock.fullName)).toBeInTheDocument();

    expect(screen.getByText(`E-mail:`)).toBeInTheDocument();
    expect(screen.getByText(ProfileInfoMock.email)).toBeInTheDocument();

    expect(screen.getByText(`Data de Nascimento:`)).toBeInTheDocument();
    expect(screen.getByText(ProfileInfoMock.birthDate)).toBeInTheDocument();

    expect(screen.getByText(`Telefone:`)).toBeInTheDocument();
    expect(screen.getByText(ProfileInfoMock.phone)).toBeInTheDocument();

    expect(screen.getByText(`Documento:`)).toBeInTheDocument();
    expect(screen.getByText(ProfileInfoMock.document)).toBeInTheDocument();

    expect(screen.getByText(`Endereço:`)).toBeInTheDocument();
    expect(screen.getByText(ProfileInfoMock.address)).toBeInTheDocument();
  });
});

import { render, screen } from "@testing-library/react";
import { BedroomCard } from "../../components/BedroomCard";
import { quartos } from "@/mocks/BedroomMock";
import { BrowserRouter as Router } from "react-router-dom";

describe("BedroomCard", () => {
  it("deve renderizar todos os quartos", () => {
    render(
      <Router>
        <BedroomCard />
      </Router>
    );

    const links = screen.getAllByRole('link');

    quartos.forEach((quarto, index) => {
      const link = links[index];
      expect(link).toHaveAttribute('href', `/quarto/${index}`);
      expect(screen.getByAltText(`Imagem da ${quarto.title}`)).toBeInTheDocument();
      expect(screen.getByText(quarto.title)).toBeInTheDocument();
      expect(screen.getByText(quarto.description)).toBeInTheDocument();
    });
  });
});

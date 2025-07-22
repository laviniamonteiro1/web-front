import { render, screen } from "@testing-library/react";
import { Footer } from "../../components/Footer";
import { BrowserRouter as Router } from "react-router-dom";

describe("Footer", () => {
  it("deve renderizar o texto RoyalStay e o copyright", () => {
    render(
      <Router>
        <Footer />
      </Router>
    );

    expect(screen.getByText("RoyalStay")).toBeInTheDocument();
    expect(screen.getByText("© Copyright 2025 - Lavínia - Web")).toBeInTheDocument();
  });
});

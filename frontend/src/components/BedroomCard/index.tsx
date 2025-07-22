import { Link } from "react-router-dom";
import { GridContainer, SCard } from "./styles";
import { useBedroom } from "@/hooks/useBedroom";
import { useEffect } from "react";

export function BedroomCard() {
  const { quartos, isLoading } = useBedroom();

  useEffect(() => {
    console.log(quartos);
  }, [quartos]);

  if (isLoading) {
    return <p>Carregando quartos...</p>;
  }

  if (!quartos || quartos.length === 0) {
    return <p>Quartos não encontrados.</p>;
  }

  const backendBaseUrl = import.meta.env.VITE_API_URL;

  return (
    <GridContainer>
      {quartos.map((quarto) => {
        const imageUrl = `${backendBaseUrl}${quarto.image}`;

        return (
          <SCard key={quarto.id}>
            <Link to={`/quarto/${quarto.id}`}>
              <article>
                <img
                  src={imageUrl}
                  alt={`Imagem da ${quarto.title}`}
                />
                <h2>{quarto.title}</h2>
                <p>{quarto.description}</p>
              </article>
            </Link>
          </SCard>
        );
      })}
    </GridContainer>
  );
}
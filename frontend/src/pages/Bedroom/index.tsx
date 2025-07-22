import { useParams } from "react-router-dom";
import { useBedroom } from "@/hooks/useBedroom";
import { BackButton } from "../../components/BackButton";
import {
  Container,
  Content,
  Image,
  Title,
  Description,
  Price,
} from "./styles";

export default function Bedroom() {
  const { id } = useParams();
  const { getQuartoById, isLoading } = useBedroom();
  const quarto = getQuartoById(id || "");

  // 1. Acesse a variável de ambiente do Vite
  const backendBaseUrl = import.meta.env.VITE_API_URL;

  if (isLoading) {
    return (
      <Container>
        <Content>
          <p>Carregando quarto...</p>
        </Content>
      </Container>
    );
  }

  if (!quarto) {
    return (
      <Container>
        <Content>
          <BackButton />
          <p>Quarto não encontrado.</p>
        </Content>
      </Container>
    );
  }

  // 2. Construa a URL completa da imagem
  // quarto.image virá do backend como "/static/images/quartoX.png"
  const imageUrl = `${backendBaseUrl}${quarto.image}`;

  // Opcional: Para depuração, você pode logar a URL final
  console.log("URL da imagem do quarto específico:", imageUrl);


  return (
    <Container>
      <Content>
        <BackButton />
        {/* 3. Use a URL construída no atributo src */}
        <Image 
          src={imageUrl} 
          alt={quarto.title} 
          // Opcional: Adicione um onError para capturar falhas de carregamento
          onError={(e) => { 
              console.error('Erro ao carregar imagem do quarto específico:', imageUrl, e);
              // e.target.src = '/caminho/para/placeholder.png'; // Exemplo: uma imagem de placeholder
          }}
        />
        <Title>{quarto.title}</Title>
        <Description>{quarto.descriptionLong}</Description>
        <Price>Valor da pernoite: {quarto.price}</Price>
      </Content>
    </Container>
  );
}
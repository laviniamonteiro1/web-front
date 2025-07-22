import type { BedroomProps } from "../types/BedroomType";

import quarto1 from "@/assets/images/bedrooms/quarto1.png";
import quarto2 from "@/assets/images/bedrooms/quarto2.png";
import quarto3 from "@/assets/images/bedrooms/quarto3.png";
import quarto4 from "@/assets/images/bedrooms/quarto4.png";
import quarto5 from "@/assets/images/bedrooms/quarto5.png";
import quarto6 from "@/assets/images/bedrooms/quarto6.png";

export const quartos: BedroomProps[] = [
  {
    id: "1",
    title: "Suíte Refúgio Tropical",
    description: "Charmosa suíte com decoração rústico-contemporânea.",
    descriptionLong: "Um espaço imerso na natureza com decoração rústica e iluminação aconchegante. Ideal para casais em busca de tranquilidade e conexão com o verde.",
    image: quarto1,
    price: "R$ 280,00",
  },
  {
    id: "2",
    title: "Suíte Horizonte Azul",
    description: "Suíte com duas camas e decoração leve.",
    descriptionLong: "Decoração leve em tons de azul e branco, com duas camas de solteiro e vista para o jardim interno. Perfeita para amigos ou irmãos viajando juntos.",
    image: quarto2,
    price: "R$ 240,00",
  },
  {
    id: "3",
    title: "Suíte Elegância Moderna",
    description: "Estilo clean, conforto e sofisticação.",
    descriptionLong: "Ambientes claros, mobiliário contemporâneo e tecnologia integrada. Oferece duas camas de solteiro e estação de trabalho com cadeira ergonômica.",
    image: quarto3,
    price: "R$ 260,00",
  },
  {
    id: "4",
    title: "Suíte Luxo Amazônico",
    description: "Varanda com rede e vista inspiradora.",
    descriptionLong: "Ampla suíte com varanda privativa, rede, e detalhes inspirados na floresta. Inclui cama king size e aromatização natural.",
    image: quarto4,
    price: "R$ 320,00",
  },
  {
    id: "5",
    title: "Suíte Minimalista",
    description: "Beleza simples, ambiente leve.",
    descriptionLong: "Design limpo, funcional e sereno. Cama de casal com iluminação embutida, banheiro com luz natural e poucos objetos decorativos para um ambiente leve.",
    image: quarto5,
    price: "R$ 230,00",
  },
  {
    id: "6",
    title: "Suíte Rústica Colonial",
    description: "Detalhes clássicos e madeira de demolição.",
    descriptionLong: "Madeira de demolição, piso em cerâmica e mobiliário de época. Acomoda casais ou até três pessoas com charme e conforto.",
    image: quarto6,
    price: "R$ 250,00",
  
  },
];

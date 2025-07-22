// src/contexts/BedroomContext.tsx

import { createContext, useState, useEffect, type ReactNode } from "react";
import type { BedroomProps } from "../types/BedroomType";
import  apiBedroom  from "../services/api/bedrooms"; // Certifique-se que o caminho está correto

export interface BedroomContextType {
  quartos: BedroomProps[];
  isLoading: boolean;
  getQuartoById: (id: string) => BedroomProps | undefined;
  refreshBedrooms: () => Promise<void>;
}

export const BedroomContext = createContext<BedroomContextType>({
  quartos: [],
  isLoading: true,
  getQuartoById: () => undefined,
  refreshBedrooms: async () => {},
});

export const BedroomProvider = ({ children }: { children: ReactNode }) => {
  const [quartos, setQuartos] = useState<BedroomProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  const loadBedrooms = async () => {
    try {
      setIsLoading(true);
      const response = await apiBedroom.getAll();

      // **** ADICIONE ESTES CONSOLE.LOGS AQUI ****
      console.log("Resposta completa da API (objeto):", response);
      console.log("Propriedade 'bedrooms' na resposta:", response.bedrooms); // Isso deve ser o array de quartos

      // Esta linha já deve estar assim:
      setQuartos(response.bedrooms); 

    } catch (error) {
      console.error("Erro ao carregar quartos:", error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    loadBedrooms();
  }, []);

  const getQuartoById = (id: string) => {
    return quartos.find((quarto) => quarto.id === id);
  };

  const refreshBedrooms = async () => {
    await loadBedrooms();
  };

  return (
    <BedroomContext.Provider value={{ quartos, isLoading, getQuartoById, refreshBedrooms }}>
      {children}
    </BedroomContext.Provider>
  );
};
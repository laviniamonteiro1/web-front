import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Bedroom from '@/pages/Bedroom';
import { BedroomContext } from '@/contexts/BedroomContext';
import type { BedroomContextType } from '@/contexts/BedroomContext';

const mockQuarto = {
  id: '1',
  title: 'Suíte Refúgio Tropical',
  description: 'Charmosa suíte com decoração rústico-contemporânea.',
  descriptionLong:
    'Um espaço imerso na natureza com decoração rústica e iluminação aconchegante. Ideal para casais em busca de tranquilidade e conexão com o verde.',
  image: '@/assets/images/bedrooms/quarto1.png',
  price: 'R$ 280,00',
};

const renderWithContext = (contextValue: BedroomContextType, route: string = '/quarto/1') => {
  render(
    <BedroomContext.Provider value={contextValue}>
      <MemoryRouter initialEntries={[route]}>
        <Routes>
          <Route path="/quarto/:id" element={<Bedroom />} />
        </Routes>
      </MemoryRouter>
    </BedroomContext.Provider>
  );
};

describe('Bedroom page', () => {
  it('renderiza mensagem de carregamento', () => {
    renderWithContext({
      quartos: [],
      isLoading: true,
      getQuartoById: () => undefined,
    });

    expect(screen.getByText(/Carregando quarto/i)).toBeInTheDocument();
  });

  it('renderiza mensagem de não encontrado', () => {
    renderWithContext({
      quartos: [],
      isLoading: false,
      getQuartoById: () => undefined,
    });

    expect(screen.getByText(/Quarto não encontrado/i)).toBeInTheDocument();
  });

  it('renderiza os dados do quarto', () => {
    renderWithContext({
      quartos: [mockQuarto],
      isLoading: false,
      getQuartoById: () => mockQuarto,
    });

    expect(screen.getByText(mockQuarto.title)).toBeInTheDocument();
    expect(screen.getByText(mockQuarto.descriptionLong)).toBeInTheDocument();
    expect(screen.getByText(`Valor da pernoite: ${mockQuarto.price}`)).toBeInTheDocument();
    expect(screen.getByAltText(mockQuarto.title)).toBeInTheDocument();
  });
});

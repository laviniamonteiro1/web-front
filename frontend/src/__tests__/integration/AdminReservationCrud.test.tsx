import { render, screen } from '@testing-library/react';
import { describe, it, expect} from 'vitest';
import { MemoryRouter } from 'react-router-dom';
import AdminPage from '@/pages/AdminReservationCrud';

describe('AdminPage', () => {
  it('renderiza título e área administrativa', () => {
    render(
      <MemoryRouter>
        <AdminPage />
      </MemoryRouter>
    );

    expect(screen.getByText('Área Administrativa - Gerenciamento de Reservas')).toBeInTheDocument();
    expect(screen.getByText('Administração de Reservas')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /adicionar/i })).toBeInTheDocument();
  });
});
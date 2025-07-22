import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import PanelPage from '@/pages/Panel';

vi.mock('@/hooks/useAuth', () => ({
  useAuth: () => ({ login: vi.fn() }),
}));

vi.mock('@/components/NavbarWithAvatar', () => ({
  NavbarComAvatar: () => <nav>Navbar</nav>,
}));

vi.mock('@/components/Footer', () => ({
  Footer: () => <footer>Footer</footer>,
}));

vi.mock('@/components/ProfileInfo', () => ({
  default: () => (
    <div className="profile-details">
      <ul>
        <li>
          <strong>Nome Completo:</strong> Fulana da Silva
        </li>
        <li>
          <strong>E-mail:</strong> fulana@email.com
        </li>
      </ul>
    </div>
  ),
}));

vi.mock('react-router-dom', async () => {
  const actual = await vi.importActual<typeof import('react-router-dom')>('react-router-dom');
  return {
    ...actual,
    useNavigate: vi.fn(),
  };
});

import { useNavigate } from 'react-router-dom';

describe('PanelPage', () => {
  it('renderiza a página com os elementos esperados', () => {
    const { container } = render(
      <MemoryRouter>
        <PanelPage />
      </MemoryRouter>
    );

    expect(screen.getByText(/olá, fulana da silva/i)).toBeInTheDocument();
    expect(screen.getByText(/preparado/i)).toBeInTheDocument();
    expect(screen.getByText(/nome completo:/i)).toBeInTheDocument();
    expect(screen.getByText(/e-mail:/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /ver minhas reservas/i })).toBeInTheDocument();

    const navbar = container.querySelector('nav');
    expect(navbar).toBeInTheDocument();

    const footer = container.querySelector('footer');
    expect(footer).toBeInTheDocument();
  });

  it('navega para /reservas ao clicar no botão', () => {
    const navigateMock = vi.fn();
    vi.mocked(useNavigate).mockReturnValue(navigateMock);

    render(
      <MemoryRouter>
        <PanelPage />
      </MemoryRouter>
    );

    const button = screen.getByRole('button', { name: /ver minhas reservas/i });
    fireEvent.click(button);

    expect(navigateMock).toHaveBeenCalledWith('/reservas');
  });
});

import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '@/pages/Login';

vi.mock('@/hooks/useAuth', () => ({
  useAuth: () => ({ login: vi.fn() })
}));

describe('Login page', () => {
  it('renderiza o formulário de login com campos e botão', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: /entrar/i })).toBeInTheDocument();
    expect(screen.getByLabelText(/e-mail/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/senha/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /entrar/i })).toBeInTheDocument();
    expect(screen.getByText(/cadastre-se aqui/i)).toBeInTheDocument();
  });
});

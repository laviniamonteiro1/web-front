import React from 'react';
import { useNavigate } from 'react-router-dom';
import ProfileInfo from '@/components/ProfileInfo';
import { NavbarComAvatar } from '@/components/NavbarWithAvatar';
import { Footer } from '@/components/Footer';
import { Container, UserHeader, StatusBadge, Section, Button } from './styles';
import firstGuest from '@/assets/images/avatars/first_guest.png'
import { useAuth } from '@/contexts/AuthContext'; 

const PanelPage: React.FC = () => {
  const navigate = useNavigate();
  const { currentUser, isLoading } = useAuth(); 

  const irParaReservas = () => {
    navigate('/reservas'); 
  };

  if (isLoading) {
    return <p>Carregando informações do usuário...</p>;
  }

  if (!currentUser) {
    navigate('/login'); 
    return null; 
  }

  return (
    <Container>
      <NavbarComAvatar />

      <UserHeader>
        <div data-role="user-info">
          <img src={firstGuest} alt={`Avatar de ${currentUser.name}`} data-role="user-avatar" />
          <div data-role="user-text">
            <strong>Olá, {currentUser.name}</strong> 
            <p>Preparado(a) para sua própria viagem?</p>
          </div>
        </div>
        <StatusBadge>Ativo</StatusBadge>
      </UserHeader>

      <Section>
        <ProfileInfo /> 
        <div style={{ marginTop: ' 5 rem' }}>
          <Button onClick={irParaReservas}>Ver Minhas Reservas</Button>
        </div>
      </Section>

      <Footer />
    </Container>
  );
};

export default PanelPage;
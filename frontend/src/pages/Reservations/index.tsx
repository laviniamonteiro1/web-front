import React from 'react';
import { useNavigate } from 'react-router-dom';
import { NavbarComAvatar } from '@/components/NavbarWithAvatar';
import { Footer } from '@/components/Footer';
import ReservationComponent from '@/components/Reservation';
import { Container, Button } from './styles';

const ReservationsPage: React.FC = () => {
  const navigate = useNavigate();

  const handleAdminRedirect = () => {
    navigate('/admin');
  };

  return (
    <Container>
      <NavbarComAvatar />
      <ReservationComponent />
      <Button onClick={handleAdminRedirect}>Ir para a Administração</Button>
      <Footer />
    </Container>
  );
};

export default ReservationsPage;

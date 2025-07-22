import React, { useContext } from 'react';
import { ReservationContext } from '@/contexts/ReservationContext';
import { Container, Title, ReservationList, ReservationItem, StatusBadge } from './styles';

const ReservationComponent: React.FC = () => {
  const { reservations, isLoading } = useContext(ReservationContext);

  if (isLoading) {
    return (
      <Container>
        <Title>Minhas Reservas</Title>
        <p>Carregando reservas...</p>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Minhas Reservas</Title>
      <ReservationList>
        {reservations.map((reservation) => (
          <ReservationItem key={reservation.id}>
            <h3>{reservation.title}</h3>
            <p><strong>Endereço:</strong> {reservation.address}</p>
            <p><strong>Check-in:</strong> {reservation.checkIn}</p>
            <p><strong>Check-out:</strong> {reservation.checkOut}</p>
            <StatusBadge status={reservation.status}>{reservation.status}</StatusBadge>
          </ReservationItem>
        ))}
      </ReservationList>
    </Container>
  );
};

export default ReservationComponent;

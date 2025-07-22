import React, { useContext } from 'react';
import { ReservationContext } from '@/contexts/ReservationContext'; 
import { Container, Title, ReservationList, ReservationItem, StatusBadge } from './styles';
import type { Reservation, ReservationStatusBackend, ReservationStatusDisplay } from '@/types/ReservationType';

const mapStatusForDisplay = (status: ReservationStatusBackend): ReservationStatusDisplay => {
    switch (status) {
        case 'confirmed': return 'Confirmado';
        case 'cancelled': return 'Cancelada';
        case 'completed': return 'Finalizado';
        default: return 'Confirmado'; 
    }
};

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

  if (reservations.length === 0) {
    return (
      <Container>
        <Title>Minhas Reservas</Title>
        <p>Nenhuma reserva encontrada. Faça uma nova reserva para começar!</p>
      </Container>
    );
  }

  return (
    <Container>
      <Title>Minhas Reservas</Title>
      <ReservationList>
        {reservations.map((reservation: Reservation) => (
          <ReservationItem key={reservation.id}>
            <h3>{reservation.title}</h3>
            <p><strong>Endereço:</strong> {reservation.address}</p>
            <p><strong>Check-in:</strong> {reservation.check_in}</p>
            <p><strong>Check-out:</strong> {reservation.check_out}</p>
            <StatusBadge status={mapStatusForDisplay(reservation.status)}>
                {mapStatusForDisplay(reservation.status)}
            </StatusBadge>
          </ReservationItem>
        ))}
      </ReservationList>
    </Container>
  );
};

export default ReservationComponent;
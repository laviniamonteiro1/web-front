import React, { useState, useContext } from 'react';
import { ReservationContext } from '@/contexts/ReservationContext';
import { Container, Title, ReservationList, ReservationItem, StatusBadge, DetailsButton, DeleteButton, CancelButton, ButtonContainer, FormContainer, SectionTitle } from './styles';

const AdminReservationCrud: React.FC = () => {
  const { 
    reservations, 
    isLoading, 
    createReservation, 
    updateReservation, 
    deleteReservation, 
    cancelReservation 
  } = useContext(ReservationContext);
  
  const [formData, setFormData] = useState({
    id: '',
    title: '',
    address: '',
    checkIn: '',
    checkOut: '',
    status: 'Confirmado' as 'Confirmado' | 'Cancelada' | 'Finalizado',
  });

  const handleAddReservation = async () => {
    try {
      await createReservation({
        title: formData.title,
        address: formData.address,
        checkIn: formData.checkIn,
        checkOut: formData.checkOut,
        status: formData.status,
      });
      setFormData({
        id: '',
        title: '',
        address: '',
        checkIn: '',
        checkOut: '',
        status: 'Confirmado',
      });
    } catch (error) {
      console.error('Erro ao adicionar reserva:', error);
    }
  };

  const handleDeleteReservation = async (id: string) => {
    try {
      await deleteReservation(id);
    } catch (error) {
      console.error('Erro ao deletar reserva:', error);
    }
  };

  const handleEditReservation = (id: string) => {
    const reservation = reservations.find((res) => res.id === id);
    if (reservation) {
      setFormData(reservation);
    }
  };

  const handleUpdateReservation = async () => {
    try {
      await updateReservation(formData.id, {
        title: formData.title,
        address: formData.address,
        checkIn: formData.checkIn,
        checkOut: formData.checkOut,
        status: formData.status,
      });
      setFormData({
        id: '',
        title: '',
        address: '',
        checkIn: '',
        checkOut: '',
        status: 'Confirmado',
      });
    } catch (error) {
      console.error('Erro ao atualizar reserva:', error);
    }
  };

  const handleCancelReservation = async (id: string) => {
    try {
      await cancelReservation(id);
    } catch (error) {
      console.error('Erro ao cancelar reserva:', error);
    }
  };

  return (
    <Container>
      <SectionTitle>Área Administrativa - Gerenciamento de Reservas</SectionTitle>
      <Title>Administração de Reservas</Title>

      <FormContainer>
        <input
          type="text"
          placeholder="Título"
          value={formData.title}
          onChange={(e) => setFormData({ ...formData, title: e.target.value })}
        />
        <input
          type="text"
          placeholder="Endereço"
          value={formData.address}
          onChange={(e) =>
            setFormData({ ...formData, address: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Check-in"
          value={formData.checkIn}
          onChange={(e) =>
            setFormData({ ...formData, checkIn: e.target.value })
          }
        />
        <input
          type="text"
          placeholder="Check-out"
          value={formData.checkOut}
          onChange={(e) =>
            setFormData({ ...formData, checkOut: e.target.value })
          }
        />
        <select
          value={formData.status}
          onChange={(e) =>
            setFormData({ ...formData, status: e.target.value as 'Confirmado' | 'Cancelada' | 'Finalizado' })
          }
        >
          <option value="Confirmado">Confirmado</option>
          <option value="Cancelada">Cancelada</option>
          <option value="Finalizado">Finalizado</option>
        </select>
        <button onClick={formData.id ? handleUpdateReservation : handleAddReservation}>
          {formData.id ? 'Atualizar' : 'Adicionar'}
        </button>
      </FormContainer>

      {isLoading ? (
        <p>Carregando reservas...</p>
      ) : (
        <ReservationList>
          {reservations.map((reservation) => (
            <ReservationItem key={reservation.id}>
              <h3>{reservation.title}</h3>
              <p><strong>Endereço:</strong> {reservation.address}</p>
              <p><strong>Check-in:</strong> {reservation.checkIn}</p>
              <p><strong>Check-out:</strong> {reservation.checkOut}</p>
              <StatusBadge status={reservation.status}>
                {reservation.status}
              </StatusBadge>
              <ButtonContainer>
                <DetailsButton onClick={() => handleEditReservation(reservation.id)}>
                  Editar
                </DetailsButton>
                {/* Botão Cancelar */}
                <CancelButton onClick={() => handleCancelReservation(reservation.id)}>
                  Cancelar
                </CancelButton>
                <DeleteButton onClick={() => handleDeleteReservation(reservation.id)}>
                  Apagar
                </DeleteButton>
              </ButtonContainer>
            </ReservationItem>
          ))}
        </ReservationList>
      )}
    </Container>
  );
};

export default AdminReservationCrud;

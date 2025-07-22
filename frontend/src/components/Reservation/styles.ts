import styled from 'styled-components';

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  background-color: #ffffff;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #003459;
  margin-bottom: 24px;
`;

export const ReservationList = styled.div`
  width: 100%;
  max-width: 800px;
`;

export const ReservationItem = styled.div`
  background-color: #f4f4f4;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;

  h3 {
    font-size: 1.5rem;
    color: #003459;
  }

  p {
    font-size: 1rem;
    margin: 5px 0;
  }
`;

export const StatusBadge = styled.span<{ status: string }>`
  padding: 8px;
  border-radius: 12px;
  font-weight: bold;
  color: white;
  background-color: ${({ status }) =>
    status === 'Confirmado' ? '#28a745' : 
    status === 'Cancelada' ? '#dc3545' : 
    status === 'Finalizado' ? '#6c757d' : '#007bff'};
  margin-top: 10px;
  display: inline-block;
`;

export const DetailsButton = styled.button`
  padding: 10px 20px;
  background-color: #003459;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;
  margin-top: 15px;

  &:hover {
    background-color: #00568a;
  }
`;

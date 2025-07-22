import styled from 'styled-components';

interface StatusBadgeProps {
  status: 'Confirmado' | 'Cancelada' | 'Finalizado';
}

export const Container = styled.div`
  padding: 20px;
`;

export const SectionTitle = styled.h2`
  font-size: 26px;
  font-weight: bold;
  color: #003459;
  margin-bottom: 20px;
  text-align: center;
`;

export const Title = styled.h3`
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
  color: #003459;
  text-align: center;
`;

export const FormContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0; /* Removido o gap para deixar os campos grudados */
  margin-bottom: 30px;
`;

export const Input = styled.input`
  padding: 10px;
  margin: 0; /* Sem margem entre os campos */
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 300px; /* Definindo uma largura fixa */
  margin-bottom: 0; /* Sem espaçamento entre os campos */
`;

export const Select = styled.select`
  padding: 10px;
  margin: 0;
  font-size: 14px;
  border-radius: 4px;
  border: 1px solid #ccc;
  width: 300px;
  margin-bottom: 0; /* Sem espaçamento entre os campos */
`;

export const ReservationList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
`;

export const ReservationItem = styled.li`
  background-color: #f1f1f1;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  min-height: 280px;
`;

export const StatusBadge = styled.span<StatusBadgeProps>`
  background-color: ${({ status }) =>
    status === 'Confirmado'
      ? 'green'
      : status === 'Cancelada'
      ? 'red'
      : 'gray'};
  color: white;
  padding: 8px 12px;
  border-radius: 20px;
  font-size: 14px;
  font-weight: bold;
  margin-bottom: 10px;
`;

export const ReservationDetails = styled.div`
  margin-bottom: 20px;
`;

export const ReservationField = styled.p`
  font-size: 16px;
  margin: 5px 0;
  color: #555;
`;

export const DetailsButton = styled.button`
  background-color: #007bff;
  color: white;
  border: none;
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

export const DeleteButton = styled.button`
  background-color: #6c757d; /* Cor cinza */
  color: black; /* Letra preta */
  border: none;
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #5a6268;
  }
`;

export const CancelButton = styled.button`
  background-color: #dc3545; /* Cor vermelha */
  color: white;
  border: none;
  padding: 6px 12px;
  font-size: 14px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #c82333;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-top: 10px;
  justify-content: flex-start;
`;

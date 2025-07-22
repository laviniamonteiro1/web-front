import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  padding-top: 0px;
`;

export const Button = styled.button`
  background-color: #003459;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  border-radius: 5px;
  cursor: pointer;
  margin: 20px 0;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

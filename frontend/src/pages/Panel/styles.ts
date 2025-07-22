import styled from 'styled-components';


export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  background-color: #f4f4f4;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #003459;
  margin-bottom: 24px;
`;

export const UserHeader = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 20px 0;
  padding: 0 20px;

  div[data-role="user-info"] {
    display: flex;
    align-items: center;
    gap: 1rem;

    img {
      width: 4rem;
      border-radius: 50%;
    }

    div[data-role="user-text"] {
      strong {
        font-weight: bold;
        font-size: 1.5rem;
      }

      p {
        font-size: 1rem;
        color: #555;
      }
    }
  }
`;

export const StatusBadge = styled.span`
  padding: 8px 16px;
  background-color: #28a745;
  color: white;
  font-weight: bold;
  border-radius: 12px;
`;

export const Section = styled.section`
  background-color: white;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  margin-bottom: 20px;
`;

export const Button = styled.button`
  padding: 10px 20px;
  background-color: #003459;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
  }
`;

export const Footer = styled.footer`
  text-align: center;
  padding: 20px;
  background-color: #003459;
  color: white;
  margin-top: auto;

  small {
    display: block;
    font-size: 0.875rem;
  }
`;

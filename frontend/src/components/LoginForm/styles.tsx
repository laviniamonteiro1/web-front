import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  background-color: #fff;
`;

export const Title = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  color: #003459;
  margin: 0;
  text-align: center;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 1rem;
  margin-bottom: 1rem;
  text-align: center;
`;

export const Form = styled.form`
  background-color: #f0f0f0;
  padding: 2.5rem;
  border-radius: 10px;
  box-shadow: 4px 4px 12px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 450px;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  align-items: stretch;
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

export const Label = styled.label`
  font-size: 1rem;
  color: #002a4d;
`;

export const Input = styled.input`
  padding: 0.75rem;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  outline: none;
`;

export const Button = styled.button`
  background-color: #003459;
  color: white;
  padding: 0.75rem;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #005380;
  }

  &:disabled {
    background-color: #7aa7c7;
    cursor: not-allowed;
  }
`;

export const RegisterLink = styled.p`
  margin-top: 1.25rem;
  font-size: 0.95rem;

  a {
    color: #d39e00;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #ffffff;
  padding: 40px 20px;
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  color: #003459;
  margin-bottom: 24px;
`;

export const ErrorMessage = styled.p`
  color: red;
  font-size: 0.9rem;
  margin-bottom: 10px;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 480px;
  background-color: #f4f4f4;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
`;

export const FormGroup = styled.div`
  margin-bottom: 16px;
`;

export const Label = styled.label`
  display: block;
  margin-bottom: 6px;
  font-weight: bold;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 6px;
  outline: none;

  &:focus {
    border-color: #003459;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #003459;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-weight: bold;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #00568a;
  }
`;

export const LoginLink = styled.p`
  margin-top: 16px;
  font-size: 0.95rem;
  color: #333;

  a {
    color: #d39e00;
    text-decoration: none;
    font-weight: bold;

    &:hover {
      text-decoration: underline;
    }
  }
`;

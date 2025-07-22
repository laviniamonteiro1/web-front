import styled from "styled-components";

export const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;
  margin-bottom: 1rem;
`;

export const StyledButton = styled.button`
  background-color: #ffffff;
  color: #264653;
  border: 2px solid #264653;
  padding: 0.5rem 1rem;
  border-radius: 6px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: #f0f0f0;
  }
`;

import styled from "styled-components";

export const Container = styled.main`
  padding: 2rem;
  display: flex;
  justify-content: center;
`;

export const Content = styled.div`
  text-align: center;
  max-width: 700px;
  width: 100%;
`;

export const Title = styled.h1`
  margin-top: 1rem;
  font-size: 2rem;
`;

export const Description = styled.p`
  margin: 1.5rem auto;
  font-size: 1.1rem;
  line-height: 1.6;
`;

export const Price = styled.p`
  font-size: 1.2rem;
  font-weight: bold;
  color: #264653;
`;

export const Image = styled.img`
  width: 100%;
  height: auto;
  margin-top: 1rem;
  border-radius: 8px;
`;

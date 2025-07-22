import styled from "styled-components";

export const SFooter = styled.footer`
  width: 100%;
  background-color: #003459;
  padding: 1rem 8.5rem;

  aside {
    color: #eaeaea;
    text-align: center;
    font-size: 1.25rem;
    display: block;
  }

  @media (width < 1400px) {
    nav ul {
      flex-direction: column;
      gap: 1rem;
    }
  }
`;
import styled from "styled-components";

export const GridContainer = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
  width: 100vw;
  margin: 0;
  padding: 2rem;
  gap: 2rem;
  box-sizing: border-box;
  list-style: none;
  overflow: auto;
`;

export const SCard = styled.li`
  background-color: #eaeaea;
  border: 2px solid #d4a373;
  box-shadow: 4px 6px 6px rgba(45, 45, 45, 0.25);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  box-sizing: border-box;

  article {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    height: 100%;

    img {
      width: 100%;
      height: 200px;
      object-fit: cover;
      border-radius: 4px;
      margin-bottom: 0.5rem;
    }

    h2 {
      font-size: 1.25rem;
      font-weight: bold;
      text-align: center;
    }

    p {
      font-size: 1rem;
      text-align: center;
      margin-top: 0.5rem;
      overflow: hidden;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }
  }
`;
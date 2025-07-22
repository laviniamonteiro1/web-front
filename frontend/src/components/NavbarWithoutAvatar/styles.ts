import styled from "styled-components";

export const SNavbar = styled.header`
  width: 100%;
  height: 4.4rem;
  background-color: #eaeaea;
  padding: 0.25rem 0.75rem;

  nav {
    img {
      height: 3.75rem;
    }

    ul {
      display: flex;
      justify-content: space-between;
      align-items: center;

      li label {
        cursor: pointer;
        display: block;
        width: fit-content;

        img {
          height: 2.5rem;
        }
      }

      .dropdown-menu {
        display: none;
        position: absolute;
        right: 0;
        top: 4.4rem;
        z-index: 1;
        width: 100vw;
        background-color: #003459;
        box-shadow: 4px 6px 6px rgba(45, 45, 45, 0.25);

        li {
          width: 100%;
          padding: 0.625rem;

          a {
            color: #eaeaea;
            display: block;
          }

          &:hover {
            background-color: #eaeaea;

            a {
              color: #003459;
            }
          }
        }
      }

      input[type="checkbox"]:checked ~ .dropdown-menu {
        display: block;
      }

      @media (min-width: 525px) {
        .dropdown-menu {
          border-radius: 0.625rem;
          width: 10rem;
          top: 3.5rem;
          right: 0.75rem;
        }
      }
    }
  }
`;

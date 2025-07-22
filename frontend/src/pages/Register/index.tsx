import { NavbarSemAvatar } from "../../components/NavbarWithoutAvatar";
import { Footer } from "../../components/Footer";
import { Container, LoginLink } from "./styles";
import { RegisterForm } from "../../components/RegisterForm";
import { Link } from "react-router-dom";

export function Register() {
  return (
    <>
      <NavbarSemAvatar />

      <Container>
        <RegisterForm />

        <LoginLink>
          Já possui cadastro? <Link to="/login">Entrar</Link>
        </LoginLink>
      </Container>

      <Footer />
    </>
  );
}

"use client";

import { Container } from "./styles";
import { NavbarSemAvatar } from "@/components/NavbarWithoutAvatar";
import { Footer } from "@/components/Footer";
import { LoginForm } from "@/components/LoginForm";

export default function Login() {
  return (
    <>
      <NavbarSemAvatar />
      <Container>
        <LoginForm />
      </Container>
      <Footer />
    </>
  );
}

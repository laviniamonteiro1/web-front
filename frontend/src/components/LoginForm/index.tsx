"use client";

import { useState, type FormEvent } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import {
  Title,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
  ErrorMessage,
  RegisterLink,
} from "./styles";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { login } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!email || !password) return;

    setIsLoading(true);
    setError("");

    try {
      await login(email, password);
      navigate("/panel");
    } catch (err) {
      setError(err instanceof Error ? err.message : "Falha no login");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>ENTRAR</Title>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <FormGroup>
        <Label htmlFor="email">E-mail</Label>
        <Input
          id="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="password">Senha</Label>
        <Input
          id="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </FormGroup>

      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Entrando..." : "Entrar"}
      </Button>

      <RegisterLink>
        Não possui cadastro? <Link to="/register">Cadastre-se aqui</Link>
      </RegisterLink>
    </Form>
  );
}

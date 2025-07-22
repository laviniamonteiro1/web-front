import { useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";
import {
  Form,
  Title,
  FormGroup,
  Label,
  Input,
  Button,
  ErrorMessage,
} from "./styles";
import type { RegisterFormData } from "@/types/RegisterType";

export function RegisterForm() {

  const [formData, setFormData] = useState<RegisterFormData>({
    address: '', birthdate: '', confirmPassword: '', document: '', email:'', name:'', password:'', phone:''
  })
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const { register } = useAuth();
  const navigate = useNavigate();
  const updateField = (field: keyof RegisterFormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const resetForm = () => {
    setFormData({address: '', birthdate: '', confirmPassword: '', document: '', email:'', name:'', password:'', phone:''})
  }

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
      setError("Preencha todos os campos obrigatórios.");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("As senhas não coincidem.");
      return;
    }

    setIsLoading(true);
    setError("");

    try {
      await register(formData.name, formData.email, formData.password);
      navigate("/panel");
      resetForm();
    } catch (err) {
      setError(err instanceof Error ? err.message : "Erro ao registrar.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Title>CADASTRO</Title>

      {error && <ErrorMessage>{error}</ErrorMessage>}

      <FormGroup>
        <Label htmlFor="name">Nome completo</Label>
        <Input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => updateField("name", e.target.value)}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="email">E-mail</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => updateField("email", e.target.value)}
          required
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="birthdate">Data de nascimento</Label>
        <Input
          id="birthdate"
          type="date"
          value={formData.birthdate}
          onChange={(e) => updateField("birthdate", e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="phone">Telefone</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => updateField("phone", e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="document">Documento</Label>
        <Input
          id="document"
          type="text"
          value={formData.document}
          onChange={(e) => updateField("document", e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="address">Endereço</Label>
        <Input
          id="address"
          type="text"
          value={formData.address}
          onChange={(e) => updateField("address", e.target.value)}
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="password">Senha</Label>
        <Input
          id="password"
          type="password"
          value={formData.password}
          onChange={(e) => updateField("password", e.target.value)}
          required
          aria-label="Senha"
        />
      </FormGroup>

      <FormGroup>
        <Label htmlFor="confirmPassword">Confirmar senha</Label>
        <Input
          id="confirmPassword"
          type="password"
          value={formData.confirmPassword}
          onChange={(e) => updateField("confirmPassword", e.target.value)}
          required
          aria-label="Confirmar senha"
        />
      </FormGroup>

      <Button type="submit" disabled={isLoading}>
        {isLoading ? "Registrando..." : "Registrar"}
      </Button>
    </Form>
  );
}

import type { UserProps } from "../types/UserType";

export const mockUsers: UserProps[] = [
  {
    id: "user-1",
    name: "Administrador",
    email: "admin@royalstay.com",
    password: "admin123",
    role: "admin",
  },
  {
    id: "user-2",
    name: "Hóspede Teste",
    email: "hospede@royalstay.com",
    password: "guest123",
    role: "user",
  },
];

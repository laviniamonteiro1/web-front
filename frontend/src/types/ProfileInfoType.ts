export interface ProfileInfo {
  fullName: string;
  email: string;
  birthDate: string;
  phone: string;
  document: string;
  address: string;
  avatarUrl: string;
  profileStatus: "Ativo" | "Inativo";  // Status do perfil
}

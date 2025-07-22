import { Navigate } from "react-router-dom";
import { useAuth } from "../hooks/useAuth";

interface ProtectedRouteProps {
  children: React.ReactNode;
}

export function ProtectedRoute({ children }: ProtectedRouteProps) {
  const { currentUser, isLoading } = useAuth();

  // Adicionando console.log para depuração
  console.log("Loading:", isLoading); // Verifique se o carregamento está acontecendo
  console.log("currentUser:", currentUser); // Verifique o valor de currentUser

  if (isLoading) {
    return <div>Loading...</div>;
  }

  // Se não estiver autenticado, redireciona para o login
  if (!currentUser) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
}

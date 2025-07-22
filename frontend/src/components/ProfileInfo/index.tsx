import React from 'react';
import { useAuth } from '@/contexts/AuthContext';

const ProfileInfo: React.FC = () => {
  const { currentUser, isLoading } = useAuth();

  if (isLoading) {
    return <p>Carregando informações do perfil...</p>;
  }

  if (!currentUser) {
    return <p>Usuário não encontrado. Faça login para ver suas informações.</p>;
  }

  return (
    <div className="profile-details">
      <ul>
        <li>
          <strong>Nome Completo:</strong> {currentUser.name}
        </li>
        <li>
          <strong>E-mail:</strong> {currentUser.email}
        </li>
        <li>
          <strong>Função:</strong> {currentUser.role}
        </li>
        {currentUser.phone && (
          <li>
            <strong>Telefone:</strong> {currentUser.phone}
          </li>
        )}
        {currentUser.document && (
          <li>
            <strong>Documento:</strong> {currentUser.document}
          </li>
        )}
        {currentUser.address && (
          <li>
            <strong>Endereço:</strong> {currentUser.address}
          </li>
        )}
      </ul>
    </div>
  );
};

export default ProfileInfo;

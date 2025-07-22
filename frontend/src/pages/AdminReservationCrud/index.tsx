import React from 'react';
import { NavbarComAvatar } from '@/components/NavbarWithAvatar';
import { Footer } from '@/components/Footer';
import  AdminReservationCrud from '@/components/AdminReservationCrud/AdminReservationCrud';
import { AdminPageContainer, ContentWrapper } from './styles';

const AdminPage: React.FC = () => {
  return (
    <AdminPageContainer>
      <NavbarComAvatar />
      <ContentWrapper>
        <AdminReservationCrud />
      </ContentWrapper>
      <Footer />
    </AdminPageContainer>
  );
};

export default AdminPage;
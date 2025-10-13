import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavbarComponent } from '../components/NavbarComponent/NavbarComponent';
import styled from 'styled-components';

const LayoutContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  width: 100%;
`;

const MainContent = styled.main`
  flex: 1;
  width: 100%;
  background-color: #f8f8f8;
`;

export const MainLayout: React.FC = () => {
  return (
    <LayoutContainer>
      <NavbarComponent />
      <MainContent>
        <Outlet />
      </MainContent>
    </LayoutContainer>
  );
};


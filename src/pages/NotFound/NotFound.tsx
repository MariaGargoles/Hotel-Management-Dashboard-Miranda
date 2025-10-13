import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { ROUTES } from '../../utils/constants';

const NotFoundContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #f8f8f8;
`;

const ErrorCode = styled.h1`
  font-size: 120px;
  font-weight: bold;
  color: #135846;
  margin: 0;
  line-height: 1;
`;

const ErrorTitle = styled.h2`
  font-size: 32px;
  color: #262626;
  margin: 20px 0;
  font-weight: 600;
`;

const ErrorMessage = styled.p`
  font-size: 18px;
  color: #799283;
  margin-bottom: 40px;
  text-align: center;
  max-width: 500px;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
`;

const Button = styled.button<{ variant?: 'primary' | 'secondary' }>`
  padding: 12px 30px;
  font-size: 16px;
  font-weight: 500;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  border: none;

  ${props => props.variant === 'primary' ? `
    background-color: #135846;
    color: white;
    
    &:hover {
      background-color: #0e4034;
      transform: translateY(-2px);
      box-shadow: 0 4px 8px rgba(19, 88, 70, 0.3);
    }
  ` : `
    background-color: white;
    color: #135846;
    border: 2px solid #135846;
    
    &:hover {
      background-color: #f8f8f8;
      transform: translateY(-2px);
    }
  `}
`;

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  const handleGoHome = () => {
    navigate(ROUTES.DASHBOARD);
  };

  const handleGoBack = () => {
    navigate(-1);
  };

  return (
    <NotFoundContainer>
      <ErrorCode>404</ErrorCode>
      <ErrorTitle>Página no encontrada</ErrorTitle>
      <ErrorMessage>
        Lo sentimos, la página que estás buscando no existe o ha sido movida.
      </ErrorMessage>
      <ButtonGroup>
        <Button variant="primary" onClick={handleGoHome}>
          Ir al Dashboard
        </Button>
        <Button variant="secondary" onClick={handleGoBack}>
          Volver atrás
        </Button>
      </ButtonGroup>
    </NotFoundContainer>
  );
};


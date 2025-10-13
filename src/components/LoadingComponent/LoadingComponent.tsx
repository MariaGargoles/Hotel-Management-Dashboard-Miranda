import React from 'react';
import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #f8f8f8;
`;

const Spinner = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #135846;
  border-radius: 50%;
  width: 50px;
  height: 50px;
  animation: ${spin} 1s linear infinite;
`;

const LoadingText = styled.p`
  margin-top: 20px;
  font-size: 16px;
  color: #135846;
  font-weight: 500;
`;

interface LoadingComponentProps {
  text?: string;
}

export const LoadingComponent: React.FC<LoadingComponentProps> = ({ text = 'Cargando...' }) => {
  return (
    <LoadingContainer>
      <Spinner />
      <LoadingText>{text}</LoadingText>
    </LoadingContainer>
  );
};


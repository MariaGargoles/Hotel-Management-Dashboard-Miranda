import React, { Component, ErrorInfo, ReactNode } from 'react';
import styled from 'styled-components';

const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  padding: 20px;
  background-color: #f8f8f8;
`;

const ErrorTitle = styled.h1`
  font-size: 48px;
  color: #E23428;
  margin-bottom: 20px;
`;

const ErrorMessage = styled.p`
  font-size: 18px;
  color: #262626;
  margin-bottom: 30px;
  text-align: center;
  max-width: 600px;
`;

const ReloadButton = styled.button`
  padding: 12px 30px;
  background-color: #135846;
  color: white;
  border: none;
  border-radius: 8px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0e4034;
  }
`;

const ErrorDetails = styled.details`
  margin-top: 20px;
  padding: 20px;
  background-color: #fff;
  border-radius: 8px;
  max-width: 800px;
  width: 100%;

  summary {
    cursor: pointer;
    font-weight: 600;
    color: #135846;
  }

  pre {
    margin-top: 10px;
    padding: 15px;
    background-color: #f5f5f5;
    border-radius: 4px;
    overflow-x: auto;
    font-size: 12px;
  }
`;

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
  error: Error | null;
  errorInfo: ErrorInfo | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null
    };
  }

  static getDerivedStateFromError(error: Error): State {
    return {
      hasError: true,
      error,
      errorInfo: null
    };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Error capturado por ErrorBoundary:', error, errorInfo);
    this.setState({
      error,
      errorInfo
    });
  }

  handleReload = () => {
    window.location.reload();
  };

  render() {
    if (this.state.hasError) {
      return (
        <ErrorContainer>
          <ErrorTitle>¡Oops!</ErrorTitle>
          <ErrorMessage>
            Ha ocurrido un error inesperado. Por favor, intenta recargar la página.
          </ErrorMessage>
          <ReloadButton onClick={this.handleReload}>
            Recargar Página
          </ReloadButton>
          
          {process.env.NODE_ENV === 'development' && this.state.error && (
            <ErrorDetails>
              <summary>Detalles del error (solo en desarrollo)</summary>
              <pre>
                {this.state.error.toString()}
                {this.state.errorInfo?.componentStack}
              </pre>
            </ErrorDetails>
          )}
        </ErrorContainer>
      );
    }

    return this.props.children;
  }
}


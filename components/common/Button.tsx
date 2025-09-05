import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #134581;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  margin-top: 1rem;
  transition: background-color 0.2s ease;
  font-weight: bold;

  &:hover {
    background-color: #092ae7ff;
  }

  /* Adicione este estilo para o estado desabilitado */
  &:disabled {
    background-color: #aeb8c2;
    cursor: not-allowed;
  }
`;

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  style?: React.CSSProperties;
  disabled?: boolean; // Adicione a prop disabled opcional
};

// Receba e aplique a prop disabled
const Button = ({ children, onClick, style, disabled }: ButtonProps) => (
  <StyledButton onClick={onClick} style={style} disabled={disabled}>
    {children}
  </StyledButton>
);

export default Button;
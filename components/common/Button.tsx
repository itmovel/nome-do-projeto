import React from 'react'; // Importe o React para usar React.ReactNode
import styled from 'styled-components';

const StyledButton = styled.button`
  background-color: #3d5afe;
  color: white;
  border: none;
  padding: 1rem 2rem;
  border-radius: 8px;
  font-size: 1rem;
  cursor: pointer;
  width: 100%;
  margin-top: 1rem;

  &:hover {
    background-color: #304ffe;
  }
`;

// Defina os tipos para as props do botão
type ButtonProps = {
  children: React.ReactNode; // 'children' pode ser qualquer elemento React válido
  onClick: () => void; // 'onClick' é uma função que não retorna nada
  style?: React.CSSProperties; // Adicione 'style' como opcional
};

// Aplique os tipos às props
const Button = ({ children, onClick, style }: ButtonProps) => (
  <StyledButton onClick={onClick} style={style}>{children}</StyledButton>
);

export default Button;
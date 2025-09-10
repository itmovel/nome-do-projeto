import React from 'react';
import { StyledButton } from './Button.styles';

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  style?: React.CSSProperties;
  disabled?: boolean;
};

const Button = ({ children, onClick, style, disabled = false }: ButtonProps) => (
  <StyledButton onClick={onClick} style={style} disabled={disabled}>
    {children}
  </StyledButton>
);

export default Button;
import React from 'react';
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

const Button = ({ children, onClick }) => (
  <StyledButton onClick={onClick}>{children}</StyledButton>
);

export default Button;
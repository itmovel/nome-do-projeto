import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

// Container principal que agrupa as duas barras
const HeaderWrapper = styled.div`
  background-color: #3d5afe;
  color: white;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
`;

// Barra superior apenas com a saudação
const TopBar = styled.div`
  padding: 0.75rem 1rem;
  text-align: center;
  font-size: 0.9rem;
`;

// Barra inferior com a navegação
const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2); // Linha divisória sutil
`;

const HomeLink = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: white;
  font-size: 1.1rem;
`;

const IconWrapper = styled.div`
  cursor: pointer;
`;

// O componente Header agora renderiza as duas barras
const Header = ({ onHomeClick }) => (
  <HeaderWrapper>
    <TopBar>Olá, Felipe, você está em Mercado Livre</TopBar>
    <BottomBar>
      <HomeLink onClick={onHomeClick}>
        <Image src="/images/home_icon.svg" alt="Home" width={24} height={24} />
        <span style={{ marginLeft: '8px' }}>Home</span>
      </HomeLink>
      <IconWrapper>
        <Image src="/images/shield_icon.svg" alt="App Icon" width={24} height={24} />
      </IconWrapper>
    </BottomBar>
  </HeaderWrapper>
);

export default Header;
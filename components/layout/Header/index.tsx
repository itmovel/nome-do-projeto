import React from 'react';
import Image from 'next/image';
import { useAppContext } from '@/context/AppContext';
import { useHasMounted } from '@/hooks/useHasMounted'; // 1. IMPORTE O HOOK
import { 
  HeaderWrapper, 
  TopBar, 
  BottomBar, 
  HomeLink, 
  IconWrapper 
} from './Header.styles';

type HeaderProps = {
  onHomeClick: () => void;
};

const Header = ({ onHomeClick }: HeaderProps) => {
  const { clientName } = useAppContext();
  const hasMounted = useHasMounted(); // 2. USE O HOOK

  return (
    <HeaderWrapper>
      <TopBar>
        {/* 
          3. LÓGICA DE RENDERIZAÇÃO SEGURA:
          - No servidor, 'hasMounted' é false, então renderizamos "...".
          - No primeiro render do cliente, 'hasMounted' AINDA é false, então renderizamos "...".
            A hidratação acontece com sucesso!
          - Após a montagem, 'hasMounted' se torna true, e o componente re-renderiza
            com o 'clientName' real, que já foi carregado do sessionStorage pelo SWR.
        */}
        Olá, {hasMounted ? clientName : '...'}, você está em Mercado Livre
      </TopBar>
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
};

export default Header;
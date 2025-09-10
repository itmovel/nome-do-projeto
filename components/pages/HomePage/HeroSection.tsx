import React from 'react';
import styled from 'styled-components';
import Button from '@/components/ui/Button';

const HeroCard = styled.div`
  position: relative; border-radius: 8px; min-height: 220px;
  margin-bottom: 1.5rem; overflow: hidden; display: flex;
  color: ${({ theme }) => theme.colors.white};
  
  &::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('/images/wind_turbine.jpg');
    background-size: cover; background-position: center;
  }
`;
const HeroContent = styled.div`
  position: relative; z-index: 1; text-align: center; margin: auto; padding: 1rem;
`;
const HeroTitle = styled.h2` margin: 0; font-size: 1.5rem; font-weight: bold; `;
const HeroSubtitle = styled.p` margin-top: 0.5rem; margin-bottom: 1.5rem; font-size: 1rem; max-width: 250px; `;

interface HeroSectionProps {
  onStartFlow: () => void;
}

export const HeroSection = ({ onStartFlow }: HeroSectionProps) => {
  return (
    <HeroCard>
      <HeroContent>
        <HeroTitle>Mercado Livre</HeroTitle>
        <HeroSubtitle>Energia limpa e até 35% de desconto para a sua empresa</HeroSubtitle>
        <Button onClick={onStartFlow} style={{ width: 'auto', padding: '0.8rem 2.5rem' }}>
          CONTRATE JÁ
        </Button>
      </HeroContent>
    </HeroCard>
  );
};
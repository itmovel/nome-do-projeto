import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';
import Button from '@/components/ui/Button';
import brazilMapImage from '@/public/images/brazil_map.jpg';

const Section = styled.section` margin-bottom: 2.5rem; `;
const HorizontalDivider = styled.hr` border: none; border-top: 1px solid ${({ theme }) => theme.colors.gray}; margin: 2rem 0; `;
const MapSectionTitle = styled.h3` font-weight: bold; font-size: 1.2rem; margin-bottom: 0.5rem; `;
const MapSectionSubtitle = styled.p` color: ${({ theme }) => theme.colors.textLight}; margin-top: 0; margin-bottom: 1.5rem; `;
const FaqLink = styled.a`
  display: flex; align-items: center; justify-content: center;
  gap: 0.5rem; text-decoration: none;
  color: ${({ theme }) => theme.colors.secondary};
  font-weight: bold; cursor: pointer; margin-top: 2rem;
`;

interface MapSectionProps {
  onStartFlow: () => void;
}

export const MapSection = ({ onStartFlow }: MapSectionProps) => {
  return (
    <>
      <HorizontalDivider />
      <Section>
        <h3>Faça a sua simulação para uma energia limpa e mais barata</h3>
        <Button onClick={onStartFlow}>SIMULAR AGORA</Button>
      </Section>
      <Section>
        <MapSectionTitle>Mercado Livre</MapSectionTitle>
        <MapSectionSubtitle>
          Presente fisicamente em 10 estados e com venda de energia em 24 estados.
        </MapSectionSubtitle>
        <Image src={brazilMapImage} alt="Mapa do Brasil" layout="responsive" placeholder="blur" />
        <FaqLink>
          <Image src="/images/faq_icon.svg" alt="" width={24} height={24} />
          <span>DÚVIDAS FREQUENTES</span>
        </FaqLink>
      </Section>
    </>
  );
};
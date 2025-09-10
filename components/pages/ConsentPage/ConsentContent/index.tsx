import React from 'react';
import Image from 'next/image';
import Button from '@/components/ui/Button';

// Importe os componentes estilizados do arquivo de estilos
import {
  ContentContainer,
  Title,
  Paragraph,
  ImageWrapper
} from './ConsentContent.styles';

interface ConsentContentProps {
  onContinue: () => void;
}

export const ConsentContent = ({ onContinue }: ConsentContentProps) => {
  return (
    <ContentContainer>
      <Title>Dados para uma simulação mais rápida e precisa</Title>
      <Paragraph>
        Para agilizar sua simulação precisamos usar os seus dados cadastrados na sua conta de luz, o seu histórico de consumo e detalhes da fatura.
      </Paragraph>
      <ImageWrapper>
        <Image 
          src="/images/woman_with_bill.png"
          alt="Análise de Fatura"
          width={250}
          height={200}
          objectFit="contain"
        />
      </ImageWrapper>
      <Button onClick={onContinue}>
        Continuar com meus dados
      </Button>
    </ContentContainer>
  );
};
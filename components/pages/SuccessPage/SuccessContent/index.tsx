import React from 'react';
import Image from 'next/image';

// Importe os componentes estilizados do arquivo de estilos
import {
  ContentContainer,
  Title,
  Subtitle,
  InfoText
} from './SuccessContent.styles';

export const SuccessContent = () => {
  return (
    <ContentContainer>
      <Image 
        src="/images/success_checkmark_icon.svg" 
        alt="Sucesso" 
        width={80} 
        height={80} 
      />
      <Title>Contrato assinado</Title>
      <Subtitle>Seja bem-vindo ao Mercado Livre</Subtitle>
      <InfoText>
        Você receberá um e-mail com as informações da sua contratação e uma cópia do seu contrato.
      </InfoText>
    </ContentContainer>
  );
};
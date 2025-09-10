import React from 'react';
import Button from '@/components/ui/Button';
import { ContentContainer, InfoText, ButtonWrapper } from './NoUnitsFound.styles';

interface NoUnitsFoundProps {
  onGoBack: () => void;
}

export const NoUnitsFound = ({ onGoBack }: NoUnitsFoundProps) => {
  return (
    <ContentContainer>
      <InfoText>
        Você não possui nenhuma unidade consumidora elegível para contratação.
      </InfoText>
      <ButtonWrapper>
        <Button onClick={onGoBack}>VOLTAR</Button>
      </ButtonWrapper>
    </ContentContainer>
  );
};
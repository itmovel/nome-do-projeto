import React from 'react';
import Button from '@/components/ui/Button';
import Image from 'next/image';
import { ErrorWrapper, Title, Message, ButtonContainer } from './ApiErrorDisplay.styles';

interface ApiErrorDisplayProps {
  onGoHome: () => void;
  title?: string;
  message?: string;
}

export const ApiErrorDisplay = ({
  onGoHome,
  title = "Ocorreu um Erro",
  message = "Não foi possível carregar as informações. Por favor, verifique sua conexão e tente novamente."
}: ApiErrorDisplayProps) => {
  return (
    <ErrorWrapper>
      <Image src="/images/icon_error.svg" alt='Ocorreu um Erro' width={96} height={96} />
      <Title>{title}</Title>
      <Message>{message}</Message>
      <ButtonContainer>
        <Button onClick={onGoHome}>
          Voltar para o Início
        </Button>
      </ButtonContainer>
    </ErrorWrapper>
  );
};
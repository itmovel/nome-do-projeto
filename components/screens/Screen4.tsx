import React from 'react';
import styled from 'styled-components';
import Header from '../common/Header';
import Button from '../common/Button';
import Image from 'next/image';
import successCheckmark from '../../public/images/success_checkmark_icon.svg';

// --- Styled Components ---

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background-color: #ffffff;
`;

const ContentContainer = styled.main`
  flex: 1; /* Ocupa todo o espaço disponível */
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`;

const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  color: #333;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
`;

const Subtitle = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  color: #333;
  margin-top: 0;
  margin-bottom: 2rem;
`;

const Paragraph = styled.p`
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
  max-width: 350px;
  margin: 0 0 1rem;

  strong {
    color: #333;
    font-weight: bold;
  }
`;

const SmallParagraph = styled(Paragraph)`
  font-size: 0.9rem;
  color: #666;
`;

const ButtonWrapper = styled.div`
  width: 100%;
  padding: 0 2rem 2rem;
`;

// --- Component ---

const Screen4 = ({ setScreen }) => {
  return (
    <PageContainer>
      <Header onHomeClick={() => setScreen(1)} />
      
      <ContentContainer>
        <Image 
          src={successCheckmark} 
          alt="Contrato assinado com sucesso" 
          width={80} 
          height={80} 
        />
        <Title>Contrato assinado</Title>
        <Subtitle>Seja bem-vindo ao Mercado Livre</Subtitle>
        
        <Paragraph>
          Você receberá um e-mail no endereço <strong>felipe@gmail.com</strong> com as informações da sua contratação e uma cópia do seu contrato.
        </Paragraph>
        
        <SmallParagraph>
          É uma satisfação contar com você. Sucesso nessa nova jornada!
        </SmallParagraph>
      </ContentContainer>
      
      <ButtonWrapper>
        <Button onClick={() => setScreen(1)}>RETORNAR AO INÍCIO</Button>
      </ButtonWrapper>
    </PageContainer>
  );
};

export default Screen4;
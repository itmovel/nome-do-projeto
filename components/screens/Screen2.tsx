import React from 'react';
import styled from 'styled-components';
import Header from '../common/Header';
import Button from '../common/Button';
import Image from 'next/image';
import womanWithBillImage from '../../public/images/woman_with_bill.png'; // Importe a imagem

// Container principal da página
const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #ffffff;
`;

// Container para o conteúdo central com padding
const ContentContainer = styled.main`
  flex: 1;
  padding: 1.5rem;
  text-align: left;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
  line-height: 1.3;
  margin-top: 0;
  margin-bottom: 1rem;
`;

const Paragraph = styled.p`
  font-size: 1rem;
  color: #555;
  line-height: 1.6;
  margin-bottom: 2rem;
`;

const ImageWrapper = styled.div`
  text-align: center;
  margin: 1rem 0 2rem;
`;

const Footer = styled.footer`
  padding: 1.5rem;
  background-color: #f7f7f9; /* Fundo cinza claro para a área do disclaimer */
`;

const DisclaimerText = styled.p`
  font-size: 0.8rem;
  color: #666;
  line-height: 1.5;
  text-align: center;
  margin: 0;
`;

const PrivacyLink = styled.a`
  color: #c87f0b; /* Tom de marrom/laranja para o link */
  text-decoration: underline;
  cursor: pointer;
`;

const Screen2 = ({ setScreen }) => {
  return (
    <PageContainer>
      <Header onHomeClick={() => setScreen(1)} />
      
      <ContentContainer>
        <Title>Dados para uma simulação mais rápida e precisa</Title>
        <Paragraph>
          Para agilizar sua simulação precisamos usar os seus dados cadastrados na sua conta de luz, o seu histórico de consumo e detalhes da fatura.
        </Paragraph>
        
        <ImageWrapper>
          <Image 
            src={womanWithBillImage} 
            alt="Mulher analisando uma fatura de energia"
            width={250}
            height={200}
            objectFit="contain"
          />
        </ImageWrapper>
        
        <Button onClick={() => setScreen(3)}>Continuar com meus dados</Button>
      </ContentContainer>
      
      <Footer>
        <DisclaimerText>
          Informa-se que a (LGPD) realizará o tratamento de seus dados pessoais com base nos incisos I, II e V do artigo 7º da Lei Geral de Proteção de Dados Pessoais (LGPD). Os dados pessoais coletados e tratados serão utilizados exclusivamente para a finalidade de contratação de seguros. Para mais informações sobre proteção de dados, acesse o <PrivacyLink>Portal da Privacidade</PrivacyLink>.
        </DisclaimerText>
      </Footer>
    </PageContainer>
  );
};

export default Screen2;
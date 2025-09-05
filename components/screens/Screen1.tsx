import React from 'react';
import styled from 'styled-components';
import Header from '../common/Header';
import Button from '../common/Button';
import Image from 'next/image';
import windTurbineImage from '../../public/images/wind_turbine.jpg';
import brazilMapImage from '../../public/images/brazil_map.jpg';

const ScreenContainer = styled.div`
  padding: 1rem;
`;

// --- Estilos do Hero Card ---
const HeroCard = styled.div`
  position: relative; border-radius: 8px; min-height: 220px;
  margin-bottom: 1.5rem; overflow: hidden; display: flex;
  &::before {
    content: ''; position: absolute; top: 0; left: 0; right: 0; bottom: 0;
    background-image: linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url(${windTurbineImage.src});
    background-size: cover; background-position: center;
  }
`;
const HeroContent = styled.div`
  position: relative; z-index: 1; color: white; text-align: center;
  margin: auto; padding: 1rem;
`;
const HeroTitle = styled.h2`
  margin: 0; font-size: 1.5rem; font-weight: bold;
`;
const HeroSubtitle = styled.p`
  margin-top: 0.5rem; margin-bottom: 1.5rem; font-size: 1rem; max-width: 250px;
`;

// --- Estilos da Seção de Economia ---
const Section = styled.div`
  margin-bottom: 2.5rem;
`;
const TwoColumnContainer = styled.div`
  display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem;
`;
const LeftColumn = styled.div`
  font-weight: bold; font-size: 1.1rem;
`;
const BlueText = styled.span`
  color: #0074ff;
`;
const BlueTextBlock = styled(BlueText)`
  display: block;
`;
const VerticalDivider = styled.div`
  width: 1px; align-self: stretch; background-color: #e0e0e0;
`;
const RightColumn = styled.div`
  font-size: 0.9rem; color: #555;
`;
const InfoBox = styled.div`
  background-color: #f7f7f9; border-radius: 12px; padding: 1rem;
  color: #333; font-size: 0.95rem; line-height: 1.5;
`;

// --- Estilos da Seção de Passos e Simulação ---
const SectionTitle = styled.h3`
  text-align: center; font-weight: bold; font-size: 1.1rem; margin-bottom: 1.5rem;
`;
const StepsContainer = styled.div`
  display: flex; justify-content: space-around; text-align: center; margin-bottom: 1.5rem;
`;
const StepItem = styled.div`
  display: flex; flex-direction: column; align-items: center; max-width: 100px;
`;
const StepCircle = styled.div`
  width: 40px; height: 40px; border-radius: 50%; border: 2px solid #0074ff;
  display: flex; align-items: center; justify-content: center;
  font-weight: bold; color: #0074ff; margin-bottom: 0.5rem;
`;
const StepText = styled.p`
  font-size: 0.9rem; color: #555; margin: 0;
`;
const HorizontalDivider = styled.hr`
  border: none; border-top: 1px solid #e0e0e0; margin: 2rem 0;
`;
const SimulationTitle = styled.h3`
  font-weight: bold; font-size: 1.1rem; margin-bottom: 1rem;
`;

// --- Estilos da Seção do Mapa e FAQ ---
const MapSectionTitle = styled.h3`
  font-weight: bold; font-size: 1.2rem; margin-bottom: 0.5rem;
`;
const MapSectionSubtitle = styled.p`
  color: #555; margin-top: 0; margin-bottom: 1.5rem;
`;
const FaqLink = styled.a`
  display: flex; align-items: center; justify-content: center;
  gap: 0.5rem; text-decoration: none; color: #1273f3ff;
  font-weight: bold; cursor: pointer; margin-top: 2rem;
`;

// Defina o tipo para as props da tela
type ScreenProps = {
  setScreen: React.Dispatch<React.SetStateAction<number>>;
  clientName: string;
  onHomeClick: () => void; // ADICIONE ESTA LINHA
}

const Screen1 = ({ setScreen, clientName, onHomeClick }: ScreenProps) => {
  const handleNext = () => setScreen(2);

  return (
    <div>
      <Header onHomeClick={onHomeClick} clientName={clientName} />
      <ScreenContainer>
        {/* Hero Card */}
        <HeroCard>
          <HeroContent>
            <HeroTitle>Mercado Livre</HeroTitle>
            <HeroSubtitle>Energia limpa e até 35% de desconto para a sua empresa</HeroSubtitle>
            <Button onClick={handleNext} style={{ width: 'auto', padding: '0.8rem 2.5rem' }}>
              CONTRATE JÁ
            </Button>
          </HeroContent>
        </HeroCard>

        {/* Seção Venha Economizar */}
        <Section>
          <TwoColumnContainer>
            <LeftColumn>
              Venha economizar com a
              <BlueTextBlock>Mercado Livre</BlueTextBlock>
            </LeftColumn>
            <VerticalDivider />
            <RightColumn>A melhor solução para a sua empresa</RightColumn>
          </TwoColumnContainer>
          <InfoBox>
            Para migrar para o mercado livre de energia, é preciso estar em média ou alta tensão (a partir de 13,8kV) e pertencer ao grupo A.
          </InfoBox>
        </Section>
        
        {/* Seção de Passos */}
        <Section>
          <SectionTitle>
            Participar do <BlueText>Mercado Livre</BlueText> é bem fácil
          </SectionTitle>
          <StepsContainer>
            <StepItem><StepCircle>01</StepCircle><StepText>Simule a economia</StepText></StepItem>
            <StepItem><StepCircle>02</StepCircle><StepText>Contrate a energia</StepText></StepItem>
            <StepItem><StepCircle>03</StepCircle><StepText>Comece a economizar</StepText></StepItem>
          </StepsContainer>
        </Section>
        
        <HorizontalDivider />

        {/* Seção de Simulação */}
        <Section>
          <SimulationTitle>Faça a sua simulação para uma energia limpa e mais barata</SimulationTitle>
          {/* BOTÃO VOLTOU A SER O PADRÃO AZUL */}
          <Button onClick={handleNext}>SIMULAR AGORA</Button>
        </Section>

        {/* Seção do Mapa e FAQ */}
        <Section>
            <MapSectionTitle>Mercado Livre</MapSectionTitle>
            <MapSectionSubtitle>
                Presente fisicamente em 10 estados e com venda de energia em 24 estados.
            </MapSectionSubtitle>
            {/* CORREÇÃO APLICADA AQUI */}
            <Image 
              src={brazilMapImage} 
              alt="Mapa do Brasil com distribuição de energia" 
              layout="responsive" 
              width={brazilMapImage.width}
              height={brazilMapImage.height}
            />
            <FaqLink>
                <Image src="/images/faq_icon.svg" style={{color: 'black'}} alt="" width={24} height={24} />
                <span>DÚVIDAS FREQUENTES</span>
            </FaqLink>
        </Section>
      </ScreenContainer>
    </div>
  );
};

export default Screen1;
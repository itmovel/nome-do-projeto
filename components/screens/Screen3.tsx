import React, { useState } from 'react';
import styled from 'styled-components';
import Header from '../common/Header';
import Button from '../common/Button';
import Image from 'next/image';

// --- Styled Components ---

const PageContainer = styled.div`
  background-color: #f7f7f9;
  min-height: 100vh;
`;

const ContentContainer = styled.main`
  padding: 1.5rem 1rem;
`;

const Title = styled.h2`
  font-size: 1.2rem; font-weight: bold; color: #333; margin-bottom: 1.5rem;
`;

const AddressCard = styled.div`
  background: white; border-radius: 12px; padding: 1rem;
  display: flex; justify-content: space-between; align-items: center;
  margin-bottom: 2rem; box-shadow: 0 2px 8px rgba(0,0,0,0.05);
`;

const AddressText = styled.div`
  font-size: 0.9rem; color: #555; line-height: 1.5;
  strong { color: #333; }
`;

const ChangeButton = styled.button`
  background: none; border: none; cursor: pointer; display: flex;
  flex-direction: column; align-items: center; color: #673ab7;
  font-weight: bold; gap: 4px;
`;

// --- SELETOR DE PLANOS CORRIGIDO ---

const PlanSelectorContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
  margin-top: 3.5rem;
`;

const RecommendedTag = styled.div`
  position: absolute;
  top: -1.6rem;
  margin-left: -8rem;
  background-color: #37474f;
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 4px 12px;
  border-radius: 12px;
  z-index: 1;
`;

const PlanToggle = styled.div`
  display: inline-flex; /* Use inline-flex para se ajustar ao conteúdo */
  background: #ede7f6; /* Fundo roxo bem claro */
  border-radius: 24px;
  padding: 4px;
  border: 1px solid #d1c4e9;
`;

const ToggleButton = styled.button<{ active: boolean }>`
  border: none;
  padding: 8px 24px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${props => props.active ? '#ffffff' : 'transparent'};
  color: ${props => props.active ? '#673ab7' : '#555'};
  transition: all 0.2s ease-in-out;
  /* Adiciona a sombra sutil apenas no botão ativo para dar profundidade */
  box-shadow: ${props => props.active ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'};
`;

// --- FIM DA CORREÇÃO ---

const PlanDetailsCard = styled.div`
  background: white; border-radius: 16px; padding: 1.5rem;
  text-align: center; box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  margin-bottom: 2rem;
`;
const TariffType = styled.p`
  color: #555; font-size: 0.9rem; strong { color: #333; }
`;
const PriceLabel = styled.p<{ color?: string }>`
  margin-top: 1.5rem; margin-bottom: 0.5rem;
  color: ${props => props.color || '#d81b60'};
`;
const LargePrice = styled.p`
  font-size: 2.2rem; font-weight: bold; margin: 0; color: #673ab7;
`;
const SmallPrice = styled.p`
  font-size: 1rem; color: #555; margin-top: 1.5rem;
`;
const BenefitsTitle = styled.h3`
  font-size: 1.1rem; font-weight: bold; margin-bottom: 1rem;
`;
const BenefitList = styled.ul`
  list-style: none; padding: 0; margin: 0; text-align: left;
`;
const BenefitItem = styled.li`
  display: flex; align-items: center; gap: 0.5rem;
  margin-bottom: 0.75rem; color: #333;
`;

// --- Component ---

const Screen3 = ({ setScreen }) => {
  // Estado inicial definido como 'power' para corresponder à imagem
  const [activePlan, setActivePlan] = useState<'power' | 'light'>('power');

  const benefits = {
    power: [
      'Energia com economia de até 35%', 'Sem cobrança extra por oscilação de energia',
      'Gestão gratuita da migração', 'Isenção de garantia financeira',
      'Sem surpresas - você sabe quanto vai pagar',
    ],
    light: [
      'Economia variável conforme o mercado', 'Aproveite os preços baixos da energia',
      'Gestão gratuita da migração', 'Isenção de garantia financeira',
      'Flexibilidade total no seu consumo',
    ]
  };

  return (
    <PageContainer>
      <Header onHomeClick={() => setScreen(1)} />
      <ContentContainer>
        <Title>Faça parte do Mercado Livre, com a credibilidade de uma empresa que você já conhece.</Title>

        <AddressCard>
          <AddressText>
            <strong>Unidade (UC):</strong> 80508359<br/>
            <strong>Endereço:</strong> Comunidade Urbana Vila São João, 118. Vila São João, Mandirituba, PR.
          </AddressText>
          <ChangeButton>
            <Image src="/images/change_icon.svg" alt="" width={24} height={24} />
            Trocar
          </ChangeButton>
        </AddressCard>

        <PlanSelectorContainer>
          <RecommendedTag>Recomendado</RecommendedTag>
          <PlanToggle>
            <ToggleButton active={activePlan === 'power'} onClick={() => setActivePlan('power')}>Plano Power</ToggleButton>
            <ToggleButton active={activePlan === 'light'} onClick={() => setActivePlan('light')}>Plano Light</ToggleButton>
          </PlanToggle>
        </PlanSelectorContainer>

        <PlanDetailsCard>
          <TariffType>Tarifa <strong>{activePlan === 'power' ? 'PREÇO FIXO' : 'DINÂMICA'}</strong></TariffType>
          <PriceLabel>Em xx anos você economizará</PriceLabel>
          <LargePrice>R$ {activePlan === 'power' ? '35.640,00' : '38.210,00'}</LargePrice>

          <PriceLabel color="#673ab7">Economia mensal estimada</PriceLabel>
          <LargePrice>R$ {activePlan === 'power' ? '990,00' : '1.050,00'}</LargePrice>

          <SmallPrice>
            Valor mensal estimado de investimento no Mercado Livre <br/>
            <strong>R$ {activePlan === 'power' ? '10.010,00' : '9.960,00'}</strong>
          </SmallPrice>
        </PlanDetailsCard>

        <BenefitsTitle>Benefícios do Plano {activePlan === 'power' ? 'Power' : 'Light'}</BenefitsTitle>
        <BenefitList>
          {benefits[activePlan].map((benefit, index) => (
            <BenefitItem key={index}>
              <Image src="/images/checkmark_icon.svg" alt="" width={20} height={20} />
              {benefit}
            </BenefitItem>
          ))}
        </BenefitList>

        <Button onClick={() => setScreen(4)} style={{marginTop: '2rem'}}>CONTRATAR</Button>
      </ContentContainer>
    </PageContainer>
  );
};

export default Screen3;
import React from 'react';
import Image from 'next/image';
import { 
  PlanDetailsCard, 
  TariffType, 
  PriceLabel, 
  LargePrice, 
  SmallPrice,
  BenefitsTitle,
  BenefitList,
  BenefitItem
} from './PlanDetails.styles';

type Plan = 'power' | 'light';

interface PlanDetailsProps {
  activePlan: Plan;
}

const benefitsData = {
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

export const PlanDetails = ({ activePlan }: PlanDetailsProps) => {
  return (
    <>
      <PlanDetailsCard>
        <TariffType>Tarifa <strong>{activePlan === 'power' ? 'PREÇO FIXO' : 'DINÂMICA'}</strong></TariffType>
        <PriceLabel>Em xx anos você economizará</PriceLabel>
        <LargePrice>R$ {activePlan === 'power' ? '35.640,00' : '38.210,00'}</LargePrice>

       <PriceLabel primaryColor>Economia mensal estimada</PriceLabel>
        <LargePrice>R$ {activePlan === 'power' ? '990,00' : '1.050,00'}</LargePrice>

        <SmallPrice>
          Valor mensal estimado de investimento no Mercado Livre <br/>
          <strong>R$ {activePlan === 'power' ? '10.010,00' : '9.960,00'}</strong>
        </SmallPrice>
      </PlanDetailsCard>

      <BenefitsTitle>Benefícios do Plano {activePlan === 'power' ? 'Power' : 'Light'}</BenefitsTitle>
      <BenefitList>
        {benefitsData[activePlan].map((benefit, index) => (
          <BenefitItem key={index}>
            <Image src="/images/checkmark_icon.svg" alt="" width={20} height={20} />
            {benefit}
          </BenefitItem>
        ))}
      </BenefitList>
    </>
  );
};
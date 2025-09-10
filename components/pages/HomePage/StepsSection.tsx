import React from 'react';
import styled from 'styled-components';

const Section = styled.section` margin-bottom: 2.5rem; `;
const SectionTitle = styled.h3` text-align: center; font-weight: bold; font-size: 1.1rem; margin-bottom: 1.5rem; `;
const OrangeText = styled.span` color: ${({ theme }) => theme.colors.secondary}; `;
const StepsContainer = styled.div` display: flex; justify-content: space-around; text-align: center; margin-bottom: 1.5rem; `;
const StepItem = styled.div` display: flex; flex-direction: column; align-items: center; max-width: 100px; `;
const StepCircle = styled.div`
  width: 40px; height: 40px; border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.secondary};
  display: flex; align-items: center; justify-content: center;
  font-weight: bold; color: ${({ theme }) => theme.colors.secondary};
  margin-bottom: 0.5rem;
`;
const StepText = styled.p` font-size: 0.9rem; color: ${({ theme }) => theme.colors.textLight}; margin: 0; `;

export const StepsSection = () => {
  return (
    <Section>
      <SectionTitle>
        Participar do <OrangeText>Mercado Livre</OrangeText> é bem fácil
      </SectionTitle>
      <StepsContainer>
        <StepItem><StepCircle>01</StepCircle><StepText>Simule a economia</StepText></StepItem>
        <StepItem><StepCircle>02</StepCircle><StepText>Contrate a energia</StepText></StepItem>
        <StepItem><StepCircle>03</StepCircle><StepText>Comece a economizar</StepText></StepItem>
      </StepsContainer>
    </Section>
  );
};
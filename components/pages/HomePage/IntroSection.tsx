import React from 'react';
import styled from 'styled-components';

const Section = styled.section` margin-bottom: 2.5rem; `;
const TwoColumnContainer = styled.div` display: flex; align-items: center; gap: 1rem; margin-bottom: 1rem; `;
const LeftColumn = styled.div` font-weight: bold; font-size: 1.1rem; `;
const OrangeText = styled.span` color: ${({ theme }) => theme.colors.secondary}; `;
const OrangeTextBlock = styled(OrangeText)` display: block; `;
const VerticalDivider = styled.div` width: 1px; align-self: stretch; background-color: ${({ theme }) => theme.colors.gray}; `;
const RightColumn = styled.div` font-size: 0.9rem; color: ${({ theme }) => theme.colors.textLight}; `;
const InfoBox = styled.div`
  background-color: ${({ theme }) => theme.colors.background};
  border-radius: 12px; padding: 1rem; color: ${({ theme }) => theme.colors.text};
  font-size: 0.95rem; line-height: 1.5;
`;

export const IntroSection = () => {
  return (
    <Section>
      <TwoColumnContainer>
        <LeftColumn>
          Venha economizar com a <OrangeTextBlock>Mercado Livre</OrangeTextBlock>
        </LeftColumn>
        <VerticalDivider />
        <RightColumn>A melhor solução para a sua empresa</RightColumn>
      </TwoColumnContainer>
      <InfoBox>
        Para migrar para o mercado livre de energia, é preciso estar em média ou alta tensão (a partir de 13,8kV) e pertencer ao grupo A.
      </InfoBox>
    </Section>
  );
};
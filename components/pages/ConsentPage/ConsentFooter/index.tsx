import React from 'react';

// Importe os componentes estilizados
import {
  FooterWrapper,
  DisclaimerText,
  PrivacyLink
} from './ConsentFooter.styles';

export const ConsentFooter = () => {
  return (
    <FooterWrapper>
      <DisclaimerText>
        Informa-se que a (LGPD) realizará o tratamento de seus dados pessoais com base nos incisos I, II e V do artigo 7º da Lei Geral de Proteção de Dados Pessoais (LGPD). Os dados pessoais coletados e tratados serão utilizados exclusivamente para a finalidade de contratação de seguros. Para mais informações sobre proteção de dados, acesse o <PrivacyLink>Portal da Privacidade</PrivacyLink>.
      </DisclaimerText>
    </FooterWrapper>
  );
};
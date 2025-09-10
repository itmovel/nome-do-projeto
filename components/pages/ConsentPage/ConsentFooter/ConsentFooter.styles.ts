import styled from 'styled-components';

export const FooterWrapper = styled.footer`
  padding: 1.5rem;
  background-color: ${({ theme }) => theme.colors.background};
`;

export const DisclaimerText = styled.p`
  font-size: 0.8rem;
  text-align: center;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const PrivacyLink = styled.a`
  color: ${({ theme }) => theme.colors.secondaryDark};
  text-decoration: underline;
  cursor: pointer;
`;
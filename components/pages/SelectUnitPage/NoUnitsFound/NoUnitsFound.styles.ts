import styled from 'styled-components';

export const ContentContainer = styled.main`
  padding: 1.5rem;
  text-align: center;
`;

export const InfoText = styled.p`
  text-align: center;
  font-size: 1.1rem;
  color: ${({ theme }) => theme.colors.textLight};
  padding: 4rem 1rem;
`;

export const ButtonWrapper = styled.div`
  padding: 1rem;
`;
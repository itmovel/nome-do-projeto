import styled from 'styled-components';

export const ContentContainer = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 2rem;
`;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: bold;
  margin-top: 1.5rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const Subtitle = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 2rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const InfoText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 350px;
`;
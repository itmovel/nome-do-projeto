import styled from 'styled-components';

export const ContentContainer = styled.main`
  flex: 1;
  padding: 1.5rem;
`;

export const Title = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  line-height: 1.3;
  color: ${({ theme }) => theme.colors.text};
`;

export const Paragraph = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textLight};
`;

export const ImageWrapper = styled.div`
  text-align: center;
  margin: 1rem 0 2rem;
`;
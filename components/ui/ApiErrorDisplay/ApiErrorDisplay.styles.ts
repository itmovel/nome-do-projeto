import styled from 'styled-components';

export const ErrorWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 4rem 1.5rem;
  text-align: center;
  gap: 1rem;
`;

export const Title = styled.h3`
  font-size: 1.25rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin: 0.5rem 0 0 0;
`;

export const Message = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textLight};
  max-width: 350px;
  line-height: 1.6;
  margin: 0;
`;

export const ButtonContainer = styled.div`
  margin-top: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  max-width: 280px;
`;
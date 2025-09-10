import styled from 'styled-components';

export const Title = styled.h2`
  font-size: 1.2rem;
  font-weight: bold;
  color: ${({ theme }) => theme.colors.text};
  margin-bottom: 1.5rem;
`;

export const AddressCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
`;

export const AddressText = styled.div`
  font-size: 0.9rem;
  color: ${({ theme }) => theme.colors.textLight};
  line-height: 1.5;
  strong { color: ${({ theme }) => theme.colors.text}; }
`;

export const ChangeButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${({ theme }) => theme.colors.primary};
  font-weight: bold;
  gap: 4px;
`;
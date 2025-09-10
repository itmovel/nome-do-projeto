import styled from 'styled-components';

export const ContentContainer = styled.main`
  padding: 1.5rem;
`;

export const Title = styled.p`
  font-size: 1.1rem;
  strong { font-weight: bold; }
`;

export const UnitCard = styled.label<{ isSelected: boolean }>`
  display: flex;
  align-items: center;
  background: white;
  border-radius: 12px;
  padding: 1rem;
  margin-bottom: 1rem;
  cursor: pointer;
  border: 2px solid ${({ isSelected, theme }) => isSelected ? theme.colors.primary : theme.colors.gray};
  box-shadow: ${({ isSelected }) => isSelected ? '0 4px 8px rgba(103, 58, 183, 0.2)' : '0 1px 3px rgba(0,0,0,0.05)'};
  transition: all 0.2s ease-in-out;
`;

export const UnitInfo = styled.div`
  margin-left: 1rem;
  font-size: 0.9rem;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.textLight};
  strong { color: ${({ theme }) => theme.colors.text}; }
`;

export const RadioInput = styled.input`
  display: none;
`;

export const CustomRadio = styled.div<{ isSelected: boolean }>`
  width: 22px;
  height: 22px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  border: ${({ isSelected, theme }) => isSelected ? `2px solid ${theme.colors.primary}` : `1px solid #c0c0c0`};
  transition: all 0.2s ease-in-out;

  &::after {
    content: '';
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background-color: ${({ isSelected, theme }) => isSelected ? theme.colors.primary : 'transparent'};
    transition: background-color 0.2s ease-in-out;
  }
`;
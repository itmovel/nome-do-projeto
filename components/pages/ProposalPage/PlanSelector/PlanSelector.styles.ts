import styled from 'styled-components';

export const PlanSelectorContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  margin-bottom: 0.5rem;
  margin-top: 3.5rem;
`;

export const RecommendedTag = styled.div`
  position: absolute;
  top: -1.6rem;
  margin-left: -8rem;
  background-color: #37474f;
  color: white;
  font-size: 0.75rem;
  font-weight: bold;
  padding: 4px 12px;
  border-radius: 12px;
  z-index: 1;
`;

export const PlanToggle = styled.div`
  display: inline-flex;
  background: ${({ theme }) => theme.colors.primaryLight};
  border-radius: 24px;
  padding: 4px;
  border: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const ToggleButton = styled.button<{ active: boolean }>`
  border: none;
  padding: 8px 24px;
  border-radius: 20px;
  font-weight: bold;
  cursor: pointer;
  background-color: ${({ active, theme }) => active ? theme.colors.white : 'transparent'};
  color: ${({ active, theme }) => active ? theme.colors.primary : theme.colors.textLight};
  transition: all 0.2s ease-in-out;
  box-shadow: ${({ active }) => active ? '0 2px 4px rgba(0,0,0,0.1)' : 'none'};
`;
import styled from 'styled-components';

export const PlanDetailsCard = styled.div`
  background: white;
  border-radius: 16px;
  padding: 1.5rem;
  text-align: center;
  box-shadow: 0 4px 12px rgba(0,0,0,0.08);
  margin-bottom: 2rem;
`;

export const TariffType = styled.p`
  color: ${({ theme }) => theme.colors.textLight};
  font-size: 0.9rem;
  strong { color: ${({ theme }) => theme.colors.text}; }
`;

export const PriceLabel = styled.p<{ primaryColor?: boolean }>`
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: ${({ primaryColor, theme }) => primaryColor ? theme.colors.primary : theme.colors.secondaryDark};
`;

export const LargePrice = styled.p`
  font-size: 2.2rem;
  font-weight: bold;
  margin: 0;
  color: ${({ theme }) => theme.colors.primary};
`;

export const SmallPrice = styled.p`
  font-size: 1rem;
  color: ${({ theme }) => theme.colors.textLight};
  margin-top: 1.5rem;
`;

export const BenefitsTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: bold;
  margin-bottom: 1rem;
  color: ${({ theme }) => theme.colors.text};
`;

export const BenefitList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
`;

export const BenefitItem = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-bottom: 0.75rem;
  color: ${({ theme }) => theme.colors.text};
`;
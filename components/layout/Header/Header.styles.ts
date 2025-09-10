import styled from 'styled-components';

export const HeaderWrapper = styled.header`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.white};
  font-family: ${({ theme }) => theme.fonts.main};
`;

export const TopBar = styled.div`
  padding: 0.75rem 1rem;
  text-align: center;
  font-size: 0.9rem;
  font-weight: bolder;
`;

export const BottomBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.5rem 1rem;
  border-top: 1px solid rgba(255, 255, 255, 0.2);
`;

export const HomeLink = styled.a`
  display: flex;
  align-items: center;
  cursor: pointer;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 1.1rem;
`;

export const IconWrapper = styled.div`
  cursor: pointer;
`;
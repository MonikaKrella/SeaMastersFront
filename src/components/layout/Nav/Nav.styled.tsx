import styled from 'styled-components';

export const NavStyled = styled.nav`
  width: auto;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.header};
  padding: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.img`
  margin: 0 1rem;
`;

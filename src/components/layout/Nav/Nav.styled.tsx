import styled from 'styled-components';

export const NavStyled = styled.nav`
  width: auto;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.header};
  padding: 0 1rem;
  display: flex;
  justify-content: flex-start;
`;

export const Logo = styled.img``;

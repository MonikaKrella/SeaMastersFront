import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const NavLinkStyled = styled(Link)`
  display: flex;
  align-items: flex-end;
  text-decoration: none;
  border: 1px solid black;
  border-radius: 10px;
`;

export const LinkTextStyled = styled.p`
  padding: 0 0.5rem;
  color: black;
  margin: 0;
  font-size: 2rem;
  font-weight: 600;
  text-decoration: none;
  align-self: flex-end;
`;

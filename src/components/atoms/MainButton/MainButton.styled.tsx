import styled from 'styled-components';

export const MainButtonStyled = styled.button`
  max-width: 20rem;
  max-height: 8rem;
  border-radius: 10px;
  border: 1px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem;
  background-color: '#0d0e10';

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

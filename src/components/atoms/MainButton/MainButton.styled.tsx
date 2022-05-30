import styled from 'styled-components';

export const MainButtonStyled = styled.button`
  background-color: ${({ theme }) => theme.colors.header};
  max-width: 20rem;
  max-height: 8rem;
  border-radius: 10px;
  border: 1px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

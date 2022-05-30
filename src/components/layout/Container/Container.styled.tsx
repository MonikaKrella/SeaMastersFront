import styled from 'styled-components';

export const Container = styled.div`
  width: auto;
  height: 100%;
  padding: 0 1rem;
  background-color: ${({ theme }) => theme.colors.body};
  text-align: center;
  display: flex;
  flex-direction: column;
`;

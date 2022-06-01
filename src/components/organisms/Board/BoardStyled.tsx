import styled from 'styled-components';

export const GameBoardStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
`;

export const BoardNumbersStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(10, 1fr);
`;

export const BoardVerticalStyled = styled.div`
  display: grid;
  grid-template-rows: repeat(10, 1fr);
`;

export const BoardWrapperStyled = styled.div`
  max-width: 250px;
  max-height: 250px;
  display: flex;
`;

import Square from '../../atoms/Square/Square';
import {
  BoardNumbersStyled,
  BoardWrapperStyled,
  GameBoardStyled,
} from './BoardStyled';

type BoardPropType = {
  boardData: any;
};

export function Board(prop: BoardPropType) {
  console.log(prop.boardData);
  const numbers: JSX.Element[] = [];
  for (let index = 0; index < 10; index++) {
    numbers.push(<Square key={`${index}a`} content={index + 1}></Square>);
  }

  const fields: JSX.Element[][] = [];
  for (let row = 0; row < 10; row++) {
    fields.push([]);
    for (let col = 0; col < 10; col++) {
      fields[row].push(<Square key={`${col}${row}`} />);
    }
  }

  return (
    <BoardWrapperStyled>
      <BoardNumbersStyled>{numbers}</BoardNumbersStyled>
      <GameBoardStyled>{fields}</GameBoardStyled>;
    </BoardWrapperStyled>
  );
}

export default Board;

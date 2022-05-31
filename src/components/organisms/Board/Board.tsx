import Square from '../../atoms/Square/Square';
import {
  BoardNumbersStyled,
  BoardWrapperStyled,
  GameBoardStyled,
} from './BoardStyled';
import { ICoords } from '../../../types/interfaces/ICoords.interface';
import { SquareEnum } from '../../../types/enums/square.enum';
import { createEmptySquaresBoard } from '../../../tools/boardTools/emptyBoard.creator';

type BoardPropType = {
  shipsCoords?: ICoords[] | null;
  shootingArea?: number[][];
  boardRaport?: number[][];
};

export function Board(prop: BoardPropType) {
  const numbers: JSX.Element[] = [];
  for (let index = 0; index < 10; index++) {
    numbers.push(<Square key={`${index}a`} content={index + 1}></Square>);
  }

  let fields: JSX.Element[][] = [];
  if (prop.shipsCoords) {
    fields = createEmptySquaresBoard();
    prop.shipsCoords.forEach((coords) => {
      fields[coords.Y][coords.X] = (
        <Square key={`${coords.Y}${coords.X}`} bg={SquareEnum.Ship} />
      );
    });
  } else if (prop.boardRaport) {
    for (let row = 0; row < 10; row++) {
      fields.push([]);
      for (let col = 0; col < 10; col++) {
        fields[row].push(
          <Square bg={prop.boardRaport[row][col]} key={`${col}${row}`} />
        );
      }
    }
  } else {
    fields = createEmptySquaresBoard(prop.shootingArea);
  }

  return (
    <BoardWrapperStyled>
      <BoardNumbersStyled>{numbers}</BoardNumbersStyled>
      <GameBoardStyled>{fields}</GameBoardStyled>
    </BoardWrapperStyled>
  );
}

export default Board;

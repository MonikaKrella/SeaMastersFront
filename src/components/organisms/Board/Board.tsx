import Square from '../../atoms/Square/Square';
import {
  BoardNumbersStyled,
  BoardVerticalStyled,
  BoardWrapperStyled,
  GameBoardStyled,
} from './BoardStyled';
import { ICoords } from '../../../types/interfaces/ICoords.interface';
import { SquareEnum } from '../../../types/enums/square.enum';
import { createEmptySquaresBoard } from '../../../tools/boardTools/emptyBoard.creator';
import { letters, numbers } from '../../../consts/arrays';

type BoardPropType = {
  shipsCoords?: ICoords[] | null;
  shootingArea?: number[][];
  boardRaport?: number[][];
};

export function Board(prop: BoardPropType) {
  const lettersArr = letters('A', 'J', true);

  let fields: JSX.Element[][] = [];
  if (prop.shipsCoords && prop.shipsCoords.length > 0) {
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
      <BoardVerticalStyled>{lettersArr}</BoardVerticalStyled>
      <div>
        <BoardNumbersStyled>{numbers}</BoardNumbersStyled>
        <GameBoardStyled>{fields}</GameBoardStyled>
      </div>
    </BoardWrapperStyled>
  );
}

export default Board;

import Square from '../../atoms/Square/Square';
import {
  BoardNumbersStyled,
  BoardWrapperStyled,
  GameBoardStyled,
} from './BoardStyled';
import { ICoords } from '../../../types/ICoords.interface';
import { SquareEnum } from '../../../types/square.enum';

type BoardPropType = {
  shipsCoords?: ICoords[] | null;
  shootingArea?: number[][];
};

export function Board(prop: BoardPropType) {
  const numbers: JSX.Element[] = [];
  for (let index = 0; index < 10; index++) {
    numbers.push(<Square key={`${index}a`} content={index + 1}></Square>);
  }

  const fields: JSX.Element[][] = [];

  if (prop.shootingArea) {
    for (let row = 0; row < 10; row++) {
      fields.push([]);
      for (let col = 0; col < 10; col++) {
        fields[row].push(
          <Square bg={prop.shootingArea[row][col]} key={`${col}${row}`} />
        );
      }
    }
  } else if (prop.shipsCoords) {
    for (let row = 0; row < 10; row++) {
      fields.push([]);
      for (let col = 0; col < 10; col++) {
        fields[row].push(<Square bg={SquareEnum.Empty} key={`${col}${row}`} />);
      }
    }
    prop.shipsCoords.forEach((coords) => {
      fields[coords.X][coords.Y] = (
        <Square key={`${coords.X}${coords.Y}`} bg={SquareEnum.Ship} />
      );
    });
  } else {
    for (let row = 0; row < 10; row++) {
      fields.push([]);
      for (let col = 0; col < 10; col++) {
        fields[row].push(<Square key={`${col}${row}`} />);
      }
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

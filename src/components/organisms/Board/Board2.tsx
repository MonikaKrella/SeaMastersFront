import { useEffect, useRef, useState } from 'react';

import Square from '../../atoms/Square/Square';
import {
  BoardNumbersStyled,
  BoardWrapperStyled,
  GameBoardStyled,
} from './BoardStyled';
import { BoardRaportType } from '../../../types/typeAliases/boardRaport.type';
import { ICoords } from '../../../types/interfaces/ICoords.interface';
import { SquareEnum } from '../../../types/enums/square.enum';
import { createEmptySquaresBoard } from '../../../tools/boardTools/emptyBoard.creator';

type BoardPropType = {
  shipsCoords?: ICoords[] | null;
  shootingArea?: number[][];
  boardRaport?: number[][] | null;
};

export function Board2(prop: BoardPropType) {
  const [fieldsArr, setFieldsArr] = useState<JSX.Element[][]>([]);
  const refFields = useRef<JSX.Element[][]>([]);
  //const [isArrUpdated, setIsArrUpdated] = useState(false);
  const numbers: JSX.Element[] = [];
  for (let index = 0; index < 10; index++) {
    numbers.push(<Square key={`${index}a`} content={index + 1}></Square>);
  }

  useEffect(() => {
    let fields: JSX.Element[][] = [];
    if (prop.boardRaport) {
      console.log(prop.boardRaport);
      const temporaryFields = fieldsArr;

      for (let row = 0; row < temporaryFields.length; row++) {
        for (let col = 0; col < temporaryFields.length; col++) {
          temporaryFields[row][col] = (
            <Square key={`${row}${col}`} bg={prop.boardRaport[row][col]} />
          );
        }
      }
      console.log(temporaryFields);
      setFieldsArr(temporaryFields);
    } else if (prop.shootingArea) {
      fields = createEmptySquaresBoard(prop.shootingArea);
      setFieldsArr(fields);
      refFields.current = fields;
    } else if (prop.shipsCoords) {
      fields = createEmptySquaresBoard();
      prop.shipsCoords.forEach((coords) => {
        fields[coords.Y][coords.X] = (
          <Square key={`${coords.Y}${coords.X}`} bg={SquareEnum.Ship} />
        );
      });
      setFieldsArr(fields);
    } else if (fieldsArr.length === 0) {
      fields = createEmptySquaresBoard();
      setFieldsArr(fields);
      refFields.current = fields;
    }
  }, [prop]);

  const temporaryFields = fieldsArr;
  if (prop.boardRaport) {
    for (let row = 0; row < temporaryFields.length; row++) {
      for (let col = 0; col < temporaryFields.length; col++) {
        temporaryFields[row][col] = (
          <Square key={`${row}${col}`} bg={prop.boardRaport[row][col]} />
        );
      }
    }
  }

  return (
    <BoardWrapperStyled>
      <BoardNumbersStyled>{numbers}</BoardNumbersStyled>
      <GameBoardStyled>{temporaryFields}</GameBoardStyled>
    </BoardWrapperStyled>
  );
}

export default Board2;

// useEffect(() => {
//   if (prop.boardRaport) {
//     const effect: SquareEnum = prop.boardRaport.ShootedFieldState;
//     refFields.current = fieldsArr;
//     refFields.current[prop.boardRaport.ShotCoordinates.Y][
//       prop.boardRaport.ShotCoordinates.X
//     ] = (
//       <Square
//         key={`${prop.boardRaport.ShotCoordinates.Y}${prop.boardRaport.ShotCoordinates.X}`}
//         bg={effect}
//       />
//     );
//     setFieldsArr(refFields.current);
//   } else {
//     refFields.current = fieldsArr;
//   }
// }, [prop]);

// let temporaryArr = refFields.current;
// if (prop.boardRaport) {
//   const effect: SquareEnum = prop.boardRaport.ShootedFieldState;
//   temporaryArr = refFields.current;
//   temporaryArr[prop.boardRaport.ShotCoordinates.Y][
//     prop.boardRaport.ShotCoordinates.X
//   ] = (
//     <Square
//       key={`${prop.boardRaport.ShotCoordinates.Y}${prop.boardRaport.ShotCoordinates.X}`}
//       bg={effect}
//     />
//   );
// } else {
//   temporaryArr = fieldsArr;
// }

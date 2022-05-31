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
  boardRaport?: BoardRaportType | null;
};

export function Board(prop: BoardPropType) {
  const [fieldsArr, setFieldsArr] = useState<JSX.Element[][]>([]);
  const refFields = useRef<JSX.Element[][]>([]);
  //const [isArrUpdated, setIsArrUpdated] = useState(false);
  const numbers: JSX.Element[] = [];
  for (let index = 0; index < 10; index++) {
    numbers.push(<Square key={`${index}a`} content={index + 1}></Square>);
  }

  useEffect(() => {
    let fields: JSX.Element[][] = [];
    if (prop.shootingArea) {
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

  let temporaryArr = refFields.current;
  if (prop.boardRaport) {
    const effect: SquareEnum = prop.boardRaport.ShootedFieldState;
    temporaryArr = refFields.current;
    temporaryArr[prop.boardRaport.ShotCoordinates.Y][
      prop.boardRaport.ShotCoordinates.X
    ] = (
      <Square
        key={`${prop.boardRaport.ShotCoordinates.Y}${prop.boardRaport.ShotCoordinates.X}`}
        bg={effect}
      />
    );
  } else {
    temporaryArr = fieldsArr;
  }

  return (
    <BoardWrapperStyled>
      <BoardNumbersStyled>{numbers}</BoardNumbersStyled>
      <GameBoardStyled>{temporaryArr}</GameBoardStyled>
    </BoardWrapperStyled>
  );
}

export default Board;

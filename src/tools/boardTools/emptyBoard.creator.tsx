import Square from '../../components/atoms/Square/Square';
import { BOARD_SIZE } from '../../consts/gameSettings';
import { SquareEnum } from '../../types/enums/square.enum';

export function createEmptySquaresBoard(shootingArea?: number[][]) {
  const fields: JSX.Element[][] = [];

  for (let row = 0; row < BOARD_SIZE; row++) {
    fields.push([]);
    for (let col = 0; col < BOARD_SIZE; col++) {
      fields[row].push(
        <Square
          bg={shootingArea ? shootingArea[row][col] : SquareEnum.Empty}
          key={`${col}${row}`}
        />
      );
    }
  }
  return fields;
}

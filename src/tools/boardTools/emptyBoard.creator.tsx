import Square from '../../components/atoms/Square/Square';
import { SquareEnum } from '../../types/enums/square.enum';

export function createEmptySquaresBoard(shootingArea?: number[][]) {
  const fields: JSX.Element[][] = [];

  for (let row = 0; row < 10; row++) {
    fields.push([]);
    for (let col = 0; col < 10; col++) {
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

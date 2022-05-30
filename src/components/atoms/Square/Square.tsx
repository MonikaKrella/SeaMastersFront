import { SquareEnum } from '../../../types/square.enum';
import { SquareStyled } from './SquareStyled';

type PropType = {
  bg?: SquareEnum;
  content?: string | number;
};
function Square(prop?: PropType) {
  if (prop?.content) {
    return <SquareStyled>{prop.content}</SquareStyled>;
  }
  return <SquareStyled></SquareStyled>;
}

export default Square;

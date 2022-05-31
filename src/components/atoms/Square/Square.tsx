import { SquareEnum } from '../../../types/square.enum';
import { SquareStyled } from './SquareStyled';

type PropType = {
  bg?: SquareEnum;
  content?: string | number;
};
function Square(prop?: PropType) {
  if (prop?.content) {
    return <SquareStyled bg={prop.bg}>{prop.content}</SquareStyled>;
  }
  return <SquareStyled bg={prop?.bg}></SquareStyled>;
}

export default Square;

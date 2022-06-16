import styled from 'styled-components';

import { SquareEnum } from '../../../types/enums/square.enum';

interface Props {
  bg?: SquareEnum;
}

const getColor = (props: Props) => {
  switch (props.bg) {
    case SquareEnum.Unknown:
      return `#3B79CD`;
    case SquareEnum.Hit:
      return `#993115`;
    case SquareEnum.Miss:
      return `#A09F8B`;
    case SquareEnum.Empty:
      return `#7EA1BB`;
    case SquareEnum.Ship:
      return `#A76A21`;
    default:
      return `#87919e`;
  }
};

export const SquareStyled = styled.div<Props>`
  border-width: 1px;
  border-style: solid;
  border-color: lightblue;
  background-color: ${(props) => getColor(props)};
  width: 1.3rem;
  height: 1.3rem;
`;

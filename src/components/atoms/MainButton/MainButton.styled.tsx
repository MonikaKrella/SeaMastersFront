import styled from 'styled-components';

import { ButtonStyle } from '../../../types/enums/buttonStyles.enum';

interface Props {
  bg: ButtonStyle;
}

const getColor = (props: Props) => {
  switch (props.bg) {
    case ButtonStyle.Primary:
      return '#5688cb';
    case ButtonStyle.Secondary:
      return '#87919e';
  }
};

export const MainButtonStyled = styled.button<Props>`
  background-color: ${(props) => getColor(props)};
  max-width: 20rem;
  max-height: 8rem;
  border-radius: 10px;
  border: 1px;
  cursor: pointer;
  font-size: 1rem;
  font-weight: 700;
  padding: 0.5rem;

  &:hover {
    opacity: 0.9;
    transform: scale(0.98);
  }
`;

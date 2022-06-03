import { ButtonStyle } from '../../../types/enums/buttonStyles.enum';
import { MainButtonStyled } from './MainButton.styled';

type PropType = {
  btnText: string;
  bg: ButtonStyle;
  handleOnClick: () => void;
};

function MainButton(prop: PropType) {
  return (
    <MainButtonStyled bg={prop.bg} onClick={prop.handleOnClick}>
      {prop.btnText}
    </MainButtonStyled>
  );
}

export default MainButton;

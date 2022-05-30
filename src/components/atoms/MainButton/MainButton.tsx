import { MainButtonStyled } from './MainButton.styled';

type PropType = {
  btnText: string;
  handleOnClick: () => void;
};

function MainButton(prop: PropType) {
  return (
    <MainButtonStyled onClick={prop.handleOnClick}>
      {prop.btnText}
    </MainButtonStyled>
  );
}

export default MainButton;

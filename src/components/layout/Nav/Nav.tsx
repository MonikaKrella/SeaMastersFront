import NavLink from '../../atoms/NavLink/NavLink';
import seamlogo from '../../../assets/seamlogo.png';
import { BUTTONS } from '../../../consts/texts';
import { LinkBoxStyled } from '../../organisms/LinkBox/LinkBoxStyled';
import { Logo, NavStyled } from './Nav.styled';

function Nav() {
  return (
    <NavStyled>
      <Logo src={seamlogo} alt="game logo" />
      <LinkBoxStyled>
        <NavLink to={'/'} text={BUTTONS.gamePage} />
        <NavLink to={'/rules'} text={BUTTONS.rulesPage} />
      </LinkBoxStyled>
    </NavStyled>
  );
}

export default Nav;

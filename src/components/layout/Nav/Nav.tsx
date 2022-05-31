import NavLink from '../../atoms/NavLink/NavLink';
import seamlogo from '../../../assets/seamlogo.png';
import { LinkBoxStyled } from '../../organisms/LinkBox/LinkBoxStyled';
import { Logo, NavStyled } from './Nav.styled';

function Nav() {
  return (
    <NavStyled>
      <Logo src={seamlogo} alt="game logo" />
      <LinkBoxStyled>
        <NavLink to={'/'} text={'Game'} />
        <NavLink to={'/rules'} text={'Rules'} />
      </LinkBoxStyled>
    </NavStyled>
  );
}

export default Nav;

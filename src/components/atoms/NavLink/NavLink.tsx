import { LinkTextStyled, NavLinkStyled } from './NavLinkStyled';

type LinkProps = {
  to: string;
  text: string;
};

function NavLink(prop: LinkProps) {
  return (
    <NavLinkStyled to={prop.to}>
      <LinkTextStyled>{prop.text}</LinkTextStyled>
    </NavLinkStyled>
  );
}

export default NavLink;

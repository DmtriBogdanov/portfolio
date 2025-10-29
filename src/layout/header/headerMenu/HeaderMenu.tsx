import styled from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link} from "react-scroll";

type MenuPropsType = {
  isOpen: boolean;
  toggleMenu: () => void;
}

const menuItems = [
  {
    title: "About",
    href: "about"
  },
  {
    title: "Skills",
    href: "skills"
  },
  {
    title: "Portfolio",
    href: "portfolio"
  },
  {
    title: "Contact Me",
    href: "contact"
  }];

export const HeaderMenu = ({isOpen, toggleMenu}: MenuPropsType) => {
  return (
    <StyledHeaderMenu
      isOpen={isOpen}
      role="navigation"
      aria-label="Main menu"
    >
      <ul>
        {menuItems.map((item, index) => {
          return (
            <ListItem key={index}>
              <NavLink to={item.href} smooth={true} activeClass="active" spy={true} offset={-70} onClick={toggleMenu}>
                {item.title}
              </NavLink>
            </ListItem>
          )
        })}
      </ul>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav<{ isOpen: boolean }>`
  ul {
    display: flex;
    gap: 45px;

    @media ${theme.media.tablet} {
      flex-direction: column;
    }
  }

  @media ${theme.media.tablet} {
    position: fixed;
    background-color: ${theme.colors.light};
    top: 0;
    left: ${(props) => (props.isOpen ? "0" : "-100%")};
    z-index: 10;
    width: 100%;
    height: 100%;
    padding: 115px 50px 50px;
    transition: ${theme.transactionDuration};
    overflow-y: auto;
  }

`

const ListItem = styled.li`

`

const NavLink = styled(Link)`
  padding: 10px 18px;
  font-weight: 400;
  font-size: 25px;
  letter-spacing: 0.06em;
  color: ${theme.colors.dark};
  transition: ${theme.transactionDuration};
  cursor: pointer;

  @media (hover: hover) {
    &:hover,
    &.active {
      color: ${theme.colors.light};
      background-color: ${theme.colors.accent};
      border-radius: ${theme.borderRadius};
    }
  }

`

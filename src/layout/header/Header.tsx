import styled from "styled-components";
import {Container} from "../../components/container/Container";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper";
import {theme} from "../../styles/Theme";
import {HeaderMenu} from "./headerMenu/HeaderMenu";
import {Icon} from "../../components/icon/Icon";
import {useEffect, useState} from "react";
import {animateScroll as scroll} from "react-scroll"



export const Header = () => {

  const [isOpenMenu, setIsOpenMenu] = useState(false);
  const toggleMenu = () => {
    setIsOpenMenu(!isOpenMenu);
  }

  useEffect(() => {
    if  (isOpenMenu && window.matchMedia(theme.media.tablet).matches) {
      document.body.classList.add('lock');
    } else {
      document.body.classList.remove('lock');
    }
    return () => {
      document.body.classList.remove('lock');
    };
  }, [isOpenMenu]);
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper
          justify="space-between"
          align="center"
        >
          <Logo
            onClick={() => {scroll.scrollToTop()}}
            aria-label="Go to homepage"
          >
            <Icon
              iconId={"logo"}
              width={"84"}
              height={"84"}
              viewBox={"0 0 84 84"}
            />
          </Logo>
          <HeaderMenu
            aria-hidden={!isOpenMenu}
            isOpen={isOpenMenu}
            toggleMenu={toggleMenu}
          />
          <BurgerButton
            aria-expanded={isOpenMenu}
            aria-controls="main-navigation"
            aria-label={isOpenMenu ? "Close menu" : "Open menu"}
            onClick={toggleMenu}
            isOpen={isOpenMenu}
          >
            <BurgerLine></BurgerLine>
            <BurgerLine></BurgerLine>
            <BurgerLine></BurgerLine>
          </BurgerButton>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 10;
  width: 100%;
  background-color: ${theme.colors.light};

  @media ${theme.media.tablet} {
    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      z-index: 10;
      width: 100%;
      height: 91px;
      background-color: ${theme.colors.light};
    }
  }

`
const Logo = styled.a`
  position: relative;
  z-index: 11;
  cursor: pointer;
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: relative;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 25px;
  height: 19px;
  cursor: pointer;
  z-index: 10;

  @media ${theme.media.tablet} {
    display: inline-flex;
  }

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 44px;
    height: 44px;
  }

  span:nth-child(1) {
    transform: ${(props) => (props.isOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none')};
    transition: transform 0.3s ease;
  }

  span:nth-child(2) {
    opacity: ${(props) => (props.isOpen ? 0 : 1)};
    transition: opacity 0.3s ease;
  }

  span:nth-child(3) {
    transform: ${(props) => (props.isOpen ? 'rotate(-45deg) translate(7px, -6px)' : 'none')};
    transition: transform 0.3s ease;
  }
`

const BurgerLine = styled.span`
  width: 100%;
  height: 3px;
  background-color: ${theme.colors.dark};
  border-radius: 10px;
`

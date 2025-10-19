import styled from "styled-components";
import {Logo} from "../../components/logo/Logo";
import {Container} from "../../components/container/Container";
import {FlexWrapper} from "../../components/flexWrapper/FlexWrapper";
import {theme} from "../../styles/Theme";
import {HeaderMenu} from "./headerMenu/HeaderMenu";

const menuItems = ["About", "Skills", "Portfolio", "Contact Me"];

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <FlexWrapper justify="space-between" align="center">
          <Logo/>
          <HeaderMenu menuItems={menuItems}/>
        </FlexWrapper>
      </Container>
    </StyledHeader>
  );
};

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${theme.colors.light};
`

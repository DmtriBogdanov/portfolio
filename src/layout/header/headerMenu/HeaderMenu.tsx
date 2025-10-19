import styled from "styled-components";
import {theme} from "../../../styles/Theme";

type MenuPropsType = {
  menuItems: Array<string>
}

export const HeaderMenu = (props: MenuPropsType) => {
  return (
    <StyledHeaderMenu>
      <ul>
        {props.menuItems.map((item, index) => {
          return (
            <ListItem key={index}>
              <Link  href="/">
                {item}
              </Link>
            </ListItem>
          )
        })}
      </ul>
    </StyledHeaderMenu>
  );
};

const StyledHeaderMenu = styled.nav`
  ul {
    display: flex;
    gap: 45px;
  }
`

const ListItem = styled.li`

`

const Link = styled.a`
  padding: 10px 18px;
  font-weight: 400;
  font-size: 25px;
  letter-spacing: 0.06em;
  color: ${theme.colors.dark};
  transition: ${theme.transactionDuration};
  
  &:hover {
    color: ${theme.colors.light};
    background-color: ${theme.colors.accent};
    border-radius: ${theme.borderRadius};
  }
`

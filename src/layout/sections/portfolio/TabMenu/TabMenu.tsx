import styled from "styled-components";
import {theme} from "../../../../styles/Theme";

type MenuPropsType = {
  menuItems: Array<string>
}

export const TabMenu = (props: MenuPropsType) => {
  return (
    <StyledTabMenu>
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
    </StyledTabMenu>
  );
};

const StyledTabMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
  }
`

const ListItem = styled.li`
  position: relative;
`

const Link = styled.a`
  padding: 0 10px;
  font-weight: 400;
  font-size: 14px;
  letter-spacing: 0.06em;
  color: ${theme.colors.dark};
  text-transform: uppercase;
  transition: ${theme.transactionDuration};
  
  &::before {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    display: inline-block;
    height: 5px;
    width: 0;
    background-color:${theme.colors.accent};
    opacity: 0;
    transition: ${theme.transactionDuration}, width 0.4s;
  }
  
  &:hover {
    &::before {
      width: 100%;
      opacity: 1;
    }
  }
`

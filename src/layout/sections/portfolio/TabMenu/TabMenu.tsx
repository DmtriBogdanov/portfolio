import styled, {css} from "styled-components";
import {theme} from "../../../../styles/Theme";

export type TabsStatusType = "all" | "landing" | "react" | "spa"

type TabMenuPropsType = {
  tabsItems: Array<{ status: TabsStatusType, title: string}>
  changeFilterStatus: (value: TabsStatusType) => void
  currentFilterStatus: string
}

export const TabMenu = (props: TabMenuPropsType) => {
  return (
    <StyledTabMenu
      role="navigation"
      aria-label="Portfolio filter menu"
    >
      <ul role="menubar">
        {props.tabsItems.map((item, index) => {
          return (
            <ListItem key={index}>
              <Link
                active ={props.currentFilterStatus === item.status}
                as={"button"}
                onClick={() => {props.changeFilterStatus(item.status)}}
                role="menuitem"
              >
                {item.title}
              </Link>
            </ListItem>
          )
        })}
      </ul>
    </StyledTabMenu>
  );
};

const StyledTabMenu = styled.nav`
  margin-bottom: 40px;

  ul {
    display: flex;
    justify-content: center;
    gap: 30px;

    @media ${theme.media.mobileSmall} {
      gap: 20px;
    }
  }
`

const ListItem = styled.li`

`

const Link = styled.a<{active?: boolean}>`
  position: relative;
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
    background-color: ${theme.colors.accent};
    opacity: 0;
    transition: ${theme.transactionDuration}, width 0.4s;
  
  ${props => props.active && css<{ active?: boolean }>`
    width: 100%;
    opacity: 1;
  `}  
  }
  @media (hover: hover) {
    &:hover {
      &::before {
        width: 100%;
        opacity: 1;
      }
    }
  }


  @media ${theme.media.mobileSmall} {
    padding: 0;
  }
`

import styled from "styled-components";
import {theme} from "../../styles/Theme";
type ButtonPropsType = {
  title: string;
  type: "submit" | "reset" | "button";
}

export const Button = (props: ButtonPropsType) => {
  return (
    <StyledButton type={props.type}>
      {props.title}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  font-weight: 600;
  font-size: 16px;
  color: #fff;
  border: 2px solid #608af5;
  border-radius: ${theme.borderRadius};
  width: 186px;
  height: 50px;
  background-color: #608af5;
  transition: ${theme.transactionDuration};
  
  &:hover {
    background-color: transparent;
    color: ${theme.colors.accent};
  }
`

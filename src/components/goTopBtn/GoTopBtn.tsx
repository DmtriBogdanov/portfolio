import {Icon} from "../icon/Icon";
import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {animateScroll as scroll} from "react-scroll"
import {useEffect, useState} from "react";

export const GoTopBtn = () => {
  const [showBtn, setShowBtn] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if(window.scrollY > 200) {
        setShowBtn(true)
      } else {
        setShowBtn(false)
      }
    });
  }, [])
  return (
    <>
      {showBtn && (
        <StyledGoTopBtn onClick={() => {scroll.scrollToTop()}}>
          <Icon iconId={"goTop"} width={"16"} height={"15"} viewBox={"0 0 16 15"}/>
        </StyledGoTopBtn>
      )}

    </>

  );
};

const StyledGoTopBtn = styled.button`
  position: fixed;
  right: 30px;
  bottom: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;
  background-color: ${theme.colors.accent};
  border-radius: 50%;
`
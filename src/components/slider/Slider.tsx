import styled from "styled-components";
import {FlexWrapper} from "../flexWrapper/FlexWrapper";

export const Slider = () => {
  return (
    <StyledSlider>
      <FlexWrapper>
        <Slide />
      </FlexWrapper>
      <Pagination>
        <span></span>
        <span></span>
        <span></span>
      </Pagination>
    </StyledSlider>
  );
};

const StyledSlider = styled.div`

`

const Slide = styled.div``

const Pagination = styled.div`
  span {
    display: inline-block;
    width: 10px;
    height: 10px;
    margin: 5px;
    border-radius: 50%;
    background-color: #5da9c9;
  }
`


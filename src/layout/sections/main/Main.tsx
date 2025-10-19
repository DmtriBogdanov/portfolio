import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper";
import {Container} from "../../../components/container/Container"
import {theme} from "../../../styles/Theme";
import styled from "styled-components";

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <FlexWrapper
          justify={"space-between"}
          align={"center"}
        >
          <ContentBox>
            <SmallText>Hi !</SmallText>
            <Name>I’m Dmitry Bogdanov.</Name>
            <MainTitle>Front-End Developer</MainTitle>
            <p>I’m a front-end developer from Russia who loves turning ideas into pixel-perfect web apps.</p>
          </ContentBox>
          <Icon
            iconId={"hero"}
            width={"501"}
            height={"467"}
            viewBox={"0 0 501 467"}
          />
        </FlexWrapper>
      </Container>
    </StyledMain>
  );
};

const StyledMain = styled.section`
  display: flex;
  min-height: 100vh;
`

const ContentBox = styled.div`
  text-align: left;
  max-width: 580px;
  color: ${theme.colors.titleColor};
  & p {
    font-size: 23px;
    color: ${theme.colors.dark};
  }
`

const MainTitle = styled.h1`
  font-weight: 600;
  font-size: 50px;
  margin-bottom: 40px;
`
const Name = styled.h2`
  font-weight: 600;
  font-size: 50px;
`
const SmallText = styled.span`
  font-size: 35px;
`

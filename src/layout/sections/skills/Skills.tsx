import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";

import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import {Container} from "../../../components/container/Container";
import {theme} from "../../../styles/Theme";

export const Skills = () => {
  return (
    <StyledSkills id="skills">
      <Container>
        <SectionTitle title={"Skills"} />
        <FlexWrapper align="center" justify="center" gap="100px" wrap="wrap">
          <Icon iconId={"html"} />
          <Icon iconId={"css"} />
          <Icon iconId={"js"} />
          <Icon iconId={"react"} width="115" height="118" viewBox="0 0 115 118"/>
        </FlexWrapper>
      </Container>

    </StyledSkills>
  );
};

const StyledSkills = styled.section`
  ${FlexWrapper} {
    > * {
      flex: 0 1 auto;

      @media ${theme.media.mobile} {
        flex: 0 1 calc(33.333% - 40px); /* по 2 в ряд на планшете */
      }

      @media ${theme.media.mobileSmall} {
        flex: 0 1 calc(50% - 40px); /* по 2 в ряд на планшете */
      }
    }

    @media ${theme.media.tablet} {
      gap: 60px;
    }

  }
`

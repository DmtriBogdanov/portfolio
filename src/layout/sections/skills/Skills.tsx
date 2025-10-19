import styled from "styled-components";
import {Icon} from "../../../components/icon/Icon";

import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import {Container} from "../../../components/container/Container";

export const Skills = () => {
  return (
    <StyledSkills>
      <Container>
        <SectionTitle title={"Skills"} />
        <FlexWrapper align="center" justify="center" gap="100px">
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

`

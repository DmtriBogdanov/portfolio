import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

type SectionTitlePropsType = {
  title: string
}
export const SectionTitle = (props: SectionTitlePropsType) => {
  return (
    <StyledSectionTitle>{props.title}</StyledSectionTitle>
  );
};

export default SectionTitle;


const StyledSectionTitle = styled.h2`
  ${font({weight: 600, Fmax: 35, Fmin: 26, color: theme.colors.titleColor})}
  text-align: center;
  margin-bottom: 60px;
  
  @media ${theme.media.tablet} {
    margin-bottom: 40px;
  }
  
  @media ${theme.media.mobile} {
    margin-bottom: 30px;
  }
`
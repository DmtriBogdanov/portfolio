import styled from "styled-components";
import {theme} from "../../styles/Theme";

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
  font-weight: 600;
  font-size: 35px;
  letter-spacing: 0.18em;
  text-align: center;
  color: ${theme.colors.titleColor};
  margin-bottom: 60px;
`
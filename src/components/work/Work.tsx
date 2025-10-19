import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {FlexWrapper} from "../flexWrapper/FlexWrapper";

type WorkPropsType = {
  title: string;
  text: string;
  src: string
}

export const Work = (props: WorkPropsType) => {
  return (
    <StyledWork>
      <Image src={props.src} alt="" />
      <FlexWrapper direction="column" align="flex-start">
        <Title>{props.title}</Title>
        <Text>{props.text}</Text>
        <FlexWrapper align="flex-start" gap="18px">
          <Link href={"#"}>View Live</Link>
          <Link href={"#"}>Github Repo</Link>
        </FlexWrapper>
      </FlexWrapper>
    </StyledWork>
  );
};

const StyledWork = styled.div`
  max-width: 343px;
  width: 100%;
  box-shadow: 0 6px 30px 1px rgba(0, 0, 0, 0.25);
  background: ${theme.colors.light};
  padding: 16px 16px 23px;
  border-radius: ${theme.borderRadius};
`

const Image = styled.img`
  width: 100%;
  border-radius: ${theme.borderRadius};
  border: 2px solid ${theme.colors.accent};
  margin-bottom: 16px;
`

const Title = styled.h3`
  font-weight: 600;
  font-size: 24px;
  color: ${theme.colors.accent};
  margin-bottom: 5px;
  text-transform: uppercase;
`

const Text = styled.p`
  font-weight: 500;
  font-size: 18px;
  text-align: left;
  margin-bottom: 24px;
`

const Link = styled.a`
  padding: 10px 0;
  min-width: 145px;
  font-weight: 600;
  font-size: 16px;
  color: ${theme.colors.accent};
  border: 2px solid #608af5;
  border-radius: 8px;
  transition: ${theme.transactionDuration};
  
  &:hover {
    background-color: ${theme.colors.accent};
    color: ${theme.colors.light};
  }
`
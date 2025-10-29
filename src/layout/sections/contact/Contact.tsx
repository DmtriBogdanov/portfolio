import styled from "styled-components";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import {Button} from "../../../components/button/Button";
import {Icon} from "../../../components/icon/Icon";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper";
import {Container} from "../../../components/container/Container"
import {theme} from "../../../styles/Theme";

export const Contact = () => {
  return (
    <StyledContacts id={"contact"}>
      <Container>
        <SectionTitle title="Contact" />
        <FlexWrapper justify="space-between" gap={"20px"}>
          <MapWrapper>
            <ContactMap>
              <Map
                title="google-map"
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d1122.8248352615644!2d37.53678560256959!3d55.74721574041895!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1z0LzQvtGB0LrQstCwINGB0LjRgtC4!5e0!3m2!1sru!2sru!4v1760794913008!5m2!1sru!2sru"
              />

            </ContactMap>
            <SocialIconsList>
              <SocialIconItem>
                <SocialIconLink>
                  <Icon
                    iconId="github"
                    width="54"
                    height="50"
                    viewBox="0 0 54 50"
                  />
                </SocialIconLink>
              </SocialIconItem>
              <SocialIconItem>
                <SocialIconLink>
                  <Icon
                    iconId="instagram"
                    width="54"
                    height="50"
                    viewBox="0 0 54 50"/>
                </SocialIconLink>
              </SocialIconItem>
              <SocialIconItem>
                <SocialIconLink>
                  <Icon iconId="email" width="54" height="50" viewBox="0 0 54 50"/>
                </SocialIconLink>
              </SocialIconItem>
              <SocialIconItem>
                <SocialIconLink>
                  <Icon iconId="call" width="54" height="50" viewBox="0 0 54 50"/>
                </SocialIconLink>
              </SocialIconItem>
            </SocialIconsList>
          </MapWrapper>
          <StyledForm>
            <Field placeholder="Name" />
            <Field placeholder="Email" />
            <Field
              as={"textarea"}
              placeholder="Message"
            />
            <Button
              title="Send"
              type="submit"
            />
          </StyledForm>
        </FlexWrapper>
      </Container>


    </StyledContacts>
  );
};

const StyledContacts = styled.section`
  @media ${theme.media.tablet} {
    ${FlexWrapper} {
      flex-direction: column-reverse;
      align-items: center;
    }
  }
  
`

const StyledForm = styled.form`
  max-width: 500px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;

  textarea {
    resize: none;
    height: 116px;
    overflow: auto;
  }
`

const Field = styled.input`
  width: 100%;
  height: 62px;
  padding: 19px 17px;
  border: 2px solid ${theme.colors.accent};
  border-radius: ${theme.borderRadius};
  font-family: inherit;
  color: ${theme.colors.dark};
  font-size: 18px;
  font-weight: 500;
  &::placeholder {
    color: ${theme.colors.accent};
    opacity: 0.5;
    font-size: 16px;
    font-weight: 500;
    text-transform: capitalize;
  }
  
  &:focus-visible {
    outline: 2px solid ${theme.colors.accent};;
  }
`
const MapWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 500px;
  width: 100%;
  
`
const ContactMap = styled.div`
  max-width: 500px;
  width: 100%;
  border: 2px solid #608af5;
  border-radius: ${theme.borderRadius};
`

const Map = styled.iframe`
  display: block;
  width: 100%;
  aspect-ratio: 16 / 9;
  border: none;
  border-radius: ${theme.borderRadius};
`

const SocialIconsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  
`

const SocialIconItem = styled.li`
`

const SocialIconLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border: 2px solid ${theme.colors.accent};
  border-radius: ${theme.borderRadius};
  background-color: ${theme.colors.accent};
  color: ${theme.colors.light};
  transition: ${theme.transactionDuration};
  
  @media (hover: hover) {
    &:hover {
      transform: translateY(-5px);
      background-color: transparent;
      color: ${theme.colors.accent};
    }
  }
  
`

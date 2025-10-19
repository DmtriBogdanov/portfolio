import styled from "styled-components";
import {Container} from "../../components/container/Container";
import {theme} from "../../styles/Theme";

export const Footer = () => {
  return (
    <StyledFooter>
      <Wave
        viewBox="0 0 1719 330"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path d="M0 329.6L57.3 288.4C114.6 247.2 229.2 164.8 343.8 164.8C458.4 164.8 573 247.2 687.6 247.2C802.2 247.2 916.8 164.8 1031.4 151.152C1146 136.475 1260.6 193.125 1375.2 178.447C1489.8 164.8 1604.4 82.4 1661.7 41.2L1719 0V329.6H1661.7C1604.4 329.6 1489.8 329.6 1375.2 329.6C1260.6 329.6 1146 329.6 1031.4 329.6C916.8 329.6 802.2 329.6 687.6 329.6C573 329.6 458.4 329.6 343.8 329.6C229.2 329.6 114.6 329.6 57.3 329.6H0Z" fill="#608AF5" />
      </Wave>
      <Container>
        <Copyright>© 2025 Dmitry Bogdanov, All Rights Reserved.</Copyright>
      </Container>
    </StyledFooter>
  );
};

const StyledFooter = styled.footer`
  position: relative;
  // background-color: ${theme.colors.accent};
  height: 330px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${theme.colors.light};
  overflow: hidden;


`
const Copyright = styled.span`
  position: absolute;
  bottom: 27px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 0;
  font-size: 16px;
  color: ${theme.colors.light};
`

const Wave = styled.svg`
  position: absolute;
  bottom: 0;
  left: 50%;
  z-index: -1;
  transform: translateX(-50%);
  width: 120%;
  height: auto;

  @media (max-width: 1024px) {
    width: 150%;
  }

  @media (max-width: 768px) {
    width: 200%;
  }

  @media (max-width: 480px) {
    width: 250%;
  }
`
import styled from "styled-components";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper";
import {Work} from "../../../components/work/Work";
import {Container} from "../../../components/container/Container";
import portfolioImg_1 from "../../../assets/images/portfolio_1.webp"
import portfolioImg_2 from "../../../assets/images/portfolio_2.webp"
import portfolioImg_3 from "../../../assets/images/portfolio_3.webp"
import {TabMenu} from "./TabMenu/TabMenu";

const portfolioItems = ["all", "landing page", "react", "spa",]

export const Portfolio = () => {
  return (
    <StyledPortfolio>
      <Container>
        <SectionTitle title="Portfolio" />
        <FlexWrapper direction="column" align="center" gap="40px">
          <TabMenu menuItems={portfolioItems} />
          <FlexWrapper justify="space-between" gap="50px" wrap="wrap">
            <Work
              src={portfolioImg_1}
              title="TWINDER"
              text="A live Geolocation app for finding tweets and twitter users around you."
            />
            <Work
              src={portfolioImg_2}
              title="LIVENTS"
              text="A video streaming app with live Geolocation, for streaming events."
            />
            <Work
              src={portfolioImg_3}
              title="MOOVE"
              text="Mobile app for booking instant pickup & dropoff accross major cities."
            />
          </FlexWrapper>
        </FlexWrapper>

      </Container>

    </StyledPortfolio>
  );
};

const StyledPortfolio = styled.section`

`
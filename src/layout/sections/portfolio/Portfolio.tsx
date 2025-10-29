import styled from "styled-components";
import SectionTitle from "../../../components/sectionTitle/SectionTitle";
import {FlexWrapper} from "../../../components/flexWrapper/FlexWrapper";
import {Work} from "../../../components/work/Work";
import {Container} from "../../../components/container/Container";
import portfolioImg_1 from "../../../assets/images/portfolio_1.webp"
import portfolioImg_2 from "../../../assets/images/portfolio_2.webp"
import portfolioImg_3 from "../../../assets/images/portfolio_3.webp"
import {TabMenu, TabsStatusType} from "./TabMenu/TabMenu";
import {useState} from "react";


const tabsItems: Array<{ status: TabsStatusType, title: string }> = [
  {
    title: "all",
    status: "all"
  },
  {
    title: "landing page",
    status: "landing"
  },
  {
    title: "react",
    status: "react"
  },
  {
    title: "spa",
    status: "spa"
  },
]

const workData = [
  {
    id: 1,
    title: "TWINDER",
    src: portfolioImg_1,
    text: "A live Geolocation app for finding tweets and twitter users around you.",
    type: "spa"
  },
  {
    id: 2,
    title: "LIVENTS",
    src: portfolioImg_2,
    text: "A video streaming app with live Geolocation, for streaming events.",
    type: "react"
  },
  {
    id: 3,
    title: "MOOVE",
    src: portfolioImg_3,
    text: "Mobile app for booking instant pickup & dropoff accross major cities.",
    type: "landing"
  },
]

export const Portfolio = () => {
  const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
  let filteredWorks = workData

  if (currentFilterStatus === "landing") {
    filteredWorks = workData.filter(work => work.type === "landing")
  }
  if (currentFilterStatus === "react") {
    filteredWorks = workData.filter(work => work.type === "react")
  }
  if (currentFilterStatus === "spa") {
    filteredWorks = workData.filter(work => work.type === "spa")
  }

  function changeFilterStatus(value: TabsStatusType) {
    setCurrentFilterStatus(value)
  }

  return (
    <StyledPortfolio id={"portfolio"}>
      <Container>
        <SectionTitle title="Portfolio" />
        <TabMenu
          tabsItems={tabsItems}
          changeFilterStatus={changeFilterStatus}
          currentFilterStatus={currentFilterStatus}
        />
        <FlexWrapper
          justify="space-between"
          gap="50px"
          wrap="wrap"
        >
          {filteredWorks.map((w) => {
            return (
              <Work
                key={w.id}
                src={w.src}
                title={w.title}
                text={w.text}
              />
            )
          })}
        </FlexWrapper>
      </Container>

    </StyledPortfolio>
  );
};

const StyledPortfolio = styled.section`
 
`
"use client";
import HomeHero from "@/components/Templates/Home/HomeHero";
import styled from "styled-components";
import HomeLittleAbout from "@/components/Templates/Home/HomeLittleAbout";
import HomeWorks from "@/components/Templates/Home/HomeWorks";
import HomeTitleWorks from "@/components/Templates/Home/HomeTitleWorks";
import useScrollToTopOnMount from "@/hooks/useScrollToTopOnMount/useScrollToTopOnMount";
import Loader from "@/components/Atoms/Loader/Loader";

const ArticleContainer = styled.div`
  min-height: 100vh;
  background-color: transparent;
`;

export default function Home() {
  useScrollToTopOnMount();

  return (
    <>
      <ArticleContainer>
        <Loader />
        <HomeHero />
        <HomeLittleAbout />
        <HomeTitleWorks />
        <HomeWorks />
      </ArticleContainer>
    </>
  );
}

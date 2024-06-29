"use client";
import SectionXL from "@/components/Atoms/Sections/SectionXL/SectionXL";
import TextStyled from "@/components/Atoms/TextStyled/TextStyled";
import { device } from "@/utils/BreakPoints/breakpoints";
import { Colors } from "@/utils/Theme/colors";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import { SplitText } from "gsap/SplitText";
import Image from "next/image";
import React, { useRef } from "react";
import styled from "styled-components";

gsap.registerPlugin(SplitText, CustomEase);

const Container = styled.div`
  padding-top: 150px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  height: fit-content;
  width: 100%;
  @media (${device.laptopM}) {
    flex-direction: row;
    height: 80vh;
  }
`;

const ContainerLittleElementColor = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  z-index: 0;
  width: 100vw;
  height: 100vh;
  svg {
    &:first-child {
      filter: blur(200px);
      opacity: 0.3;
      position: absolute;
      left: -10%;
      top: -60%;
      width: 50vw;
      z-index: 0;
    }
    &:last-child {
      filter: blur(200px);
      opacity: 0.4;
      position: absolute;
      right: -10%;
      top: 30%;
      width: 50vw;
      z-index: 0;
    }
  }
`;

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  position: relative;
  align-items: center;
  padding: 100px 20px 0 60px;
  box-sizing: border-box;
  @media (${device.laptopM}) {
    width: 50%;
    justify-content: flex-end;
    padding: 0;
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    position: relative;
    z-index: 2;
  }
`;

const TextContainer = styled.div`
  display: flex;
  position: relative;
  flex-direction: column;
  @media (${device.laptopM}) {
    position: absolute;
    flex-direction: column;
    left: 0;
    transform: translateY(-50%) rotate(-2deg);
    top: 70%;
  }
  gap: 20px;
  z-index: 35;

  h1 {
    max-width: 1200px;

    div {
      transform: translateY(100px) rotate(4deg);
      @media (${device.laptopM}) {
        position: absolute;
        flex-direction: column;
        left: 0;
        top: 50%;
        transform: translateY(-50%) rotate(-2deg);
      }
      opacity: 0;
    }

    > span:nth-child(2) {
      color: ${Colors.PRIMARY} !important;
    }

    > span:nth-child(5) {
      color: ${Colors.SECONDARY} !important;
    }
  }

  p {
    max-width: 800px;
    line-height: 24px;
  }
`;

const ContainerBackgroundImage = styled.div`
  position: absolute;
  left: -10%;
  top: 4%;
  z-index: 1;
  width: 100%;
  height: 100%;
  transform: scale(1.14);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const AllImagesContainer = styled.div`
  width: clamp(300px, 50vw, 500px);
  height: clamp(300px, 50vw, 500px);
  position: relative;
  transform: rotate(5deg);

  img {
    --clip: 0%;
    clip-path: polygon(0% 0%, 0% 100%, 0% 100%, 0% 0%);
  }
`;

const HomeHero: React.FC = () => {
  const ContainerTitleRef = useRef<HTMLDivElement>(null);
  const ContainerImagesRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      CustomEase.create("custom", "M0,0 C0.85,0 0.2,1 1,1");
      gsap.to("img", {
        clipPath: "polygon(0% 0%, 0% 100%, 100% 100%, 100% 0%)",
        duration: 1,
        ease: "custom",
        stagger: 0.3,
      });
    },
    { scope: ContainerImagesRef },
  );

  useGSAP(
    () => {
      CustomEase.create("custom", "M0,0 C0.85,0 0.2,1 1,1");
      const splitTitle = new SplitText("h1", { type: "words" });
      gsap.fromTo(
        splitTitle.words,
        { opacity: 0, y: 100 },
        {
          y: 0,
          rotate: 0,
          opacity: 1,
          stagger: 0.2,
          duration: 2,
          ease: "expo.out",
        },
      );
    },
    { scope: ContainerTitleRef },
  );

  return (
    <SectionXL as={"aside"} $bgcolor={"transparent"}>
      <ContainerLittleElementColor>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1471"
          height="1508"
          viewBox="0 0 1471 1508"
          fill="none"
        >
          <path
            d="M483.917 42.7216C862.254 -92.4134 1278.43 104.521 1413.47 482.588C1548.5 860.654 1493.83 1255.08 678.442 1063.65C455.191 1911.36 178.424 1350.02 43.3856 971.955C-91.6527 593.889 105.58 177.857 483.917 42.7216Z"
            fill="#2E6FB8"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1471"
          height="1508"
          viewBox="0 0 1471 1508"
          fill="none"
        >
          <path
            d="M483.917 42.7216C862.254 -92.4134 1278.43 104.521 1413.47 482.588C1548.5 860.654 1493.83 1255.08 678.442 1063.65C455.191 1911.36 178.424 1350.02 43.3856 971.955C-91.6527 593.889 105.58 177.857 483.917 42.7216Z"
            fill={Colors.SECONDARY}
          />
        </svg>
      </ContainerLittleElementColor>
      <Container>
        <TextContainer ref={ContainerTitleRef}>
          <TextStyled
            $spanColorTwo={Colors.SECONDARY}
            as={"h1"}
            type={"LargeTitle"}
          >
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            I'am <span data-speed="clamp(0.9)">mary</span>, a{" "}
            <span data-speed="clamp(0.4)">Brand Designer</span>
          </TextStyled>
        </TextContainer>
        <ImageContainer ref={ContainerImagesRef}>
          <AllImagesContainer>
            <ContainerBackgroundImage>
              <Image
                priority={true}
                src={"/images/textures/blue-texture.webp"}
                alt={"Blue Texture"}
                width={550}
                height={550}
              />
            </ContainerBackgroundImage>
            <Image
              priority={true}
              data-speed="clamp(0.8)"
              src={"/images/gallery/mary.webp"}
              alt={"Mary Image"}
              width={550}
              height={550}
            />
          </AllImagesContainer>
        </ImageContainer>
      </Container>
    </SectionXL>
  );
};

export default HomeHero;

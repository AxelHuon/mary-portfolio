import React, { useRef } from 'react';
import SectionXL from '@/components/Atomes/Sections/SectionXL/SectionXL';
import TextStyled from '@/components/Atomes/TextStyled/TextStyled';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { SplitText } from 'gsap/SplitText';
import styled from 'styled-components';
import DrawSVGPlugin from 'gsap/DrawSVGPlugin';

gsap.registerPlugin(SplitText, DrawSVGPlugin);

const ContainerLittleText = styled.section`
  height: 80vh;
  display: flex;
  align-items: center;
  justify-content: center;
  aside > div {
    margin: 0 auto;
    max-width: 70%;
    h4 {
      line-height: 50px;
      z-index: 100;
    }
  }
`;

const ContainerSvg = styled.div``;

const HomeLittleAbout: React.FC = () => {
  const aboutTextRef = useRef<HTMLDivElement>(null);
  const svgContainerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      let tl = gsap.timeline({
        scrollTrigger: {
          markers: false,
          start: 'top 60%',
          end: 'top 20%',
          trigger: aboutTextRef.current,
          scrub: true,
        },
      });
      const splitTitle = new SplitText('h4', { type: 'words' });
      tl.fromTo(
        splitTitle.words,
        {
          opacity: 0.1,
        },
        {
          stagger: 0.2,
          duration: 2,
          opacity: 1,
        },
      );
    },
    { scope: aboutTextRef },
  );

  return (
    <ContainerLittleText>
      <SectionXL>
        <div ref={aboutTextRef}>
          <ContainerSvg ref={svgContainerRef}></ContainerSvg>
          <TextStyled $align={'center'} as={'h4'} type={'CalloutRegular'}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias dignissimos dolore,
            eligendi eum illo inventore ipsum laudantium libero minus nobis non, odio pariatur
            praesentium quia quo sit tempora? Accusantium at deserunt, harum libero nulla pariatur
            perspiciatis quaerat saepe sed sit.
          </TextStyled>
        </div>
      </SectionXL>
    </ContainerLittleText>
  );
};

export default HomeLittleAbout;
